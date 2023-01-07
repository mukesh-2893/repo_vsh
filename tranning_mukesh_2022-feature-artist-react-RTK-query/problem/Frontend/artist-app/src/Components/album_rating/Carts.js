import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "../users/userApiSlice";
import AlbumCards from "./AlbumCards";
import { useAddRatingsMutation, useGetAlbumRatingsQuery } from "./albumRatingApiSlice";
import { getSelectedUserId, setSelectedUserId } from "./albumRatingReducer";
import UserSelect from "./UserSelect";
function Carts(props) {
  const userData = useGetUsersQuery().data;
  const selectedUserId = useSelector(getSelectedUserId);
  // console.log(selectedUserId);
  const { data, isError, isLoading, isSuccess } =
    useGetAlbumRatingsQuery(selectedUserId);
  // console.log(data);
  const dispatch = useDispatch();

  const [addRatings] = useAddRatingsMutation();

  let content;
  if (isLoading) {
    content = `<h1>Loading please wait...</h1>`;
  } else if (isSuccess) {
    content = (
      <>
        <p className="my-5 display-4 ">Album rating page</p>
        <UserSelect
          users={userData.entities}
          userIds={userData.ids}
          handleChange={(e) => change(e)}
        />
        {Object.values(data.entities).length > 0 ? (
          <AlbumCards
            albumsRating={data.entities}
            ids={data.ids}
            handleNewRatings={(rating, id) => newRating(rating, id)}
          />
        ) : null}
      </>
    );
  } else if (isError) {
    content = (
      <>
        <h1>404 page not found</h1>
        <p>{isError}</p>
      </>
    );
  }

  const change = (e) => {
    // userSelected(e);
    dispatch(setSelectedUserId(e));
    console.log(e);
  };

  const newRating = (rating, id) => {
    // console.log(album);
    var obj = {
      uid: selectedUserId,
      id: id,
      ratings: rating / 20,
    };
    addRatings(obj);
  };

  return <>{content}</>;
}

export default Carts;
