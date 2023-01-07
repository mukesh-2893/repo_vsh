import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api";

const albumRatingAdapter = createEntityAdapter();

export const initialState = albumRatingAdapter.getInitialState({
  albumsRating: [],
  selectedUserId: -1,
});

export const albumApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAlbumRatings: builder.query({
      query: (id) => `/ratings/userRating/${id}`,
      transformResponse: (response) => {
        return albumRatingAdapter.setAll(initialState, response);
      },
      providesTags: ["AlbumRating"],
    }),
    
    addRatings : builder.mutation({
      query : (obj)=>({
        url : `/ratings/update.ratings`,
        method : "POST",
        body : obj
      }),
      invalidatesTags : [{type : "AlbumRating"}]
    })
  }),
});
export const { useGetAlbumRatingsQuery, useAddRatingsMutation } =
  albumApiSlice;
