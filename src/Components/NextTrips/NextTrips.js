import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchData } from "../../Service/service";
import {
  ROUTE_URL,
  STOP_URL,
  DIRECTION_URL,
  ROUTE_DETAIL_URL,
} from "../../Config/config";
import Departures from "../Departures";
import ErrorBoundary from "../ErrorBoundary";
import ModalComponent from "../Modal";

const NextTrips = () => {
  const [routeList, setRouteList] = useState([]);
  const [direction, setDirection] = useState([]);
  const [stop, setStop] = useState([]);
  const [routeDetail, setRouteDetail] = useState(null);
  const [selectedRouteId, setSelectedRouteId] = useState(null);
  const [selectedDirectionId, setSelectedDirectionId] = useState(null);
  const [selectedStopPlaceCode, setSelectedStopPlaceCode] = useState(null);
  const [error, setError] = useState(null);
  const [hideRoutesTable, setHideRoutesTable] = useState(true);
  const [open, setOpen] = useState(false);

  // Modal close handler
  const handleClose = () => setOpen(false);

  // Fetch route list from API
  const getRouteList = async () => {
    try {
      const data = await fetchData(ROUTE_URL);
      setRouteList(data);
    } catch (err) {
      console.error("Error fetching routes:", error);
      setError(err);
    }
  };

  // Fetch directions for selected route
  const getDirection = async (routeId) => {
    try {
      const data = await fetchData(`${DIRECTION_URL}/${routeId}`);
      setDirection(data);
    } catch (err) {
      setError(err);
    }
  };

  // Fetch stops for selected route and direction
  const getStop = async (routeId, directionId) => {
    try {
      const data = await fetchData(`${STOP_URL}/${routeId}/${directionId}`);
      setStop(data);
    } catch (err) {
      setError(err);
    }
  };

  // Fetch route details for selected stop
  const getRouteDetails = async (routeId, directionId, placeCode) => {
    try {
      const data = await fetchData(`${ROUTE_DETAIL_URL}/${routeId}/${directionId}/${placeCode}`);
      setRouteDetail(data);
    } catch (err) {
      setError(err);
    }
  };

  // Fetch initial route list on component mount
  useEffect(() => {
    getRouteList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handler for route selection
  const handleRouteSelect = (e) => {
    const routeId = e.target.value;
    setSelectedRouteId(routeId);
    setDirection([]);
    setStop([]);
    setRouteDetail(null);
    setHideRoutesTable(true);
    getDirection(routeId);
  };

  // Handler for direction selection
  const handleDirectionSelect = (e) => {
    const directionId = e.target.value;
    setSelectedDirectionId(directionId);
    setStop([]);
    setRouteDetail(null);
    setHideRoutesTable(true);
    getStop(selectedRouteId, directionId);
  };

  // Handler for stop selection
  const handleStopSelect = (e) => {
    const placeCode = e.target.value;
    setSelectedStopPlaceCode(placeCode);
    setHideRoutesTable(false);
    setOpen(true);
    getRouteDetails(selectedRouteId, selectedDirectionId, placeCode);
  };

  return (
    <>
      <div className="mt-2 p-5">
        <h2><span className="badge bg-secondary">Next Trips</span></h2>
        <p>Please select the below options to find your next trip</p>
        <div>
          {/* Route Selection */}
          <select
            data-testid="select-1"
            className="form-select"
            value={selectedRouteId || "Select route"}
            onChange={handleRouteSelect}
          >
            <option value="Select route">Select route</option>
            {routeList?.map((item) => (
              <option key={item.id} value={item.route_id}>
                {item.route_label}
              </option>
            ))}
          </select>
          <br />
          <br />

          {/* Direction Selection */}
          {direction.length > 0 && (
            <select
              data-testid="select-2"
              value={selectedDirectionId || "Select Direction"}
              className="form-select"
              onChange={handleDirectionSelect}
            >
              <option value="Select Direction">Select Direction</option>
              {direction?.map((item) => (
                <option key={item.id} value={item.direction_id}>
                  {item.direction_name}
                </option>
              ))}
            </select>
          )}
          <br />
          <br />

          {/* Stop Selection */}
          {stop.length > 0 && (
            <select
              data-testid="select-3"
              value={selectedStopPlaceCode || "Select Stop"}
              className="form-select"
              onChange={handleStopSelect}
            >
              <option value="Select Stop">Select stop</option>
              {stop?.map((item) => (
                <option key={item.id} value={item.place_code}>
                  {item.description}
                </option>
              ))}
            </select>
          )}
        </div>

        <br />

        {/* Modal to display route details */}
        <ModalComponent isOpen={open} onClose={handleClose}>
          <ErrorBoundary>
            {routeDetail && !hideRoutesTable && <Departures routeDetail={routeDetail} />}
          </ErrorBoundary>
        </ModalComponent>
      </div>
    </>
  );
};

export default NextTrips;
