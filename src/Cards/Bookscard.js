import React from "react";
import { Link } from "react-router-dom";

function Bookscard({ item, del }) {
  return (
    <tr>
      <td>{item.bookname}</td>
      <td>{item.authorname}</td>
      <td>{item.published}</td>
      <td>{item.available}</td>
      <td>
        <Link
          to={`/portal/viewbook/${item.id}`}
          className="btn btn-success btn-sm mr-2"
        >
          View
        </Link>
        <Link
          to={`/portal/editbook/${item.id}`}
          className="btn btn-primary btn-sm mr-2"
        >
          Edit
        </Link>
        <button
          onClick={() => del(item.id)}
          className="btn btn-danger btn-sm mr-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Bookscard;
