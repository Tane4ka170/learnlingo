import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachersAsync } from '../../redux/teachers/operations';
import { Loader } from 'components/Loader/Loader';
import Card from 'components/Card/Card';

const Favorite = ({ authUser }) => {
  const dispatch = useDispatch();
  const isLoadingTeachers = useSelector(state => state.teachers.isLoading);
  const teachers = useSelector(state => state.teachers.items);
  const favoriteList = useSelector(state => state.favorite.favorite);
  const [loadedTeachersCount, setLoadedTeachersCount] = useState(4);

  useEffect(() => {
    if (teachers.length === 0) {
      dispatch(fetchTeachersAsync());
    }
  }, [dispatch, teachers]);

  const favoriteTeachers =
    teachers?.length > 0
      ? teachers.filter(teacher => favoriteList.includes(teacher.id))
      : [];
  const noFavoriteTeachers =
    !isLoadingTeachers && (!favoriteTeachers || favoriteTeachers.length === 0);

  const handleLoadMore = () => {
    setLoadedTeachersCount(prevCount => prevCount + 4);
  };

  if (isLoadingTeachers || teachers.length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      {noFavoriteTeachers && (
        <div>
          <p>There are no favorite teachers yet</p>
        </div>
      )}
      {favoriteTeachers && favoriteTeachers.length > 0 && (
        <ul>
          {favoriteTeachers.slice(0, loadedTeachersCount).map(teacher => (
            <Card key={teacher.id} teacher={teacher} authUser={authUser} />
          ))}
        </ul>
      )}
      {favoriteTeachers &&
        favoriteTeachers.length > loadedTeachersCount &&
        !isLoadingTeachers && (
          <div>
            <button text="Load more" onClick={handleLoadMore} />
          </div>
        )}
    </div>
  );
};

export default Favorite;
