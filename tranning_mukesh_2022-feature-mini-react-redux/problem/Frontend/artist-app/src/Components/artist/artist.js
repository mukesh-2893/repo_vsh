import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../navbar/Table";


import { loadArtist, selectedArtist, operation } from "./actions";
import ArtistForm from "./artistForm";

export class Artist extends Component {
  componentDidMount() {
    // console.log("artist didmount calls");
    axios.get("http://localhost:3000/artists").then((response) => {
      //   console.log(response.data);
      this.props.setLoadArtist(response.data);
    });
  }

  add = (name) => {
    var id = this.props.artist.map(({ aid }) => {
      return aid;
    });
    var max = Math.max(...id) + 1;
    var obj = Object.assign({ aid: max, name: name });
    console.log(obj);
    axios.post("http://localhost:3000/artists/add", obj).then((res) => {
      console.log(res.data);
      this.props.setLoadArtist(res.data);
    });
  };

  delete = (obj) => {
    var id = obj.aid;
    axios
      .delete(`http://localhost:3000/artists/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        this.props.setLoadArtist(res.data);
      })
      .catch((err) => {
        return err;
      });
  };

  edit = (obj) => {
    this.props.setSelectedArtist(obj);
    this.props.setOperation("update");
  };

  update = (obj)=>{
    console.log(obj);

    axios
    .put(`http://localhost:3000/artists/update/${obj.id}`, obj)
    .then((res)=>{
      console.log(res.data);
      this.props.setLoadArtist(res.data);
    })
  }

  render() {
    const { tableHeader, artist, status, selectedArtist,operation } = this.props;
    // console.log(artist);
    return (
      <>
        <ArtistForm
          handleAdd={(name) => this.add(name)}
          selectedArtist={selectedArtist}
          operation={operation}
          handleUpdate={(obj)=>this.update(obj)}
        />
        {artist && artist.length > 0 ? (
          <Table
            tableHeader={tableHeader}
            tableData={artist}
            status={status}
            handleDelete={(obj) => this.delete(obj)}
            handleEdit={(id) => this.edit(id)}
          />
        ) : null}
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
    setSelectedArtist: (data) => {
      dispatch(selectedArtist(data));
    },
    setOperation : (data)=>{
      // console.log(data);
        dispatch(operation(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
