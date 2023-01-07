import React, { useRef } from "react";

export default function UserForm(props) {
  const { selectedUser, operation, handleAdd, handleUpdate } = props;
  const nameRef = useRef("");
  const add = () => {
    const name = nameRef.current.value;
    handleAdd(name);
    nameRef.current.value = "";
  };

  const update = (uid) => {
    let name = nameRef.current.value;
    var obj = { uid, name };
    handleUpdate(obj);
    name = "";
  };

  let { uid, name } = selectedUser;
  // console.log(selectedUser, operation);

  if (operation === "update") {
    nameRef.current.value = name;
  }
  return (
    <>
      <div className=" container mx-5 my-2">
        <h1>User Form</h1>
        <div className="form-group row">
          <div className="col-xs-2">
            <label htmlFor="ex2">Enter User Name : </label>
            <input className="form-control" ref={nameRef} type="text" />
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
      </div>
    </>
  );
}
