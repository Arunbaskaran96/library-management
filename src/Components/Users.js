import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Usercard from "../Cards/Usercard";

function Users() {
  const [users, setUsers] = useState([]);
  const [load, setload] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const items = await axios.get(
        "https://63932e42ab513e12c5061a40.mockapi.io/users"
      );
      setUsers(items.data);
      setload(false);
    } catch (error) {
      console.log(error);
    }
  };

  const del = async (id) => {
    try {
      alert("Do you want to delete?");
      await axios.delete(
        `https://63932e42ab513e12c5061a40.mockapi.io/users/${id}`
      );
      getData();
    } catch (error) {}
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
        <Link to="/portal/createuser" className="btn btn-success btn-sm">
          Create User
        </Link>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((item) => {
                return <Usercard del={del} item={item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Users;
