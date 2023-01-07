import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "todos/fetchPosts",
  async (token, thunkAPI) => {
    let result = await axios.get("http://localhost:9090/posts");
    
    return result.data;
  }
);

export const addPostThunk = createAsyncThunk(
  "todos/addPost",
  async (obj, thunkAPI) => {
    let result = await axios.post("http://localhost:9090/posts/add", obj);
    return obj;
  }
);
export const deletePostThunk = createAsyncThunk(
  "todos/deletePost",
  async (id, thunkAPI) => {
    let result = await axios.delete(`http://localhost:9090/posts/delete/${id}`);
    
    return id;
  }
);
export const updatePostThunk = createAsyncThunk(
  "todos/updatePost",
  async (obj, thunkAPI) => {
    let result = await axios.put(`http://localhost:9090/posts/update/${obj.pid}`, obj);
    return {id : obj.pid, changes:{uid : obj.uid, pid : obj.pid,  title : obj.title, post : obj.post}};
  }
);

export const likePostThunk = createAsyncThunk(
    "todos/likePost",
    async(obj, thunkAPI)=>{
        let result = await axios.post(`http://localhost:9090/posts/like`, obj)
        return result.data;
    }
)