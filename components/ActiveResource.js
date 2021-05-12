import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import moment from "moment";
const ActiveResource = () => {
  const [resource, setResource] = useState({});
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    async function fetchResource() {
      const axiosRes = await axios.get("/api/activeresource");
      const resource = axiosRes.data;
      const TimeToFinish = parseInt(resource.time, 10);
      // diff betwn current time and activationtime
      const elapsedTime = moment().diff(
        moment(resource.activationTime),
        "seconds"
      );
      const updatedTimeToFinish = TimeToFinish * 60 - elapsedTime;
      //  alert(updatedTimeToFinish);
      if (updatedTimeToFinish >= 0) {
        resource.time = updatedTimeToFinish;
        setSeconds(updatedTimeToFinish);
      }
      setResource(resource);
    }

    fetchResource();
  }, []);

  useEffect(() => {
    const Interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds < 0) {
      clearInterval(Interval);
    }
    return () => clearInterval(Interval);
  }, [seconds]);
  const completeResource = () => {
    axios
      .patch("/api/resources", { ...resource, status: "complete" })
      .then((_) => location.reload())
      .catch((_) => alert("Cannot complete the resource!"));
  };

  const hasResource = resource && resource.id;
  return (
    <div className="active-resource">
      <h1 className="resource-name">
        {hasResource ? resource.title : "No Active Resource"}
      </h1>
      <div className="time-wrapper">
        {hasResource &&
          (seconds > 0 ? (
            <h2 className="elapsed-time">{seconds}</h2>
          ) : (
            <h2 className="elapsed-time">
              <button onClick={completeResource} className="button is-success">
                Click and Done..!
              </button>
            </h2>
          ))}
      </div>

      {hasResource ? (
        <Link href="/">
          <a className="button">Go to resource</a>
        </Link>
      ) : (
        <Link href="/">
          <a className="button">Go to resources</a>
        </Link>
      )}
    </div>
  );
};

export default ActiveResource;
