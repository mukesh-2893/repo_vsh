import React, { Component } from 'react'
import Table from '../navbar/Table';
import ArtistForm from "./artistForm"
import {
  loadArtist,
  selectedArtist,
  operation,
} from "./actions"
import { connect } from 'react-redux';

export class Artist extends Component {

    add = (name) =>{
        var id = this.props.artist.map(({aid})=>{
          return aid;
        });
        var max = Math.max(...id)+1;
        var obj = Object.assign({aid : max, name : name});
        this.props.setAddArtist(obj);
    }

    delete = (obj)=>{
      console.log(obj.aid);
      let id = obj.aid
      this.props.deleteArtist(id)
    }

    edit(obj) {
      // console.log(obj);
      this.props.setSelectedArtist(obj);
      this.props.setOperation("update");
    }

    update(obj) {
      this.props.setUpdateAtist(obj);
    }

  render() {
    const { tableHeader, artist, selectedArtist, operation } = this.props;
    // console.log(artist);
    return (
        <>
      <ArtistForm
        handleAdd={(name)=>this.add(name)}
        selectedArtist={selectedArtist}
        operation={operation}
        handleUpdate={(obj) => this.update(obj)}
      />
      <Table
        tableData={artist}
        tableHeader={tableHeader}
        handleDelete={(id) => this.delete(id)}
        handleEdit={(id) => this.edit(id)}
      />
      </>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    tableHeader : state.artistStore.tableHeader,
    artist : state.artistStore.artist,
    selectedArtist : state.artistStore.selectedArtist,
    operation : state.artistStore.operation
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {
    setLoadArtist : (data) => {
      console.log("data");
      dispatch(loadArtist(data));
    },
    setAddArtist : (obj) => {
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
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Artist);
