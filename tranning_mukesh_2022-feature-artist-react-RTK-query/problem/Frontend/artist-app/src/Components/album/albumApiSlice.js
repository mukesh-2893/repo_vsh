import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api";

const albumAdapter = createEntityAdapter();

export const initialState = albumAdapter.getInitialState({
    tableHeader: ["ID", "Artist Name", "Album Name", "Actions"],
    album: [],
    selectedAlbum: {},
    operation: "Add",
});

export const albumApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: () => "/album",
      transformResponse: (response) => {
        return albumAdapter.setAll(initialState, response);
      },
      providesTags: ["Album"],
    }),
    addAlbum: builder.mutation({
      query: (data) => ({
        url: "/album/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Album" }],
    }),
    deleteAlbum: builder.mutation({
      query: (id) => ({
        url: `album/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Album" }],
    }),
    updateAlbum: builder.mutation({
      query: (data) => ({
        url: `album/update/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "Album" }],
    }),
  }),
});
export const {
  useGetAlbumsQuery,
  useAddAlbumMutation,
  useUpdateAlbumMutation,
  useDeleteAlbumMutation,
} = albumApiSlice;