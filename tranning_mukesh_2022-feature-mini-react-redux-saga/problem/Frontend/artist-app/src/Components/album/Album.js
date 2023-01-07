import React, { Component } from 'react'
import { connect } from 'react-redux';
import Table from '../navbar/Table'
import { operation, selectedAlbum } from './actions';
import { AlbumForm } from './AlbumForm';

export class Album extends Component {

  add = (obj) =>{
    var id = this.props.album.map(({id})=>{
      return id;
    });
    var max = Math.max(...id)+1;
    var link = "https://upload.wikimedia.org/wikipedia/en/0/03/Images_%281972_poster%29.jpg"
    // console.log(max);
    const { artistName, albumName } = obj;
    const obj2 = Object.assign({id : max, albumName : albumName, artistName : artistName, link : link});
    // console.log(obj2);
    this.props.setAddAlbum(obj2);
  }

  delete=(obj)=>{
    const id = obj.id
    // console.log(id);
    this.props.deleteAlbum(id);
  }

  edit(obj) {
    // console.log(obj);
    this.props.setSelectedAlbum(obj);
    this.props.setOperation("update");
  }

  update(obj) {
    this.props.setUpdateAlbum(obj);
  }

  render() {
    const { tableHeader, album, artist,  selectedAlbum, operation } = this.props;
    console.log(album);
    const result = album.map((el)=>{
      return Object.assign({id : el.id, albumName : el.albumName, artistName : el.artistName})
    });
   
    return (
      <div>
      <AlbumForm
        artist={artist}
        handleAdd={(obj)=>this.add(obj)}
        selectedAlbum={selectedAlbum}
        operation={operation}
        handleUpdate={(obj)=>this.update(obj)}
      />
      <Table
       tableData={result}
        tableHeader={tableHeader}
        handleDelete={(obj) => this.delete(obj)}
        handleEdit={(id) => this.edit(id)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    tableHeader : state.albumStore.tableHeader,
    album : state.albumStore.album,
    selectedAlbum : state.albumStore.selectedAlbum,
    operation : state.albumStore.operation,
    artist : state.artistStore.artist
  };
};


const mapDispatchToProps = (dispatch)=>{
  return {
    setAddAlbum : (obj) => {      
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
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Album);


