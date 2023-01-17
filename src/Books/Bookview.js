import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Bookview() {
  const params = useParams();
  const [view, setView] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    try {
      const item = await axios.get(
        `https://63932e42ab513e12c5061a40.mockapi.io/Product/${params.id}`
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
        <Link to="/portal/books" className="btn btn-warning">
          Back
        </Link>
      </div>
      <div className="container-view">
        <div className="view-div">
          <h6>Bookname: {view.bookname}</h6>
          <h6>Authorname: {view.authorname}</h6>
          <h6>Available: {view.available}</h6>
          <h6>Published: {view.published}</h6>
        </div>
      </div>
    </>
  );
}

export default Bookview;
