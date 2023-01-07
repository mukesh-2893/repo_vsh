import React from "react";
import { connect } from "react-redux";
import AlbumCards from "./AlbumCards";
import UserSelect from "./UserSelect";
function Carts(props) {
  const { albumsRating, users, userSelected, updatedRatings, selectedUserId } =
    props;

  const change = (e) => {
    userSelected(e);
  };

  const newRating = (rating, album) => {
    var obj = {
      uid: selectedUserId,
      id: album.id,
      ratings: rating / 20,
    };
    updatedRatings(obj);
  };

  return (
    <>
      <p className="my-5 display-4 ">Album rating page</p>
      <UserSelect users={users} handleChange={(e) => change(e)} />
      <AlbumCards
        albumsRating={albumsRating}
        handleNewRatings={(rating, id) => newRating(rating, id)}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.userStore.users,
    albumsRating: state.ratingStore.albumsRating,
    selectedUserId: state.ratingStore.selectedUserId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSelected: (id) => {
      dispatch({ type: "EVENT_USERID_SELECTED", payload: id });
    },
    updatedRatings: (obj) => {
      dispatch({ type: "NEW_RATINGS", payload: obj });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carts);
