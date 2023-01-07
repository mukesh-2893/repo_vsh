import React, { Component } from "react";

export class AlbumForm extends Component {
  constructor(props) {
    super(props);
    this.albumName = React.createRef();
    this.artistName = React.createRef();
  }

  add = () => {
    var albumName = this.albumName.current.value;
    var artistName = this.artistName.current.value;
    var obj = { artistName, albumName };
    console.log(obj);
    this.props.handleAdd(obj);
  };

  update = (id) => {
    var albumName = this.albumName.current.value;
    var artistName = this.artistName.current.value;
    var obj = { id, albumName, artistName };
    this.props.handleUpdate(obj);
    
  };

  render() {
    const { artist, operation, selectedAlbum } = this.props;
    const { id, albumName, artistName } = selectedAlbum;
    if (operation === "update") {
      this.albumName.current.value = albumName;
      this.artistName.current.value = artistName;
    }
    this.showSelect = artist.map((e, i) => {
      return <option key={i}>{e.name}</option>;
    });
    return (
      <>
        <p className="my-5 display-4 "> Add Album Details</p>
        <div className="container mt-5 px-5 offset-1.5 fs-2 mx-5">
          <select
            className="form-select my-2 mx-5"
            aria-label="Default select example"
            ref={this.artistName}
          >
            <option defaultValue={null}>select artist</option>
            {this.showSelect}
          </select>
          <div className="col-sm-10  mx-5">
            <input type="text" ref={this.albumName} className="form-control" />
          </div>

          <div className="mx-5 align-centre">
            <button
              className="btn btn-success"
              ref={this.button}
              onClick={() => this.add()}
            >
              ADD
            </button>

            <button className="btn btn-success" onClick={() => this.update(id)}>
              update
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default AlbumForm;
