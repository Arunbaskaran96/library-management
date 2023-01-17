import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bookscard from "../Cards/Bookscard";

function Books() {
  const [books, setBooks] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const book = await axios.get(
        "https://63932e42ab513e12c5061a40.mockapi.io/Product"
      );
      setBooks(book.data);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  const del = async (id) => {
    try {
      alert("Do you want to delete?");
      await axios.delete(
        `https://63932e42ab513e12c5061a40.mockapi.io/Product/${id}`
      );
      getBooks();
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
        <Link className="btn btn-primary " to="/portal/createbook">
          Create
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
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Published Year</th>
                <th>Available</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {books.map((item) => {
                return <Bookscard del={del} item={item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Books;
