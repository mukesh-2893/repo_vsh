import React from "react";
import { Rating } from "react-simple-star-rating";

export default function AlbumCards(props) {
  const { albumsRating, handleNewRatings, ids } = props;
  
  const newRating = (newRatings, album) => {
    handleNewRatings(newRatings, album);
  };

  const showImages = ids.map((al, i) => {
    return (
      <>
        <div className="container">
          <div className="row my-5 justify-content-center">
            <div
              key={i}
              style={{ border: "2px solid black", fontSize: "30px" }}
            >
              <div>{albumsRating[al].artistName}</div>
              <div>
                <img src={albumsRating[al].link} alt={albumsRating[al].id} />
              </div>
              <div>{albumsRating[al].albumName}</div>
              
              <div className="col-4">
                <Rating
                  onClick={(newRatings) => newRating(newRatings, al)}
                  ratingValue={albumsRating[al].ratings}
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
      <div>{showImages}</div>
    </>
  );
}
