import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { AlbumForm } from "./AlbumForm";
import Table from "./Table";

import {
  getOperation,
  getSelectedAlbum,
  setOperation,
  setSelectedAlbum,
} from "./albumReducer";
import {
  useAddAlbumMutation,
  useDeleteAlbumMutation,
  useGetAlbumsQuery,
  useUpdateAlbumMutation,
} from "./albumApiSlice";
import { useGetArtistsQuery } from "../artist/artistApiSlice";

function Album(props) {
  const artistData = useGetArtistsQuery().data;
  const { data, isError, isLoading, isSuccess } = useGetAlbumsQuery();
  // console.log(data);
  const selectedAlbum = useSelector(getSelectedAlbum);
  const operation = useSelector(getOperation);
  const dispatch = useDispatch();

  const [addAlbum] = useAddAlbumMutation();
  const [deleteAlbum] = useDeleteAlbumMutation();
  const [updateAlbum] = useUpdateAlbumMutation();

  let content;
  if (isLoading) {
    content = `<h1>Loading please wait...</h1>`;
  } else if (isSuccess) {
    content = (
      <>
        <AlbumForm
          handleAdd={(obj) => add(obj)}
          selectedAlbum={selectedAlbum}
          artist={artistData.entities}
          ids={artistData.ids}
          operation={operation}
          handleUpdate={(obj) => update(obj)}
        />
        <Table
          tableHeader={data.tableHeader}
          ids={data.ids}
          album={data.entities}
          handleDelete={(obj) => deleteByID(obj)}
          handleEdit={(obj) => edit(obj)}
        />
      </>
    );
  } else if (isError) {
    content = (
      <>
        <h1>404 page not found</h1>
        <p>{isError}</p>
      </>
    );
  }

  const add = (obj) => {
    var max = Math.max(...data.ids) + 1;
    var link =
      "https://upload.wikimedia.org/wikipedia/en/0/03/Images_%281972_poster%29.jpg";
    const { albumName, artistName } = obj;
    const obj2 = Object.assign({
      id: max,
      albumName: albumName,
      artistName: artistName,
      link: link,
    });
    addAlbum(obj2);
  };

  const deleteByID = (id) => {
    // const id = obj.id
    deleteAlbum(id);
  };

  const edit = (obj) => {
    dispatch(setSelectedAlbum(obj));
    dispatch(setOperation("update"));
  };

  const update = (obj) => {
    updateAlbum(obj);
  };

  return <>{content}</>;
}
export default Album;
