import React from "react";
import "../../Styles/styles.css";
import "./index.css"
// import logo from "../../logo.svg";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Home = () => {
  return (
    <>
      <div className="container-fluid bg-light p-5">
        <h1 className="display-4">Welcome to Metro Transit App!</h1>
        <p className="lead">
         
        </p>
        <hr className="my-4" />
      </div>
      <div className="p-3">
      <h2><span className="badge bg-secondary">How to Ride.</span></h2>
        <ul>
          <li>
          <h4>Bus <i className="bi bi-bus-front"></i></h4>
          <p>Buses are the backbone of the Metro Transit system, providing 52 million rides annually on local, express and suburban routes. Learn how to ride these convenient routes right in your neighborhood, many with built-in transit advantages.</p>
          </li>
          <li>
          <h4>METRO <button className="btn btn-primary"> <i className="bi bi-train-front"></i></button> <button className="btn btn-success"> <i className="bi bi-train-front"></i></button> <button className="btn btn-warning"> <i className="bi bi-train-front"></i></button> <button className="btn btn-danger"> <i className="bi bi-train-front"></i></button></h4>
          <p>The METRO network offers fast, frequent, all-day service, with light rail trains on the Blue and Green lines and bus rapid transit service on the Orange, Red, A, C, and D lines. Pay before you board these lines that stop less often to keep you moving more.</p>
          </li>
          <li>
          <h4>Northstar <i className="bi bi-train-lightrail-front"></i></h4>
          <p>Northstar Commuter Rail service operates mainly during rush hours with two trips each direction each weekday; there is no weekend service. Northstar trains have onboard restrooms, work tables, power outlets and free Wi-Fi.</p>
          </li>
          <li>
          <h4>Easy to pay <i className="bi bi-currency-exchange"></i></h4>
          <p>On local buses, pay as you board with cash (exact fare only), the Metro Transit app or Go-To Cards. On METRO lines, buy a ticket from the machine on the platform with cash, credit or debit cards – just remember to pay before boarding. While onboard, be ready to show your proof of payment: your ticket or the Metro Transit app.</p>
          </li>
          <li>
          <h4> Bring your bike! <i className="bi bi-bicycle"></i></h4>
          <p>All Metro Transit buses and trains have free bike racks so you can pedal for part of your trip and ride for the rest. Each bus accommodates two bikes; there’s room for four bikes in every METRO rail.</p>
          </li>
          <li>
          <h4> Become a registered carpooler <i className="bi bi-car-front"></i></h4>
          <p>
          Carpoolers save on gas and use the MnPass lanes on I-394, I-35W and I-35E for free! Save yourself time and money by doubling up with a fellow commuter. It’s easy and secure to create a profile and search our database of others looking to share the ride.
          </p>
          </li>
          <li>
          <h4> Follow the code of conduct <i className="bi bi-person-arms-up"></i></h4>
          <p>
          Our code of conduct applies to all customers.
          </p>
          </li>
        </ul>
      </div>
      {/* <div className="flex-container">
        <div>
          <div className="card">
            <img src={logo} className="card-img-top" alt="Logo" />
            <div className="card-body">
              <p className="card-text">
              Some quick example text
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={logo} className="card-img-top" alt="Logo" />
            <div className="card-body">
              <p className="card-text">
                Some placeholder data
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={logo} className="card-img-top" alt="Logo" />
            <div className="card-body">
              <p className="card-text">
                Some quick text
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
