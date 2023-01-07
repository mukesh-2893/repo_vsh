import React, { useRef } from "react";

function UserForm(props) {
  const { selectedUser, operation } = props;
  let { uid, name } = selectedUser;

  const nameRef = useRef("");

  const add = () => {
    const name = nameRef.current.value;
    console.log(name);
    props.handleAdd(name);
    // console.log(uid, name);
    nameRef.current.value = "";
  };

  const update = (uid) => {
    let name = nameRef.current.value;
    console.log(name, uid);

    var obj = { uid, name };
    props.handleUpdate(obj);

    nameRef.current.value = "";
  };
  if (operation === "update") {
    nameRef.current.value = name;
  }
  return (
    <>
      <div className="container my-5">
        <h1>User Form</h1>
        <div className="form-group row">
          <div className="col-xs-4">
            <label htmlFor="ex3">Enter User Name : </label>
            <input className="form-control" ref={nameRef} type="text" />
          </div>
          <div>
            <button className="btn btn-success mx-4 my-3" onClick={() => add(uid)}>
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

export default UserForm;
