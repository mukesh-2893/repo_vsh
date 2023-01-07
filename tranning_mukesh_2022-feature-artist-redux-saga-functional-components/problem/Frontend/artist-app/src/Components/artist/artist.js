import React from "react";
import Table from "../navbar/Table";
import ArtistForm from "./artistForm";
import { loadArtist, selectedArtist, operation } from "./actions";
import { connect } from "react-redux";

function Artist(props) {
  const {
    tableHeader,
    artist,
    selectedArtist,
    operation,
    setAddArtist,
    deleteArtist,
    setSelectedArtist,
    setOperation,
    setUpdateAtist,
  } = props;

  const add = (name) => {
    var id = props.artist.map(({ aid }) => {
      return aid;
    });
    var max = Math.max(...id) + 1;
    var obj = Object.assign({ aid: max, name: name });
    setAddArtist(obj);
  };

  const deleteByID = (obj) => {
    console.log(obj.aid);
    let id = obj.aid;
    deleteArtist(id);
  };

  const edit = (obj) => {
    // console.log(obj);
    setSelectedArtist(obj);
    setOperation("update");
  };

  const update = (obj) => {
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
      <Table
        tableData={artist}
        tableHeader={tableHeader}
        handleDelete={(id) => deleteByID(id)}
        handleEdit={(id) => edit(id)}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tableHeader: state.artistStore.tableHeader,
    artist: state.artistStore.artist,
    selectedArtist: state.artistStore.selectedArtist,
    operation: state.artistStore.operation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoadArtist: (data) => {
      console.log("data");
      dispatch(loadArtist(data));
    },
    setAddArtist: (obj) => {
      console.log(obj);
      dispatch({ type: "EVENT_ADD_ARTIST", payload: obj });
    },
    deleteArtist: (id) => {
      dispatch({ type: "EVENT_DELETE_ARTIST", payload: id });
    },
    setSelectedArtist: (obj) => {
      dispatch(selectedArtist(obj));
    },
    setOperation: (obj) => {
      dispatch(operation(obj));
    },
    setUpdateAtist: (obj) => {
      dispatch({ type: "EVENT_UPDATE_ARTIST", payload: obj });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
