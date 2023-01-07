// import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
// import { getUserRating, onLoadRating } from "./albumRatingService";
// const albumRatingAdapter = createEntityAdapter();

// const initialState = albumRatingAdapter.getInitialState({
//     albumsRating: [],
//     selectedUserId:0
//   });


//   const albumCardSlice = createSlice({
//     name: "albumCard",
//     initialState,
//     reducers: {
//       loadRatings: (state, actions) => {
//         // state.albumsRating = actions.payload;
//         albumRatingAdapter.addMany(state, actions.payload);
//       },
//       selectedUserId: (state, actions) => {
//         console.log(actions.payload);
//         state.selectedUserId = actions.payload;
//       },
  
//       loadUserRatings: (state, actions) => {
//         // console.log(actions.payload);
//         // state.albumsRating = actions.payload;
        
//         albumRatingAdapter.upsertMany(state, actions.payload)
//       },
//       userRatingAction : (state, actions)=>{
//         // state.selectedUserId = actions.payload.id;
//         // state.albumsRating = actions.payload.result;
//         albumRatingAdapter.updateOne(state, actions.payload)
//       }
//     },

//     extraReducers: (builder) => {
//       builder
//         .addCase(onLoadRating.pending, (state, action) => {
//           state.isPending = true;
//         })
//         .addCase(onLoadRating.fulfilled, (state, action) => {
//           albumCardSlice.caseReducers.loadRatings(state, action);
//           state.isSuccess = true;
//         })
//         .addCase(getUserRating.pending, (state, action) => { })
//         .addCase(getUserRating.fulfilled, (state, action) => {
//           albumCardSlice.caseReducers.loadUserRatings(state, action);
//         })
//       }
//   });
  
//   export const {
//     loadRatings,
//     loadUserRatings,
//     userRatingAction,
//     selectedUserId,
//   } = albumCardSlice.actions;
//   export default albumCardSlice.reducer;
  