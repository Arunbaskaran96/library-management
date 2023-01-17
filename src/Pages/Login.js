import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./pages.css";

function Login() {
  const user = useRef(null);

  useEffect(() => {
    user.current.focus();
  }, []);

  return (
    <div className="login">
      <div className="login-div">
        <label className="labels">Email</label>
        <br />
        <input className="inputs" ref={user} type="text" />
        <br />
        <label className="labels">Password</label>
        <br />
        <input className="inputs" type="password" />
        <br />
        <Link to="/portal/home" className=" btn btn-primary mt-3">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Login;
