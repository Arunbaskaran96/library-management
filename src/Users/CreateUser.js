import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Mobile: "",
      City: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.Name) {
        errors.Name = "Please enter Name";
      }
      if (!values.Email) {
        errors.Email = "Please enter Email";
      }
      if (!values.Mobile) {
        errors.Mobile = "Please enter Mobile";
      }
      if (!values.City) {
        errors.City = "Please enter City";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoad(true);
        const User = await axios.post(
          "https://63932e42ab513e12c5061a40.mockapi.io/users",
          values
        );
        navigate("/portal/users");
      } catch (error) {}
    },
  });
  return (
    <div>
      <div>
        <Link to="/portal/users" className="btn btn-warning btn-sm">
          Back
        </Link>
      </div>

      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-6">
              <label>Name</label>
              <br></br>
              <label>Email</label>
              <br></br>
              <label>Mobile</label>
              <br></br>
              <label>City</label>
              <br></br>
            </div>
            <div className=" col-6">
              <input
                name="Name"
                value={formik.values.Name}
                onChange={formik.handleChange}
                type={"text"}
              />
              <span style={{ color: "red" }}>{formik.errors.Name}</span>
              <br></br>
              <input
                value={formik.values.Email}
                onChange={formik.handleChange}
                name="Email"
                type={"email"}
              />
              <span style={{ color: "red" }}>{formik.errors.Email}</span>
              <br></br>
              <input
                value={formik.values.Mobile}
                onChange={formik.handleChange}
                name="Mobile"
                type={"number"}
              />
              <span style={{ color: "red" }}>{formik.errors.Mobile}</span>
              <br></br>
              <input
                value={formik.values.City}
                onChange={formik.handleChange}
                name="City"
                type={"text"}
              />
              <span style={{ color: "red" }}>{formik.errors.City}</span>
              <br></br>
              <input disabled={load} type={"submit"} value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
