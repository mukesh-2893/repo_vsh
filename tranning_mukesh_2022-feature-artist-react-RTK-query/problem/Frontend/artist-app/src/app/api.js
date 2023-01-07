import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9090" }),
  tagTypes: ["User", "Artist", "Album", "AlbumRating"],
  endpoints: (builder) => ({}),
});