import React, { useRef } from "react";

function Form(props) {
  const {
    selectedUserPolicy,
    operation,
    userPolicy,
    users,
    policies,
    userIds,
    policyIds,
  } = props;
  let { upid,userName, policyName, amount, limit } =
    selectedUserPolicy;
  const userNameRef = useRef("");
  const policyNameRef = useRef("");
  const amountRef = useRef("");
  const limitRef = useRef("");

  const add = () => {
    const userName = userNameRef.current.value;
    const policyName = policyNameRef.current.value;
    const amount = amountRef.current.value;
    const limit = limitRef.current.value;
    var obj = { userName, policyName, amount, limit };
    console.log(obj);
    props.handleAdd(obj);
    userNameRef.current.value = "select user";
    policyNameRef.current.value = "select policy";
    amountRef.current.value = "";
    limitRef.current.value = "";
  };

  const update = (upid) => {
    const userName = userNameRef.current.value;
    const policyName = policyNameRef.current.value;
    const amount = amountRef.current.value;
    const limit = limitRef.current.value;
    var obj = {
      id: upid,
      upid: upid,
      userName: userName,
      policyName: policyName,
      amount: amount,
      limit: limit,
    };
    // console.log(obj);
    props.handleUpdate(obj);
    userNameRef.current.value = "select user";
    policyNameRef.current.value = "select policy";
    amountRef.current.value = "";
    limitRef.current.value = "";
  };

  if (operation === "update") {
    userNameRef.current.value = userName;
    policyNameRef.current.value = policyName;
    amountRef.current.value = amount;
    limitRef.current.value = limit;
  }

  const change = (e) => {
    console.log(e);
    console.log(Object.values(policies));
    let index = Object.values(policies).findIndex((i)=>{return i.name == e})
    console.log(Object.values(policies)[e]);
    amountRef.current.value = Object.values(policies)[index].amount;
    limitRef.current.value = Object.values(policies)[index].limit;
  };

  const userShow = userIds.map((e, i) => {
    return <option key={i}>{users[e].name}</option>;
  });

  const showPolicy = policyIds.map((e, i) => {
    return <option key={i}>{policies[e].name}</option>;
  });
  return (
    <>
      <div className="container my-5">
        <h1>User Policy Form</h1>

        <div className="form-group row">
          <select
            className="form-select mx-5"
            aria-label="Default select example"
            ref={userNameRef}
          >
            <option defaultValue={null}>select User</option>
            {userShow}
          </select>
          <select
            className="form-select my-1 mx-5"
            aria-label="Default select example"
            ref={policyNameRef}
            onChange={(e) => change(e.target.value)}
          >
            <option defaultValue={null}>select Policy</option>
            {showPolicy}
          </select>

          <div className="col-xs-4 my-1 mx-5">
            <input className="form-control" ref={amountRef} type="number" />
          </div>
          <div className="col-xs-4 my-1 mx-5">
            <input className="form-control" ref={limitRef} type="number" />
          </div>
          <div>
            <button className="btn btn-success mx-4 my-3" onClick={() => add()}>
              Add
            </button>

            <button
              className="btn btn-success mx-4 my-3"
              onClick={() => update(upid)}
            >
              update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
