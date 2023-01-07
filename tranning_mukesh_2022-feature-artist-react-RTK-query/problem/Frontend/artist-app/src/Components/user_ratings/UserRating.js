import React from "react";
import { useSelector } from "react-redux";
import { useGetAlbumsQuery } from "../album/albumApiSlice";
import { useGetAlbumRatingsQuery } from "../album_rating/albumRatingApiSlice";
import { getSelectedUserId } from "../album_rating/albumRatingReducer";
import RatingsContainer from "./RatingsContainer";





function UserRating(props) {
  
  const selectedUserId = useSelector(getSelectedUserId);
  const { data, isError, isLoading, isSuccess } =
    useGetAlbumRatingsQuery(selectedUserId);
  let content;
  if (isLoading) {
    content = `<h1>Loading please wait...</h1>`;
  } else if (isSuccess) {
    content = (
      <>
        <div className="container py-5">
          <h1>User Ratings</h1>
          <RatingsContainer album={data.entities} ids={data.ids} />
        </div>
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
  

  return (
    <>
      {content}
    </>
  );
}

export default UserRating;