import axios from "axios";
import React, { Component } from "react";
import artist from "../artist/artist";
import { loadArtist } from "../artist/actions";
import { connect } from "react-redux";

export class AlbumForm extends Component {
  constructor() {
    super();
    this.name = React.createRef();
    this.artistName = React.createRef();
    this.button = React.createRef();
  }

  componentDidMount() {
    axios.get("http://localhost:3000/artists").then((res) => {
      // console.log(res.data);
      this.props.setLoadArtist(res.data);
    });
  }

  add = () => {
    var albumName = this.name.current.value;
    var artistName = this.artistName.current.value;
    var obj = { artistName, albumName };
    this.props.handleAdd(obj);
  };

  update = (id) => {
    // console.log(id);
    var albumName = this.name.current.value;
    var artistName = this.artistName.current.value;
    var obj = { id, albumName, artistName };

    this.props.handleUpdate(obj);
  };

  render() {
    const { artist } = this.props;
    const { selectedAlbum, operation } = this.props;
    const { id, name, artistName } = selectedAlbum;

    if (operation === "Update") {
      this.name.current.value = name;
      this.artistName.current.value = artistName;
      this.button.current.value = "Update";
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
            <input type="text" ref={this.name} className="form-control" />
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

const mapStateToProps = (state) => {
  // console.log(state.artistStore);
  return {
    tableHeader: state.artistStore.tableHeader,
    artist: state.artistStore.artist,
    selectedArtist: state.artistStore.selectedArtist,
    operation: state.artistStore.operation,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log("mapdispatch" , dispatch)
  return {
    setLoadArtist: (data) => {
      dispatch(loadArtist(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
