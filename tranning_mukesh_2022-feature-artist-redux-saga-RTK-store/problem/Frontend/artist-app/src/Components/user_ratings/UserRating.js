import React from "react";
import { connect } from "react-redux";
import RatingsContainer from "./RatingsContainer";

function UserRating(props) {
  const { album, ids } = props;
  return (
    <>
      <div className="container py-5">
        <h1>User Ratings</h1>
        <RatingsContainer album={album} ids={ids} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    album: state.rootReducer.albumStore.entities,
    ids: state.rootReducer.albumStore.ids,
  };
};

export default connect(mapStateToProps)(UserRating);
