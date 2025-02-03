import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
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
            Metro Transit
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nextTrips">
                  Next Trips
                </Link>
              </li>
              {/* <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" aria-disabled="true">
                  How to Ride
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
