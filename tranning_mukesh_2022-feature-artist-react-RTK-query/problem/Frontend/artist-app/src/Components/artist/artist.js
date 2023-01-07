import React from "react";
import Table from "./table";
import ArtistForm from "./artistForm";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  useAddArtistMutation,
  useDeleteArtistMutation,
  useGetArtistsQuery,
  useUpdateArtistMutation,
} from "./artistApiSlice";
import {
  getOperation,
  getSelectedArtist,
  setOperation,
  setSelectedArtist,
} from "./artistReducer";

function Artist(props) {
  const { data, isError, isLoading, isSuccess } = useGetArtistsQuery();
  // console.log(data);
  const selectedArtist = useSelector(getSelectedArtist);
  const operation = useSelector(getOperation);
  const dispatch = useDispatch();

  const [addArtist] = useAddArtistMutation();
  const [deleteArtist] = useDeleteArtistMutation();
  const [updateArtist] = useUpdateArtistMutation();

  let content;
  if (isLoading) {
    content = `<h1>Loading please wait...</h1>`;
  } else if (isSuccess) {
    content = (
      <>
        <ArtistForm
          handleAdd={(obj) => add(obj)}
          selectedArtist={selectedArtist}
          operation={operation}
          handleUpdate={(obj) => update(obj)}
        />
        <Table
          tableHeader={data.tableHeader}
          ids={data.ids}
          artist={data.entities}
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

  const add = (name) => {
    var max = Math.max(...data.ids) + 1;
    var obj = Object.assign({ id: max, aid: max, name: name });
    addArtist(obj);
  };

  const deleteByID = (obj) => {
    deleteArtist(obj);
  };

  const edit = (obj) => {
    // console.log(obj);
    dispatch(setSelectedArtist(obj));
    dispatch(setOperation("update"));
  };

  const update = (obj) => {
    Object.assign(obj, { id: obj.aid });
    // console.log(obj);
    updateArtist(obj);
  };

  return <> {content}</>;
}
export default Artist;
