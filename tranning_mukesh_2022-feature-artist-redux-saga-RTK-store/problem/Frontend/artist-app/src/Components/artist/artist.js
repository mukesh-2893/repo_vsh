import React from "react";
import Table from "../navbar/Table";
import ArtistForm from "./artistForm";
import { load, selectedArtist, operation } from "./reducer";
import { connect } from "react-redux";
import { addArtist, deleteArtist, updateArtist } from "./artistService";

function Artist(props) {
  const {
    tableHeader,
    artist,
    ids,
    selectedArtist,
    operation,
    setAddArtist,
    deleteArtist,
    setSelectedArtist,
    setOperation,
    setUpdateAtist,
  } = props;

  // console.log(artist);

  const add = (name) => {
    var max = Math.max(...ids) + 1;
    var obj = Object.assign({id : max, aid: max, name: name });
    setAddArtist(obj);
  };

  const deleteByID = (obj) => {
    deleteArtist(obj);
  };

  const edit = (obj) => {
    // console.log(obj);
    setSelectedArtist(obj);
    setOperation("update");
  };

  const update = (obj) => {
    Object.assign(obj, {id : obj.aid})
    // console.log(obj);
    setUpdateAtist(obj);
  };

  return (
    <>
      <ArtistForm
        handleAdd={(name) => add(name)}
        selectedArtist={selectedArtist}
        operation={operation}
        handleUpdate={(obj) => update(obj)}
      />
      {Object.values(artist).length > 0 ?
      <Table
        tableData={artist}
        tableHeader={tableHeader}
        ids={ids}
        handleDelete={(id) => deleteByID(id)}
        handleEdit={(id) => edit(id)}
      /> : null}
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log(state, "mapStateToProps");
  return {
    tableHeader: state.rootReducer.artistStore.tableHeader,
    artist: state.rootReducer.artistStore.entities,
    ids: state.rootReducer.artistStore.ids,
    selectedArtist: state.rootReducer.artistStore.selectedArtist,
    operation: state.rootReducer.artistStore.operation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoadArtist: (data) => {
      console.log("data");
      dispatch(load(data));
    },
    setAddArtist: (obj) => {
      dispatch(addArtist(obj));
    },
    deleteArtist: (id) => {
      dispatch(deleteArtist(id));
    },
    setSelectedArtist: (obj) => {
      dispatch(selectedArtist(obj));
    },
    setOperation: (obj) => {
      dispatch(operation(obj));
    },
    setUpdateAtist: (obj) => {
      dispatch(updateArtist(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
