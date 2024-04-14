import CardList from 'components/CardList/CardList';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites } from '../../redux/favorite/operations';
import {
  selectErrorFav,
  selectFavorites,
  selectIsLoadingFav,
} from '../../redux/selectors';

const Favorite = ({ authUser }) => {
  const dispatch = useDispatch();
  const favList = useSelector(selectFavorites);
  const loadingFavs = useSelector(selectIsLoadingFav);
  const favError = useSelector(selectErrorFav);

  useEffect(() => {
    if (authUser && authUser.uid) {
      dispatch(fetchFavorites(authUser.uid));
    }
  }, [dispatch, authUser]);

  return (
    <div>
      {loadingFavs && !favError && <Loader />}
      {favList.length > 0 ? (
        <CardList teachers={favList} authUser={authUser} />
      ) : (
        <p>Favorite teachers haven't been selected yet</p>
      )}
    </div>
  );
};

export default Favorite;
