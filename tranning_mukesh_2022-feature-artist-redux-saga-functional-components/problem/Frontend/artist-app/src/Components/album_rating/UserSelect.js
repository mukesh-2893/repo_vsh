import React, { useRef } from "react";

export default function UserSelect(props) {
  const { users, handleChange } = props;
  const nameRef = useRef("");
  const change = (e) => {
    handleChange(e);
  };
  const showSelect = users.map((e, i) => {
    return (
      <option value={e.uid} key={i}>
        {e.name}
      </option>
    );
  });

  return (
    <>
      <div className="container mt-5 px-5 offset-2.5 fs-5">
        <div className="col-sm-10">
          <div>
            <select
              ref={nameRef}
              className="selectpicker"
              onChange={(e) => change(e.target.value)}
            >
              <option defaultValue={"null"}>Select user</option>
              {showSelect}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
