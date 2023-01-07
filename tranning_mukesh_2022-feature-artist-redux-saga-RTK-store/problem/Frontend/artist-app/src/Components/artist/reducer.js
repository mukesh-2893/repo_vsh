import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import { addArtist, deleteArtist, fetchArtists, updateArtist } from "./artistService";

const artistAdapter = createEntityAdapter();

const initialState = artistAdapter.getInitialState({
  tableHeader: ["UID", "Name", "Actions"],
  artist: [],
  selectedArtist: {},
  operation: "Add",
});


const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    load: (state, actions) => {
      // state.artist = [...actions.payload];
      // console.log(actions.payload);
      artistAdapter.addMany(state, actions.payload)
    },

    deleteartist: (state, actions) => {
      // state.artist = [...actions.payload];
      artistAdapter.removeOne(state, actions.payload)
    },

    add: (state, actions) => {
      // state.artist = [...actions.payload];
      artistAdapter.addOne(state, actions.payload)
    },

    selectedArtist: (state, actions) => {
      state.selectedArtist = actions.payload;
    },

    operation: (state, actions) => {
      state.operation = actions.payload;

    },
    update: (state, actions) => {
      // state.artist = [...actions.payload];
      artistAdapter.updateOne(state, actions.payload)
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchArtists.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(fetchArtists.fulfilled, (state, action) => {
        // console.log(action);
        artistSlice.caseReducers.load(state, action);
        state.isSuccess = true;
      })
      .addCase(addArtist.pending, (state, action) => { })
      .addCase(addArtist.fulfilled, (state, action) => {
        artistSlice.caseReducers.add(state, action);
      })
      .addCase(deleteArtist.pending, (state, action) => { })
      .addCase(deleteArtist.fulfilled, (state, action) => {
        artistSlice.caseReducers.deleteartist(state, action);
      })
      .addCase(updateArtist.pending, (state, action) => { })
      .addCase(updateArtist.fulfilled, (state, action) => {
        artistSlice.caseReducers.update(state, action);
      })
    }
});

export const {
  load,
  deleteartist,
  add,
  selectedArtist,
  operation,
  update,
} = artistSlice.actions;
export default artistSlice.reducer;

