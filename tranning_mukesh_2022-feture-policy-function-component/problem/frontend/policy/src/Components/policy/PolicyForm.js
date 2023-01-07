import React, { useRef } from "react";

function PolicyForm(props) {
  const { selectedPolicy, operation } = props;
  let { pid, name, amount, limit } = selectedPolicy;

  const nameRef = useRef("");
  const amountRef = useRef("");
  const limitRef = useRef("");

  if (operation === "update") {
    nameRef.current.value = name;
    amountRef.current.value = amount;
    limitRef.current.value = limit;
  }

  const add = () => {
    const name = nameRef.current.value;
    const amount = amountRef.current.value;
    const limit = limitRef.current.value;
    var obj = { name, amount, limit };
    props.handleAdd(obj);
    name.current.value = "";
  };

  const update = (pid) => {
    const name = nameRef.current.value;
    const amount = amountRef.current.value;
    const limit = limitRef.current.value;
    var obj = { pid, name, amount, limit };

    props.handleUpdate(obj);
  };

  return (
    <>
      <div className="container my-5">
        <h1>Policy Form</h1>
        <div className="form-group row">
          <div className="col-xs-4">
            <label htmlFor="ex3">Enter Policy Name : </label>
            <input className="form-control" ref={nameRef} type="text" />
          </div>
          <div className="col-xs-4">
            <label htmlFor="ex3">Enter Amount : </label>
            <input className="form-control" ref={amountRef} type="number" />
          </div>
          <div className="col-xs-4">
            <label htmlFor="ex3">Enter Limit : </label>
            <input className="form-control" ref={limitRef} type="number" />
          </div>
          <div>
            <button className="btn btn-success mx-4 my-3" onClick={() => add()}>
              Add
            </button>

            <button
              className="btn btn-success mx-4 my-3"
              onClick={() => update(pid)}
            >
              update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PolicyForm;
