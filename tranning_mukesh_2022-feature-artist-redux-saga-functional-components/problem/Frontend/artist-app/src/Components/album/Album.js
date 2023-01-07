import React from "react";
import { connect } from "react-redux";
import Table from "../navbar/Table";
import { operation, selectedAlbum } from "./actions";
import { AlbumForm } from "./AlbumForm";

function Album(props) {
  const {
    tableHeader,
    album,
    artist,
    selectedAlbum,
    operation,
    setAddAlbum,
    deleteAlbum,
    setSelectedAlbum,
    setOperation,
    setUpdateAlbum,
  } = props;


  const add = (obj) =>{
    var id = album.map(({id})=>{
      return id;
    });
    var max = Math.max(...id)+1;
    var link = "https://upload.wikimedia.org/wikipedia/en/0/03/Images_%281972_poster%29.jpg"
    const { artistName, albumName } = obj;
    const obj2 = Object.assign({id : max, albumName : albumName, artistName : artistName, link : link});
    setAddAlbum(obj2);
  }

  const deleteByID=(obj)=>{
    const id = obj.id
    // console.log(id);
    deleteAlbum(id);
  }

  const edit=(obj)=> {
    setSelectedAlbum(obj);
    setOperation("update");
  }

  const update=(obj)=> {
    setUpdateAlbum(obj);
  }


  const result = album.map((el) => {
    return Object.assign({
      id: el.id,
      albumName: el.albumName,
      artistName: el.artistName,
    });
  });

  return (
    <div>
      <AlbumForm
        artist={artist}
        handleAdd={(obj) => add(obj)}
        selectedAlbum={selectedAlbum}
        operation={operation}
        handleUpdate={(obj) => update(obj)}
      />
      <Table
        tableData={result}
        tableHeader={tableHeader}
        handleDelete={(obj) => deleteByID(obj)}
        handleEdit={(id) => edit(id)}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tableHeader: state.albumStore.tableHeader,
    album: state.albumStore.album,
    selectedAlbum: state.albumStore.selectedAlbum,
    operation: state.albumStore.operation,
    artist: state.artistStore.artist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAddAlbum: (obj) => {
      dispatch({ type: "EVENT_ADD_ALBUM", payload: obj });
    },
    deleteAlbum: (id) => {
      dispatch({ type: "EVENT_DELETE_ALBUM", payload: id });
    },
    setSelectedAlbum: (obj) => {
      dispatch(selectedAlbum(obj));
    },
    setOperation: (obj) => {
      dispatch(operation(obj));
    },
    setUpdateAlbum: (obj) => {
      dispatch({ type: "EVENT_UPDATE_ALBUM", payload: obj });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
