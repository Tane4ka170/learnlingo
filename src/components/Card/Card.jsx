import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { addFavorites, deleteFavorite } from '../../redux/favorite/operations';
import toast from 'react-hot-toast';
import Modal from 'components/Modal/Modal';
import BookTrialModal from 'components/BookTrialModal/BookTrialModal';

const Card = ({ teacher, authUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedTeacherId, setExpandedTeacherId] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const handleBookTrialClick = teacher => {
    setSelectedTeacher(teacher);
    toggleModal();
  };

  const close = () => {
    setIsModalOpen(false);
  };

  const handleReadMoreClick = teacherId => {
    setExpandedTeacherId(prevId => (prevId === teacherId ? null : teacherId));
  };

  const getButtonText = teacherId =>
    expandedTeacherId === teacherId ? 'Hide more' : 'Read More';

  const isFavorite =
    favorites &&
    favorites.some(favTeacher => favTeacher && favTeacher.id === teacher.id);

  const onSwitchFavorite = () => {
    if (authUser) {
      if (!isFavorite) {
        dispatch(addFavorites({ userId: authUser.uid, teacher }));
      } else {
        dispatch(
          deleteFavorite({ userId: authUser.uid, teacherId: teacher.id })
        );
      }
    } else {
      toast('You need to log in at first!', {
        icon: '❗',
      });
    }
  };

  return (
    <>
      <div>
        <img
          src={teacher.avatar_url}
          loading="lazy"
          alt="avatar"
          width="96"
          height="96"
        />
      </div>
      <div>
        <div>
          <p>Languages</p>
          <ul>
            <li>
              <div>
                {' '}
                <Book /> Lessons online
              </div>
            </li>
            <li>Lessons done: {teacher.lessons_done}</li>
            <li>
              <div>
                {' '}
                <Star /> Rating: {teacher.rating}
              </div>
            </li>
            <li>
              Price / 1 hour: <span>{teacher.price_per_hour}$</span>
            </li>
            <li>
              {' '}
              <button type="button" onClick={onSwitchFavorite}>
                {isFavorite && authUser ? <HeartDel /> : <Heart />}
              </button>
            </li>
          </ul>
        </div>

        <h2>
          {' '}
          {teacher.name} {teacher.surname}{' '}
        </h2>
        <ul>
          <li>
            <div>
              <span>Speaks: &nbsp;</span>
              <ul>
                {teacher.languages ? (
                  teacher.languages.map((language, index, array) => (
                    <React.Fragment key={language}>
                      <li>{language}</li>
                      {index < array.length - 1 && <span>, &nbsp;</span>}
                    </React.Fragment>
                  ))
                ) : (
                  <li>No languages available</li>
                )}
              </ul>
            </div>
          </li>
          <li>
            <span>Lesson info:</span> {teacher.lesson_info}
          </li>
          <li>
            <span>Conditions:</span> {teacher.conditions}
          </li>
        </ul>
        {expandedTeacherId === teacher.id && (
          <div>
            <p>{teacher.experience}</p>
            <ul>
              {teacher.reviews ? (
                teacher.reviews.map((review, index) => (
                  <li key={index}>
                    <div>
                      <img
                        src={review.photo}
                        alt="avatar"
                        width="44"
                        height="44"
                        loading="lazy"
                      />
                      <div>
                        <p>{review.reviewer_name}</p>
                        <div>
                          <Star />
                          <p> {review.reviewer_rating}</p>
                        </div>
                      </div>
                    </div>
                    <p>{review.comment}</p>
                  </li>
                ))
              ) : (
                <li>There are no reviews yet</li>
              )}
            </ul>
          </div>
        )}
        <button onClick={() => handleReadMoreClick(teacher.id)}>
          {' '}
          {getButtonText(teacher.id)}
        </button>
        <ul>
          {teacher.levels ? (
            teacher.levels.map((level, index) => (
              <li key={index}>
                <p>{level}</p>
              </li>
            ))
          ) : (
            <li>No levels</li>
          )}
        </ul>
        {expandedTeacherId === teacher.id && (
          <button type="button" onClick={() => handleBookTrialClick(teacher)}>
            Book trial lesson
          </button>
        )}
      </div>
      {isModalOpen && selectedTeacher && (
        <Modal toggleModal={toggleModal}>
          <BookTrialModal teacher={selectedTeacher} close={close} />
        </Modal>
      )}
    </>
  );
};

export default Card;
