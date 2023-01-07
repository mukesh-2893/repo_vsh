import React from "react";
import { connect } from "react-redux";
import AlbumCards from "./AlbumCards";
import { getUserRating, updateUserRating } from "./albumRatingService";
import { selectedUserId } from "./reducer";
import UserSelect from "./UserSelect";
function Carts(props) {
  const {
    albumsRating,
    users,
    userSelected,
    updatedRatings,
    selectedUserId,
    ids,
    userIds,
    setSelectedUser,
  } = props;

  console.log(albumsRating);

  const change = (e) => {
    userSelected(e);
    setSelectedUser(e)
    // console.log(e);
  };

  const newRating = (rating, id) => {
    // console.log(album);
    var obj = {
      uid: selectedUserId,
      id: id,
      ratings: rating / 20,
    };
    // console.log(obj);
    updatedRatings(obj);
  };

  return (
    <>
      <p className="my-5 display-4 ">Album rating page</p>
      <UserSelect users={users} userIds={userIds} handleChange={(e) => change(e)} />
      {Object.values(albumsRating).length > 0 ? (
        <AlbumCards
          albumsRating={albumsRating}
          ids={ids}
          handleNewRatings={(rating, id) => newRating(rating, id)}
        />
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    users: state.rootReducer.userStore.entities,
    userIds: state.rootReducer.userStore.ids,
    albumsRating: state.rootReducer.ratingStore.entities,
    ids: state.rootReducer.ratingStore.ids,
    selectedUserId: state.rootReducer.ratingStore.selectedUserId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSelected: (id) => {
      dispatch(getUserRating(id));
    },
    setSelectedUser: (id) => {
      dispatch(selectedUserId(id));
    },
    updatedRatings: (obj) => {
      dispatch(updateUserRating(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carts);
