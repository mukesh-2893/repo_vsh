import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
export class RatingsContainer extends Component {
  render() {
    this.showImages = this.props.album.map((al, i) => {
      return (
        <>
          {/* <div

                key={i}
                style={{ border: "2px solid black", fontSize: "30px" }}
              >
                <div>{al.artistName}</div>
                <div>
                  <img src={al.link} alt={al.id} />
                </div>
                <div>{al.albumName}</div>
                <ProgressBar
                        animated now={40}
                        // label={`${str.per}%`}
                        className="lineDiv"
                    />
                
              </div> */}
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
              <div className="albumDiv card">
                <div className="card-title font-weight-bold" style={{"font-size" : "40px"}}>{al.albumName}</div>
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

                      {/* <Line percent={str.per} className="lineDiv" strokeWidth={4} strokeColor="#D3D3D3" /> */}
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

    return <>{this.showImages}</>;
  }
}

export default RatingsContainer;
