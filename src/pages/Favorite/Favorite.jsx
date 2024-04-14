import CardList from 'components/CardList/CardList';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachersAsync } from '../../redux/teachers/operations';

const Favorite = ({ authUser }) => {
  const dispatch = useDispatch();

  const isLoadingTeachers = useSelector(state => state.teachers.isLoading);
  const teachers = useSelector(state => state.teachers.teachers);
  const favoriteList = useSelector(state => state.favorite.favorite);

  const [loadedTeachersCount, setLoadedTeachersCount] = useState(4);

  const favoriteTeachers = teachers?.filter(teacher =>
    favoriteList.includes(teacher.id)
  );
  const noFavoriteTeachers =
    !isLoadingTeachers && (!favoriteTeachers || favoriteTeachers.length === 0);

  useEffect(() => {
    dispatch(fetchTeachersAsync());
  }, [dispatch]);

  const handleLoadMore = () => {
    setLoadedTeachersCount(prevCount => prevCount + 4);
  };

  return (
    <div>
      {isLoadingTeachers && (
        <div>
          <Loader />
        </div>
      )}

      {noFavoriteTeachers && (
        <div>
          <p>There are no favorite teachers yet</p>
        </div>
      )}

      {favoriteTeachers && favoriteTeachers.length > 0 && (
        <ul>
          {favoriteTeachers.slice(0, loadedTeachersCount).map(teacher => (
            <CardList key={teacher.id} teacher={teacher} authUser={authUser} />
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
