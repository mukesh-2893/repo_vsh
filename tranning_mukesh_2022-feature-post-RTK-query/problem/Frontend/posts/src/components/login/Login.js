import React from 'react'

function Login(props) {
    const { tableHeader, users, selectedUser, operation } = props;
  return (
    <>
        
    </>
  )
}


const mapStateToProps = (state) => {
    return {
      tableHeader: state.userStore.tableHeader,
      users: state.userStore.users,
      selectedUser: state.userStore.selectedUser,
      operation: state.userStore.operation,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addUser: (obj) => {
        dispatch({ type: "EVENT_ADD_USER", payload: obj });
      },
      setSelectedUser: (obj) => {
        dispatch(selectedUser(obj));
      },
      setOperation: (obj) => {
        dispatch(operation(obj));
      },
      setUpdate: (obj) => {
        dispatch({ type: "EVENT_UPDATE_USER", payload: obj });
      },
      deleteUser: (id) => {
        dispatch({ type: "EVENT_DELETE_USER", payload: id });
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(User);
