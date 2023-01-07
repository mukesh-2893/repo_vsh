import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const allUserPolicy = createAsyncThunk(
  "todos/allUserPolicy",
  async (token, thunkAPI) => {
    let result = await axios.get("http://localhost:9090/user.policy");
    console.log(result.data);
    return result.data;
  }
);

export const addUserPolicy = createAsyncThunk(
  "todos/addUserPolicy",
  async (obj, thunkAPI) => {
    let result = await axios.post("http://localhost:9090/user.policy/add", obj);
    return result.data[result.data.length - 1];
  }
);
export const deleteUserPolicy = createAsyncThunk(
  "todos/deleteUserPolicy",
  async (id, thunkAPI) => {
    console.log(id);
    let result = await axios.delete(
      `http://localhost:9090/user.policy/delete/${id}`
    );
    // console.log(result.data);
    return id;
  }
);
export const updateUserPolicy = createAsyncThunk(
  "todos/updateUserPolicy",
  async (obj, thunkAPI) => {
    console.log(obj);
    let result = await axios.put(
      `http://localhost:9090/user.policy/update/${obj.upid}`,
      obj
    );
    console.log(result.data);
    return {
      id: obj.upid,
      changes: {
        upid: obj.upid,
        userName: obj.userName,
        policyName: obj.policyName,
        pid: obj.pid,
        name: obj.name,
        amount: obj.amount,
        limit: obj.limit,
      },
    };
  }
);

export const claimSettlement = createAsyncThunk(
  "todos/claimSettlement",
  async (obj, thunkAPI) => {
    // console.log(obj);
    let result =  axios
        .post("http://localhost:9090/user.policy/claim.request", obj)
    
        return {
          id: obj.upid,
          changes: {
            upid: obj.upid,
            camount : obj.camount,
            status : obj.status
          },
        };;
  }
);