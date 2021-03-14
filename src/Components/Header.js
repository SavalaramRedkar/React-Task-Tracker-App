import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Task Tracker
        </Link>
        <form className="d-flex">
          <Link className="btn btn-outline-success" to="/addtask">
            Add Task
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Header;
