import React, { useRef } from 'react'

export function AlbumForm(props) {
  const { artist, operation, selectedAlbum, handleAdd, handleUpdate, artistIds } = props;
  const albumNameRef = useRef("");
  const artistNameRef = useRef("");
    const { id, albumName, artistName } = selectedAlbum;
    if (operation === "update") {
      albumNameRef.current.value = albumName;
      artistNameRef.current.value = artistName;
    }
    const showSelect = artistIds.map((e, i) => {
      return <option key={i}>{artist[e].name}</option>;
    });

    
  const add = () => {
    var albumName = albumNameRef.current.value;
    var artistName = artistNameRef.current.value;
    var obj = { artistName, albumName };
    console.log(obj);
    handleAdd(obj);
  };

  const update = (id) => {
    var albumName = albumNameRef.current.value;
    var artistName = artistNameRef.current.value;
    var obj = { id, albumName, artistName };
    handleUpdate(obj);
    
  };


    return (
      <>
        <p className="my-5 display-4 "> Add Album Details</p>
        <div className="container mt-5 px-5 offset-1.5 fs-2 mx-5">
          <select
            className="form-select my-2 mx-5"
            aria-label="Default select example"
            ref={artistNameRef}
          >
            <option defaultValue={null}>select artist</option>
            {showSelect}
          </select>
          <div className="col-sm-10  mx-5">
            <input type="text" ref={albumNameRef} className="form-control" />
          </div>

          <div className="mx-5 align-centre">
            <button
              className="btn btn-success"
              onClick={() => add()}
            >
              ADD
            </button>

            <button className="btn btn-success" onClick={() => update(id)}>
              update
            </button>
          </div>
        </div>
      </>
    );
}
