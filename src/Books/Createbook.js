import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Createbook() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const formik = useFormik({
    initialValues: {
      bookname: "",
      authorname: "",
      available: "",
      published: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.bookname) {
        errors.bookname = "Please enter Bookname";
      }
      if (!values.authorname) {
        errors.authorname = "Please enter Authorname";
      }
      if (!values.available) {
        errors.available = "Please enter Available";
      }
      if (!values.published) {
        errors.published = "Please enter Published Date";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoad(true);
        const User = await axios.post(
          "https://63932e42ab513e12c5061a40.mockapi.io/Product",
          values
        );
        navigate("/portal/books");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <div>
        <Link to="/portal/books" className="btn btn-warning btn-sm">
          Back
        </Link>
      </div>

      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-6">
              <label>Book Name</label>
              <br></br>
              <label>Author Name</label>
              <br></br>
              <label>Available</label>
              <br></br>
              <label>Published Year</label>
              <br></br>
            </div>
            <div className=" col-6">
              <input
                name="bookname"
                value={formik.values.bookname}
                onChange={formik.handleChange}
                type={"text"}
              />
              <span style={{ color: "red" }}>{formik.errors.bookname}</span>
              <br></br>
              <input
                value={formik.values.authorname}
                onChange={formik.handleChange}
                name="authorname"
                type={"text"}
              />
              <span style={{ color: "red" }}>{formik.errors.authorname}</span>
              <br></br>
              <input
                value={formik.values.available}
                onChange={formik.handleChange}
                name="available"
                type={"number"}
              />
              <span style={{ color: "red" }}>{formik.errors.available}</span>
              <br></br>
              <input
                value={formik.values.published}
                onChange={formik.handleChange}
                name="published"
                type={"text"}
              />
              <span style={{ color: "red" }}>{formik.errors.published}</span>
              <br></br>
              <input disabled={load} type={"submit"} value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Createbook;
