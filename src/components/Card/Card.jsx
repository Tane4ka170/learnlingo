import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { selectFavorites } from '../../redux/selectors';
import {
  addFavorite,
  removeFavorite,
} from '../../redux/favorite/favoriteSlice';

import Modal from 'components/Modal/Modal';
import BookTrialModal from 'components/BookTrialModal/BookTrialModal';

import { ReactComponent as Book } from '../../img/icons/book-open.svg';
import { ReactComponent as Star } from '../../img/icons/star.svg';
import { FiHeart } from 'react-icons/fi';
import {
  CardImage,
  CardInfoContainer,
  FavoriteButton,
  Heart,
  HeartDel,
  ImageContainer,
  InfoList,
  InfoListItem,
  InfoListItemContent,
  InfoParagraph,
  InfoSection,
  LanguageList,
  PricePerHour,
  ReviewComment,
  ReviewContainer,
  ReviewList,
  ReviewRating,
  ReviewerAvatar,
  ReviewerInfo,
  StyledBookTrialButton,
  StyledButton,
  StyledDiv,
  StyledLevelsList,
  StyledLevelsListItem,
  StyledList,
  StyledListItem,
  StyledParagraph,
  StyledSpan,
  TeacherName,
} from './Card.styled';

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

  const isFavorite = favorites.includes(teacher.id);

  const onSwitchFavorite = () => {
    if (!authUser) {
      toast.error('At first, you must log in', {
        icon: '❗',
      });
      return;
    }
    if (isFavorite) {
      dispatch(removeFavorite(teacher.id));
    } else {
      dispatch(addFavorite(teacher.id));
    }
  };

  return (
    <>
      <ImageContainer>
        <CardImage
          src={teacher.avatar_url}
          loading="lazy"
          alt="avatar"
          width="96"
          height="96"
        />
      </ImageContainer>
      <CardInfoContainer>
        <InfoSection>
          <InfoParagraph>Languages</InfoParagraph>
          <InfoList>
            <InfoListItem>
              <InfoListItemContent>
                {' '}
                <Book /> Lessons online
              </InfoListItemContent>
            </InfoListItem>
            <InfoListItem>Lessons done: {teacher.lessons_done}</InfoListItem>
            <InfoListItem>
              <InfoListItemContent>
                {' '}
                <Star /> Rating: {teacher.rating}
              </InfoListItemContent>
            </InfoListItem>
            <InfoListItem>
              Price / 1 hour:{' '}
              <PricePerHour>{teacher.price_per_hour}$</PricePerHour>
            </InfoListItem>
            <li>
              {' '}
              {isFavorite && authUser ? (
                <FavoriteButton type="button" onClick={onSwitchFavorite}>
                  <HeartDel />
                </FavoriteButton>
              ) : (
                <FavoriteButton type="button" onClick={onSwitchFavorite}>
                  {' '}
                  <Heart />{' '}
                </FavoriteButton>
              )}
            </li>
          </InfoList>
        </InfoSection>

        <TeacherName>
          {' '}
          {teacher.name} {teacher.surname}{' '}
        </TeacherName>
        <StyledList>
          <StyledListItem>
            <StyledDiv>
              <StyledSpan>Speaks: &nbsp;</StyledSpan>
              <LanguageList>
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
              </LanguageList>
            </StyledDiv>
          </StyledListItem>
          <StyledListItem>
            <StyledSpan>Lesson info:</StyledSpan> {teacher.lesson_info}
          </StyledListItem>
          <StyledListItem>
            <StyledSpan>Conditions:</StyledSpan> {teacher.conditions}
          </StyledListItem>
        </StyledList>
        {expandedTeacherId === teacher.id && (
          <div>
            <StyledParagraph>{teacher.experience}</StyledParagraph>
            <ReviewList>
              {teacher.reviews ? (
                teacher.reviews.map((review, index) => (
                  <li key={index}>
                    <ReviewContainer>
                      <ReviewerAvatar
                        src={`https://picsum.photos/seed/${Math.random()}/200`}
                        alt="avatar"
                        width="44"
                        height="44"
                        loading="lazy"
                      />
                      <ReviewerInfo>
                        <p>{review.reviewer_name}</p>
                        <ReviewRating>
                          <Star />
                          <p> {review.reviewer_rating}</p>
                        </ReviewRating>
                      </ReviewerInfo>
                    </ReviewContainer>
                    <ReviewComment>{review.comment}</ReviewComment>
                  </li>
                ))
              ) : (
                <li>There are no reviews yet</li>
              )}
            </ReviewList>
          </div>
        )}
        <StyledButton onClick={() => handleReadMoreClick(teacher.id)}>
          {' '}
          {getButtonText(teacher.id)}
        </StyledButton>
        <StyledLevelsList>
          {teacher.levels ? (
            teacher.levels.map((level, index) => (
              <StyledLevelsListItem key={index}>
                <p>{level}</p>
              </StyledLevelsListItem>
            ))
          ) : (
            <li>No levels</li>
          )}
        </StyledLevelsList>
        {expandedTeacherId === teacher.id && (
          <StyledBookTrialButton
            type="button"
            onClick={() => handleBookTrialClick(teacher)}
          >
            Book trial lesson
          </StyledBookTrialButton>
        )}
      </CardInfoContainer>
      {isModalOpen && selectedTeacher && (
        <Modal toggleModal={toggleModal}>
          <BookTrialModal teacher={selectedTeacher} close={close} />
        </Modal>
      )}
    </>
  );
};

export default Card;
