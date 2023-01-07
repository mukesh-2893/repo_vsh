import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Rating } from "react-simple-star-rating";

export class AlbumCards extends Component {

  newRating=(newRatings, album)=>{
    // console.log(newRatings, album);
    this.props.handleNewRatings(newRatings, album);
  }
  render() {
    this.showImages = this.props.albumsRating.map((al, i) => {
        return (
          <>
            <div className="container">
              <div className="row my-5 justify-content-center">
                <div
                  key={i}
                  style={{ border: "2px solid black", fontSize: "30px" }}
                >
                  <div>{al.artistName}</div>
                  <div>
                    <img src={al.link} alt={al.id} />
                  </div>
                  <div>{al.albumName}</div>
  
                  <div className="col-4">
                    <Rating
                      onClick={(newRatings) =>(this.newRating(newRatings, al))}
                      ratingValue={al.ratings}
                      fillColorArray={[
                        "#f17a45",
                        "#f19745",
                        "#f1a545",
                        "#f1b345",
                        "#f1d045",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      });
    return (
      <>
        <div>{this.showImages}</div>
      </>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.userStore.users,
//     album: state.albumStore.album,
//     albumsRating: state.ratingStore.albumsRating,
//     selectedUserId:state.ratingStore.selectedUserId
//  };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     userSelected:(id)=>{dispatch({type:"EVENT_USERID_SELECTED",payload: id})},
//   };
// };

// export default connect(mapStateToProps)(AlbumCards);
export default AlbumCards
