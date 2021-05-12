import React from "react";
import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";
import axios from "axios";
export async function getServerSideProps({params}) {
  const dataRes = await fetch(`${process.env.API_URL}/resources/${params.id}`);
  const data = await dataRes.json();
  return {
    props: {
      resource: data
    }
  }
}
const UpdateResource=(form)=>{
  axios.patch("/api/resources",form)
  .then((res)=> console.log("Data has been Updated!",res))
  .catch((error)=>{console.log(error)})
}
const ResourceEdit = ({resource}) => {
  return (
    <>
      <Layout />
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
           <ResourceForm 
           onFormSubmit={UpdateResource} 
           initialData={resource}/>
          </div>
        </div>
      </div>
    </>
  );
};


export default ResourceEdit;
