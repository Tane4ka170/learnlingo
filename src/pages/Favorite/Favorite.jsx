import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTeachersAsync } from '../../redux/teachers/operations';
import { Loader } from 'components/Loader/Loader';
import CardList from 'components/CardList/CardList';

import { FavoritesContainer, Text } from './Favorite.styled';
import { LoadMoreButton } from 'pages/Teachers/Teachers.styled';

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
    <FavoritesContainer>
      {noFavoriteTeachers && (
        <div>
          <Text>You haven't added any teachers to your favorites yet</Text>
        </div>
      )}
      {favoriteTeachers.length > 0 && (
        <>
          <CardList
            teachers={favoriteTeachers.slice(0, loadedTeachersCount)}
            authUser={authUser}
          />
          {favoriteTeachers.length > loadedTeachersCount && (
            <div>
              <LoadMoreButton onClick={handleLoadMore}>
                Load more
              </LoadMoreButton>
            </div>
          )}
        </>
      )}
    </FavoritesContainer>
  );
};

export default Favorite;
