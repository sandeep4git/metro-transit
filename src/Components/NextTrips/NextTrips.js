import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchData } from "../../Service/service";
import { ROUTE_URL, STOP_URL, DIRECTION_URL, ROUTE_DETAIL_URL } from "../../Config/config";
import Departures  from "../Departures";
import ErrorBoundary from "../ErrorBoundary";
import ModalComponent from '../Modal'

export default function NextTrips() {
  const [routeList, setRouteList] = useState([]);
  const [direction, setDirection] = useState([]);
  const [stop, setStop] = useState();
  const [routeId, setRouteId] = useState();
  // const [placeCode, setPlaceCode] = useState();
  const [routeDetail, setRouteDetail] = useState();
  const [directionId, setDirectionId] = useState();
  const [error, setError] = useState(null);
  const [hideRoutesTable, setHideRoutesTable] = useState(true);
  const [selectedValue, setSelectedValue] = useState("Select");
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const getRouteList = async () => {
    try {
      const data = await fetchData(ROUTE_URL);
      setRouteList(data);
    } catch (err) {
      console.log("Inside catch block!", err);
      setError(err);
      console.log("Inside catch block!", error);
    }
  };

  const getDirection = async (route_id) => {
    try {
      const data = await fetchData(`${DIRECTION_URL}/${route_id}`);
      setDirection(data);
    } catch (err) {
      setError(err);
    }
  };
  const getStop = async (route_id, direction_id) => {
    try {
      const data = await fetchData(`${STOP_URL}/${route_id}/${direction_id}`);
      setStop(data);
    } catch (err) {
      setError(err);
    }
  };

  const getRouteDetails = async (route_id, direction_id, placeCode) => {
    try {
      const data = await fetchData(
        `${ROUTE_DETAIL_URL}/${route_id}/${direction_id}/${placeCode}`
      );
      setRouteDetail(data);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  useEffect(() => {
    getRouteList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRouteSelect = (e) => {
    setDirection([]);
    setSelectedValue(e.target.value);
    setRouteId(e.target.value);
    getDirection(e.target.value);
    setStop([]);
    setRouteDetail([]);
    setHideRoutesTable(true);
  };

  const handleDirectionSelect = (e) => {
    setStop([]);
    setDirectionId(e.target.value);
    getStop(routeId, e.target.value);
    setHideRoutesTable(true);
  };

  const handleStopSelect = (e) => {
    setHideRoutesTable(true);
    // setPlaceCode(e.target.value);
    getRouteDetails(routeId, directionId, e.target.value);
    setHideRoutesTable(false);
    setOpen(true);
  };
  return (
    <>
      <div className="mt-4 p-5">
        <p>Please select the below options to find your next trip</p>
        <div>
          <div>
            <select
              className="form-select"
              defaultValue="Select route"
              onChange={handleRouteSelect}
            >
              <option value="Select route" selected>
                Select route
              </option>
              {routeList?.map((item) => (
                <option key={item.id} value={item.route_id}>
                  {item.route_label}
                </option>
              ))}
            </select>
            <br />
            <br />
            {direction.length > 0 && (
              <select
                defaultValue={selectedValue}
                className="form-select"
                onChange={handleDirectionSelect}
                placeholder="Select Direction here"
              >
                <option selected>Select Direction</option>
                {direction?.map((item) => (
                  <option key={item.id} value={item.direction_id}>
                    {item.direction_name}
                  </option>
                ))}
              </select>
            )}
            <br />
            <br />
            {stop?.length > 0 && (
              <select
                className="form-select"
                defaultValue={selectedValue}
                onChange={handleStopSelect}
              >
                <option value="Select Stop" selected>
                  Select stop
                </option>
                {stop?.map((item) => (
                  <option key={item.id} value={item.place_code}>
                    {item.description}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
        <br />
        <ModalComponent isOpen={open} onClose={handleClose}>
          <>
            {routeDetail && !hideRoutesTable && (
              <ErrorBoundary>
                <Departures routeDetail={routeDetail} />
              </ErrorBoundary>
            )}
          </>
        </ModalComponent>
      </div>
    </>
  );
}
