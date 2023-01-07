import React from "react";
import { connect } from "react-redux";
import RatingsContainer from "./RatingsContainer";

function UserRating(props) {
  const { album } = props;
  return (
    <>
      <div className="container py-5">
        <h1>User Ratings</h1>
        <RatingsContainer album={album} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    album: state.albumStore.album,
  };
};

export default connect(mapStateToProps)(UserRating);
