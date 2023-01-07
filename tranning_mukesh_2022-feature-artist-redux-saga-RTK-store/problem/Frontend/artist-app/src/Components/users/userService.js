import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "todos/fetchTodos",
  async (token, thunkAPI) => {
    let result = await axios.get("http://localhost:9090/users");
    // console.log(result.data);
    return result.data;
  }
);

export const addUsers = createAsyncThunk(
  "todos/addUser",
  async (obj, thunkAPI) => {
    let result = await axios.post("http://localhost:9090/users/add", obj);
    return result.data;
  }
);
export const deleteUsers = createAsyncThunk(
  "todos/deleteUser",
  async (id, thunkAPI) => {
    let result = await axios.delete(`http://localhost:9090/users/delete/${id}`);
    return id;
  }
);
export const updateUser = createAsyncThunk(
  "todos/updateUser",
  async (obj, thunkAPI) => {
    console.log(obj);
    let result = await axios.put(`http://localhost:9090/users/update/${obj.id}`, obj);
    return {id : obj.id, changes:{uid : obj.uid, name : obj.name}};
  }
);