import React from "react";

import ClaimTable from "./ClaimTable";
import ApproveTable from "./ApproveTable";
import RejectTable from "./RejectTable";
import { useClaimMutation, useGetUserPolicyQuery } from "../userPolicy/userPolicyApiSlice";

function Claim(props) {
  const { data, isError, isLoading, isSuccess } = useGetUserPolicyQuery();
  const [setClaim] = useClaimMutation();

  
  let content;
  if (isLoading) {
    content = `<h1>Loading please wait...</h1>`;
  } else if (isSuccess) {
    content = (
      <>
        {Object.keys(data.entities).length>0 ?
      <ClaimTable
        userPolicy={data.entities}
        ids={data.ids}
        handleApprove={(obj) => approve(obj)}
        handleReject={(obj) => reject(obj)}
      /> : null}

{Object.keys(data.entities).length>0 ?
      <ApproveTable 
      userPolicy={data.entities}
      ids={data.ids} />: null}

      {Object.keys(data.entities).length>0 ?
      <RejectTable userPolicy={data.entities} ids={data.ids} />: null}
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


  const approve = (obj) => {
    setClaim(obj);
  };

  const reject = (obj) => {
    console.log(obj);
    setClaim(obj);
  };

  return (
    <>
     {content}
    </>
  );
}

export default Claim;