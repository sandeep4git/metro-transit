import React from "react";
import { Link } from "react-router-dom";
// import "./styles.css";
const NavBar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid navbar-brand">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 16 16"
            >
              <title>circle-red-white-t</title>
              <path
                fill="#ed1b2e"
                d="M8.001 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8v0c-0.001-4.418-3.582-7.999-8-8h-0z"
              ></path>
              <path
                fill="#fff"
                d="M13.501 6.911h-4.071v6.962h-2.922v-6.962h-4.195v-2.921h11.189v2.921z"
              ></path>
            </svg>
            <h4>Metro Transit</h4>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NextTrips">
                  Next Trips
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Schedule
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};

export default NavBar;
