import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const onLoadRating = createAsyncThunk(
  "todos/fetchAlbumRaing",
  async (token, thunkAPI) => {
    let result = await axios.get("http://localhost:9090/ratings/userRating/-1");
    // console.log(result.data);
    return result.data;
  }
);

export const getUserRating = createAsyncThunk(
  "todos/fetchAlbumUserRating",
  async (id, thunkAPI) => {
    let result = await axios.get(`http://localhost:9090/ratings/userRating/${id}`);
    // console.log(result.data);
    return result.data;
  }
);

export const updateUserRating = createAsyncThunk(
  "todos/updateAlbumUserRating",
  async (obj, thunkAPI) => {
    let result = await axios.post("http://localhost:9090/ratings/update.ratings", obj);
    console.log(result.data);
    return result.data;
  }
);
