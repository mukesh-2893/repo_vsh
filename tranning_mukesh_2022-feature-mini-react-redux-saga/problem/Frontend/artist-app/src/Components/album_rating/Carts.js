import React, { Component } from "react";
import { connect } from "react-redux";

import AlbumCards from "./AlbumCards";
import UserSelect from "./UserSelect";

class Carts extends Component {
  constructor(props) {
    super(props);

    this.userName = React.createRef();
    this.artistName = React.createRef();
    this.albumName = React.createRef();
  }

  change = (e) => {
    this.props.userSelected(e);
  };

  newRating = (rating, album) => {
    var obj = {
      uid: this.props.selectedUserId,
      id: album.id,
      ratings: rating / 20,
    };
    console.log(obj);
    this.props.updatedRatings(obj);
  };

  render() {
    const { albumsRating, users, album } = this.props;
    console.log(albumsRating);

    return (
      <>
        <p className="my-5 display-4 ">Album rating page</p>
        <UserSelect users={users} handleChange={(e) => this.change(e)} />
        <AlbumCards
          // album={album}
          albumsRating={albumsRating}
          handleNewRatings={(rating, id) => this.newRating(rating, id)}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userStore.users,
    album: state.albumStore.album,
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
