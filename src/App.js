import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./sb-admin-2.min.css";

import Users from "./Components/Users";
import Books from "./Components/Books";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portal from "./Pages/Portal";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import CreateUser from "./Users/CreateUser";
import ViewUser from "./Users/ViewUser";
import EditUser from "./Users/EditUser";
import Createbook from "./Books/Createbook";
import Bookview from "./Books/Bookview";
import Editbook from "./Books/Editbook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/portal" element={<Portal />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="books" element={<Books />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="createuser" element={<CreateUser />}></Route>
          <Route path="viewuser/:id" element={<ViewUser />}></Route>
          <Route path="edituser/:id" element={<EditUser />}></Route>
          <Route path="createbook" element={<Createbook />}></Route>
          <Route path="editbook/:id" element={<Editbook />}></Route>
          <Route path="viewbook/:id" element={<Bookview />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
