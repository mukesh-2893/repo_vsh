import React, { useRef } from "react";

export default function ArtistForm(props) {
  const { selectedArtist, operation, handleAdd, handleUpdate } = props;
  const nameRef = useRef("");
  let { aid, name } = selectedArtist;

  if (operation === "update") {
    nameRef.current.value = name;
  }

  const add = () => {
    var name = nameRef.current.value;
    handleAdd(name);
  };

  const update = (aid) => {
    let name = nameRef.current.value;
    var obj = { aid, name };
    handleUpdate(obj);
  };

  return (
    <>
      <p className="my-5 display-4 "> Artist Details</p>
      <div className="container mt-5 px-5 offset-2.5 fs-5">
        <div className="col-sm-10">
          <input type="text" ref={nameRef} className="form-control" />
        </div>

        <div>
          <button className="btn btn-success mx-4 my-3" onClick={() => add()}>
            Add
          </button>

          <button
            className="btn btn-success mx-4 my-3"
            onClick={() => update(aid)}
          >
            update
          </button>
        </div>
      </div>
    </>
  );
}
