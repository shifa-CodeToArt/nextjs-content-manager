import React, { useState } from "react";
import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";
import axios from "axios";
import { useRouter } from 'next/router';
const newresource = () => {
  const router = useRouter()
  const createResource = formData => {
  axios.post(`${process.env.API_URL}/resources`,formData)
    .then(res=>{
      console.log("data posted");
    })
    .catch((err)=>{
      console.log("Data is missing",err.response.data);
    })
    router.push("/");
    
  };
  
  return (
    <>
      <Layout />
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
           <ResourceForm onFormSubmit={createResource}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default newresource;
