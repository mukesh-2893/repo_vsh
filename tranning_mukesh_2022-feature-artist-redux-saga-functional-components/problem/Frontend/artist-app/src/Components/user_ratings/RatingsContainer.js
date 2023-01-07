import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function RatingsContainer(props) {
  const { album } = props;

  const showImages = album.map((al, i) => {
    return (
      <>
        <div className="d-flex justify-content-center" key={i}>
          <div className="d-flex flex-column">
            <div className="albumDiv card">
              <div
                className="card-title font-weight-bold"
                style={{ fontSize: "40px" }}
              >
                {al.albumName}
              </div>
              <div className="card-body albumImageDiv">
                <img src={al.link} alt={al.id} />
              </div>
            </div>
          </div>
          <div className="my-5 py-2">
            <div>
              {al.star.map((str, index) => {
                return (
                  <div key={index} className="d-flex flex-row starsDiv py-4">
                    <span className="mx-4">{index + 1} star</span>
                    <ProgressBar
                      animated
                      now={str.per}
                      label={`${str.per}%`}
                      className="lineDiv"
                    />

                    <span className="mx-2">{str.count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  });

  return <>{showImages}</>;
}
