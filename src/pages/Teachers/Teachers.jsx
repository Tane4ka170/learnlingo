import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachersAsync } from "../../redux/teachers/operations";
import { fetchFavorites } from "../../redux/favorite/operations";
import {
  selectError,
  selectIsLoading,
  selectTeachers,
} from "../../redux/selectors";
import { Loader } from "../../components/Loader/Loader";
import CardList from "../../components/CardList/CardList";
import { Container, LoadMoreButton } from "./Teachers.styled";

const Teachers = ({ authUser }) => {
  const dispatch = useDispatch();
  const teacherList = useSelector(selectTeachers);
  const loadingState = useSelector(selectIsLoading);
  const errorState = useSelector(selectError);
  const [visibleTeachers, setVisibleTeachers] = useState(4);

  const loadMoreTeachers = () => {
    setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4);
  };

  useEffect(() => {
    dispatch(fetchTeachersAsync());
    if (authUser && authUser.uid) {
      dispatch(fetchFavorites(authUser.uid));
    }
  }, [dispatch, authUser]);

  return (
    <Container>
      {loadingState && !errorState && <Loader />}
      <CardList
        authenticatedUser={authUser}
        teachers={teacherList.slice(0, visibleTeachers)}
      />
      {teacherList.length > visibleTeachers && (
        <LoadMoreButton onClick={loadMoreTeachers}>Load More</LoadMoreButton>
      )}
    </Container>
  );
};
export default Teachers;
