import React, { Component } from 'react'
import { connect } from "react-redux";
import RatingsContainer from './RatingsContainer';

export class UserRating extends Component {
  render() {
    return (
      <>
        <div className="container py-5">
            <h1>User Ratings</h1>
            <RatingsContainer 
              album={this.props.album}
            />
        </div>
      </>
    )
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

export default connect(mapStateToProps)(UserRating);

// export default UserRating
