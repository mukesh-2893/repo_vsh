import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { addAlbumService, deleteAlbumService, fetchAlbumService, updateAlbumService } from "./albumService";

const albumAdapter = createEntityAdapter();

const initialState = albumAdapter.getInitialState({
  tableHeader: ["ID", "Artist Name", "Album Name", "Actions"],
  album: [],
  selectedAlbum: {},
  operation: "Add",
});

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    load: (state, actions) => {
      // state.album = [...actions.payload];
      // console.log(actions.payload);
      albumAdapter.addMany(state, actions.payload);
    },

    deletealbum: (state, actions) => {
      // state.album = [...actions.payload];
      albumAdapter.removeOne(state, actions.payload)
    },

    add: (state, actions) => {
      // state.album = [...actions.payload];
      albumAdapter.addOne(state, actions.payload)
    },

    selectedAlbum: (state, actions) => {
      state.selectedAlbum = actions.payload;
    },

    operation: (state, actions) => {
      state.operation = actions.payload;
    },

    update: (state, actions) => {
      // state.album = [...actions.payload];
      albumAdapter.updateOne(state, actions.payload)
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbumService.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(fetchAlbumService.fulfilled, (state, action) => {
        // console.log(action);
        albumSlice.caseReducers.load(state, action);
        state.isSuccess = true;
      })
      .addCase(addAlbumService.pending, (state, action) => { })
      .addCase(addAlbumService.fulfilled, (state, action) => {
        albumSlice.caseReducers.add(state, action);
      })
      .addCase(deleteAlbumService.pending, (state, action) => { })
      .addCase(deleteAlbumService.fulfilled, (state, action) => {
        albumSlice.caseReducers.deletealbum(state, action);
      })
      .addCase(updateAlbumService.pending, (state, action) => { })
      .addCase(updateAlbumService.fulfilled, (state, action) => {
        albumSlice.caseReducers.update(state, action);
      })
    }
});

export const {
  load,
  deletealbum,
  add,
  selectedAlbum,
  operation,
  update,
} = albumSlice.actions;
export default albumSlice.reducer;
