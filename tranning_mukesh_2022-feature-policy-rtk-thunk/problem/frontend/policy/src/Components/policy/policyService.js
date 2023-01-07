import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const allPolicy = createAsyncThunk(
  "todos/allPolicy",
  async (token, thunkAPI) => {
    let result = await axios.get("http://localhost:9090/policy");
    
    return result.data;
  }
);

export const addPolicy = createAsyncThunk(
  "todos/addPolicy",
  async (obj, thunkAPI) => {
    let result = await axios.post("http://localhost:9090/policy/add", obj);
    return result.data;
  }
);
export const deletePolicy = createAsyncThunk(
  "todos/deletePolicy",
  async (id, thunkAPI) => {
    console.log(id);
    let result = await axios.delete(`http://localhost:9090/policy/delete/${id}`);
    console.log(result.data);
    return id;
  }
);
export const updatePolicy = createAsyncThunk(
  "todos/updatePolicy",
  async (obj, thunkAPI) => {
    console.log(obj);
    let result = await axios.put(`http://localhost:9090/policy/update/${obj.id}`, obj);
    console.log(result.data);
    return {id: obj.id, changes: {pid : obj.pid, name :obj.name, amount : obj.amount, limit :obj.limit}};
  }
);
