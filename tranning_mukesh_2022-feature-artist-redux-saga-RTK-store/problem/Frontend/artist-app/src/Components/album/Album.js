import React from "react";
import { connect } from "react-redux";
import { operation, selectedAlbum } from "./reducer";
import { AlbumForm } from "./AlbumForm";
import Table from "./Table";
import { addAlbumService, deleteAlbumService, updateAlbumService } from "./albumService";

function Album(props) {
  const {
    tableHeader,
    album,
    ids,
    artist,
    artistIds,
    selectedAlbum,
    operation,
    setAddAlbum,
    deleteAlbum,
    setSelectedAlbum,
    setOperation,
    setUpdateAlbum,
  } = props;
// console.log(album);

  const add = (obj) =>{
    var max = Math.max(...ids)+1;
    var link = "https://upload.wikimedia.org/wikipedia/en/0/03/Images_%281972_poster%29.jpg"
    const { artistName, albumName } = obj;
    const obj2 = Object.assign({id : max, albumName : albumName, artistName : artistName, link : link});
    setAddAlbum(obj2);
  }

  const deleteByID=(id)=>{
    // const id = obj.id
    deleteAlbum(id);
  }

  const edit=(obj)=> {
    setSelectedAlbum(obj);
    setOperation("update");
  }

  const update=(obj)=> {
    setUpdateAlbum(obj);
  }

  return (
    <div>
      <AlbumForm
        artist={artist}
        artistIds={artistIds}
        handleAdd={(obj) => add(obj)}
        selectedAlbum={selectedAlbum}
        operation={operation}
        handleUpdate={(obj) => update(obj)}
      />
      {Object.values(album).length > 0 ?
      <Table
        tableData={album}
        tableHeader={tableHeader}
        ids={ids}
        handleDelete={(obj) => deleteByID(obj)}
        handleEdit={(id) => edit(id)}
      /> :null}
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    tableHeader: state.rootReducer.albumStore.tableHeader,
    album: state.rootReducer.albumStore.entities,
    ids: state.rootReducer.albumStore.ids,
    selectedAlbum: state.rootReducer.albumStore.selectedAlbum,
    operation: state.rootReducer.albumStore.operation,
    artist: state.rootReducer.artistStore.entities,
    artistIds: state.rootReducer.artistStore.ids,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAddAlbum: (obj) => {
      dispatch(addAlbumService(obj));
    },
    deleteAlbum: (id) => {
      dispatch(deleteAlbumService(id));
    },
    setSelectedAlbum: (obj) => {
      dispatch(selectedAlbum(obj));
    },
    setOperation: (obj) => {
      dispatch(operation(obj));
    },
    setUpdateAlbum: (obj) => {
      dispatch(updateAlbumService(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
