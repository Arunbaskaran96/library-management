import React from "react";
import { Link } from "react-router-dom";

function Usercard({ item, del }) {
  return (
    <tr>
      <td>{item.Name}</td>
      <td>{item.Email}</td>
      <td>{item.Mobile}</td>
      <td>{item.City}</td>
      <td>
        <Link
          to={`/portal/viewuser/${item.id}`}
          className="btn btn-success btn-sm mr-1"
        >
          View
        </Link>
        <Link
          to={`/portal/edituser/${item.id}`}
          className="btn btn-primary btn-sm mr-1"
        >
          Edit
        </Link>
        <button
          onClick={() => del(item.id)}
          className="btn btn-danger btn-sm mr-1"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Usercard;
