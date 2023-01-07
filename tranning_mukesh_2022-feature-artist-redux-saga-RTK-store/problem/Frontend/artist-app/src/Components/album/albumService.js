import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAlbumService = createAsyncThunk(
  "todos/fetchAlbum",
  async (token, thunkAPI) => {
    let result = await axios.get("http://localhost:9090/album");
    // console.log(result.data);
    return result.data;
  }
);

export const addAlbumService = createAsyncThunk(
  "todos/addAlbum",
  async (obj, thunkAPI) => {
    let result = await axios.post("http://localhost:9090/album/add", obj);
    return obj;
  }
);
export const deleteAlbumService = createAsyncThunk(
  "todos/deleteAlbum",
  async (id, thunkAPI) => {
    let result = await axios.delete(`http://localhost:9090/album/delete/${id}`);
    return id;
  }
);
export const updateAlbumService = createAsyncThunk(
  "todos/updateAlbum",
  async (obj, thunkAPI) => {
    console.log(obj);
    let result = await axios.put(`http://localhost:9090/album/update/${obj.id}`, obj);
    return {id : obj.id, changes:{ artistName : obj.artistName, albumName : obj.albumName}};
  }
);