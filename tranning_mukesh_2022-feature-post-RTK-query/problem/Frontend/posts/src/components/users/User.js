
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import { useAddUserMutation, useDeleteUserMutation, useGetUsersQuery, useUpdateUserMutation } from "./userApiSlice";
import UserForm from "./UserForm";
import { getOperation, getSelectedUser, setOperation, setSelectedUser } from "./userReducer";

function User(props) {
const { data, isError, isLoading, isSuccess } = useGetUsersQuery();
// console.log(data);
const selectedUser = useSelector(getSelectedUser);
const operation = useSelector(getOperation);
const dispatch = useDispatch();

const [addUser] = useAddUserMutation();
const [deleteUser] = useDeleteUserMutation();
const [updateUser] = useUpdateUserMutation();

let content;
if(isLoading){
content = `<h1>Loading please wait...</h1>`
}else if(isSuccess){
  content = (<>
    <UserForm
      handleAdd={(obj) => add(obj)}
      selectedUser={selectedUser}
      operation={operation}
      handleUpdate={(obj) => update(obj)}
    />
    <Table
      tableHeader={data.tableHeader}
      ids={data.ids}
      users={data.entities}
      handleDelete={(obj) => deleteByID(obj)}
      handleEdit={(obj) => edit(obj)}
    />
  </>)
}else if(isError){
  content = (<>
    <h1>404 page not found</h1>
    <p>{isError}</p>
  </>)
}


  const add = (name) => {    
    var max = Math.max(...data.ids) + 1;
    var obj = Object.assign({ id : max, uid: max, name: name });
    // console.log(obj);
    addUser(obj);
  };

  const edit = (obj) => {
    console.log(obj);
    dispatch(setSelectedUser(obj));
    dispatch(setOperation("update"));
  };

  const update = (obj) => {
    // console.log(obj);
    Object.assign(obj, {id : obj.uid})
    updateUser(obj)
  };

  const deleteByID = (id) => {
    deleteUser(id);
  };

  return (
    <>{content}</>
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(User);
export default User;