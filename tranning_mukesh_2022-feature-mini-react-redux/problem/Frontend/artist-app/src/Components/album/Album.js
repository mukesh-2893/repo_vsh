import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import artist from "../artist/artist";
import Table from "../navbar/Table";
import {
  addAlbum,
  deleteAlbum,
  loadAlbum,
  operation,
  selectedAlbum,
  updateAlbum,
} from "./action";
import { loadArtist } from "../artist/actions";
import AlbumForm from "./AlbumForm";

class Album extends Component {
  componentDidMount() {
    axios.get("http://localhost:3000/album").then((res) => {
      console.log(res.data);
      this.props.setLoadAlbum(res.data);
    });
  }

  add = (obj) => {
    var id = this.props.album.map(({ id }) => {
      return id;
    });
    var max = Math.max(...id) + 1;
    console.log(this.props.artist);
    const { artistName, albumName } = obj;
    console.log(artistName);
    var obj2 = { id: max, albumName: albumName, artistName: artistName };
    console.log(obj2);

    axios
      .post("http://localhost:3000/album/add", obj2)
      .then((res) => {
        console.log(res.data);
        this.props.setAddAlbum(res.data);
      })
      .catch((err) => console.log(err));
  };

  delete = (obj) => {
    axios.delete(`http://localhost:3000/album/delete/${obj.id}`).then((res) => {
      console.log(res.data.id);
      this.props.setDeleteAlbum(res.data.id);
    });
  };

  edit = (obj) => {
    console.log(obj);
    this.props.setSelectedAlbum(obj);
    this.props.setOperation("Update");
  };

  update = (obj) => {
    console.log(obj);
    axios
      .put(`http://localhost:3000/album/update/${obj.id}`, obj)
      .then((res) => {
        console.log(res.data);
        this.props.setUpdateAlbum(res.data);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { tableHeader, album, selectedAlbum, operation, status, artists } =
      this.props;
    // console.log(selectedAlbum);
    // console.log(operation);

    return (
      <>
        <AlbumForm
          handleAdd={(obj) => this.add(obj)}
          handleUpdate={(obj) => this.update(obj)}
          selectedAlbum={selectedAlbum}
          operation={operation}
        />

        {album && album.length > 0 ? (
          <Table
            tableHeader={tableHeader}
            tableData={album}
            handleDelete={(obj) => this.delete(obj)}
            handleEdit={(id) => this.edit(id)}
            // status={status}
          />
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableHeader: state.albumStore.tableHeader,
    album: state.albumStore.album,
    selectedAlbum: state.albumStore.selectedAlbum,
    operation: state.albumStore.operation,
    artists: state.albumStore.artists,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log("mapdispatch" , dispatch)
  return {
    setLoadAlbum: (data) => {
      // console.log(data, " in setLoadusers");
      dispatch(loadAlbum(data));
    },
    setAddAlbum: (obj) => {
      dispatch(addAlbum(obj));
    },
    setDeleteAlbum: (id) => {
      dispatch(deleteAlbum(id));
    },
    setSelectedAlbum: (obj) => {
      dispatch(selectedAlbum(obj));
    },
    setOperation: (obj) => {
      dispatch(operation(obj));
    },
    setUpdateAlbum: (obj) => {
      dispatch(updateAlbum(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
