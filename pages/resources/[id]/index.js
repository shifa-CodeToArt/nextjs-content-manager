import React from "react";
import Layout from "components/Layout";
import Link from "next/link";
import axios from "axios";
import ResourceLabel from "components/ResourceLabel";
import moment from "moment";
export async function getServerSideProps({ params }) {
  const dataRes = await fetch(
    `${process.env.API_URL}/resources/${params.id}`
  );
  const data = await dataRes.json();
  return {
    props: {
      resource: data,
    },
  };
}

const ResourceDetails = ({ resource }) => {
  const activeResource = () => {
    axios
      .patch("/api/resources", { ...resource, status: "active" })
      .then((res) => location.reload())
      .catch(() => alert("Cannot active the resource!"));
  };

  return (
    <>
      <Layout />
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {moment(resource.createdAt).format("LLLL")}
                      <ResourceLabel status={resource.status} />
                    </h2>
                    <h2 className="title">{resource.title}</h2>
                    <p>{resource.description}</p>
                    <p>Time To Finish: {resource.time} mins</p>

                    <Link href={`/resources/${resource.id}/edit`}>
                      <a>
                        <button className="button is-warning">Update</button>
                      </a>
                    </Link>
                    <button
                      className="button is-success ml-2"
                      onClick={activeResource}
                    >
                      Activate
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourceDetails;

// ResourceDetails.getInitalProps= async({query})=>{
//   const dataRes = await fetch(`http://localhost:3001/api/resources/${query.id}`);
//   const data = await dataRes.json();

//    return {
//      resource:data
//     }
//     };

// export async function getStaticPaths() {
//   const resData = await fetch("http://localhost:3001/api/resources");
//   const data = await resData.json();
//   const paths = data.map((resource) => {
//     return {
//       params: { id: resource.id },
//     };
//   });
//   return {
//     paths,
//     // means that other routes should resolve into 404 page
//     fallback: false,
//   };
// }
