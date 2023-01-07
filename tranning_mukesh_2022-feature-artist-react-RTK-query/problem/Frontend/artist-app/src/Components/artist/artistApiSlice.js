import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api";

const artistAdapter = createEntityAdapter();

export const initialState = artistAdapter.getInitialState({
    tableHeader: ["AID", "Name", "Actions"],
    users: [],
    selectedUser: {},
    operation: "Add",
});

export const artistApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArtists: builder.query({
      query: () => "/artists",
      transformResponse: (response) => {
        return artistAdapter.setAll(initialState, response);
      },
      providesTags: ["Artist"],
    }),
    addArtist: builder.mutation({
      query: (data) => ({
        url: "/artists/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Artist" }],
    }),
    deleteArtist: builder.mutation({
      query: (id) => ({
        url: `artists/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Artist" }],
    }),
    updateArtist: builder.mutation({
      query: (data) => ({
        url: `artists/update/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "Artist" }],
    }),
  }),
});
export const {
  useGetArtistsQuery,
  useAddArtistMutation,
  useDeleteArtistMutation,
  useUpdateArtistMutation,
} = artistApiSlice;