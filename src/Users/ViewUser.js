import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewUser() {
  const params = useParams();
  const [view, setView] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    try {
      const item = await axios.get(
        `https://63932e42ab513e12c5061a40.mockapi.io/users/${params.id}`
      );
      setView(item.data);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };
  return load ? (
    <button class="btn btn-primary" type="button" disabled>
      <span
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Loading...
    </button>
  ) : (
    <>
      <div>
        <Link to="/portal/users" className="btn btn-warning">
          Back
        </Link>
      </div>
      <div className="container-view">
        <div className="view-div">
          <h6>Name: {view.Name}</h6>
          <h6>Email: {view.Email}</h6>
          <h6>Mobile: {view.Mobile}</h6>
          <h6>City: {view.City}</h6>
        </div>
      </div>
    </>
  );
}

export default ViewUser;
