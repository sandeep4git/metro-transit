import React from "react";
import "../../Styles/styles.css";
import logo from "../../logo.svg";

export const Home = () => {
  return (
    <>
      <div className="container-fluid bg-light p-5">
        <h1 className="display-4">Welcome to Metro Trasnit App!</h1>
        <p className="lead">
          This is a jumbotron created using the bootstrap 5
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </div>
      <div class="flex-container">
        <div>
          <div class="card">
            <img src={logo} class="card-img-top" alt="Logo" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <img src={logo} class="card-img-top" alt="Logo" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <img src={logo} class="card-img-top" alt="Logo" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
