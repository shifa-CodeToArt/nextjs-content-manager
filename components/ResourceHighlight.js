import React from "react";
import Link from "next/link";
import ResourceLabel from "components/ResourceLabel";
import moment from "moment";
const ResourceHighlight = ({ resources }) => {
  return (
    <>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            {resources.map((resource) => {
              return (
                <section key={resource.id} className="section">
                  <div className="columns">
                    <div className="column is-8 is-offset-2">
                      <div className="content is-medium">
                        <h6 className="subtitle is-4">{moment(resource.createdAt).format("LLL")}
                        
                        <ResourceLabel status={resource.status}/>
                        </h6>
                        <h1 className="title">{resource.title}</h1>
                        <p>{resource.description}</p>
                      </div>
                      <Link href={`/resources/${resource.id}`}>
                        <a>
                          <button className="button is-info">More...</button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourceHighlight;
