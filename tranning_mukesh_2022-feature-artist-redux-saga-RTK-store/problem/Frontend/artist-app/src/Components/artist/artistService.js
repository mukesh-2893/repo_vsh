import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArtists = createAsyncThunk(
  "todos/fetchArtist",
  async (token, thunkAPI) => {
    let result = await axios.get("http://localhost:9090/artists");
    
    return result.data;
  }
);

export const addArtist = createAsyncThunk(
  "todos/addArtist",
  async (obj, thunkAPI) => {
    let result = await axios.post("http://localhost:9090/artists/add", obj);
    return obj;
  }
);
export const deleteArtist = createAsyncThunk(
  "todos/deleteArtist",
  async (id, thunkAPI) => {
    let result = await axios.delete(`http://localhost:9090/artists/delete/${id}`);
    return id;
  }
);
export const updateArtist = createAsyncThunk(
  "todos/updateArtist",
  async (obj, thunkAPI) => {
    console.log(obj);
    let result = await axios.put(`http://localhost:9090/artists/update/${obj.id}`, obj);
    return {id : obj.id, changes:{aid : obj.aid, name : obj.name}};
  }
);