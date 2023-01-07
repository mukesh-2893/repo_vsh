import React, { useRef } from "react";

export default function UserForm(props) {
  const { selectedUser, operation, handleAdd, handleUpdate } = props;
  const nameRef = useRef("");

  let { uid, name } = selectedUser;
  if (operation === "update") {
    nameRef.current.value = name;
  }

  const add = () => {
    console.log("user Add");
    const name = nameRef.current.value;
    handleAdd(name);
    nameRef.current.value = "";
  };

  const update = (uid) => {
    let name = nameRef.current.value;
    console.log(name, uid);

    var obj = { uid, name };
    handleUpdate(obj);

    name = "";
  };

  return (
    <>
      <p className="my-5 display-4 "> User Details</p>
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
            onClick={() => update(uid)}
          >
            update
          </button>
        </div>
      </div>
    </>
  );
}
