import React from "react";

const Departures = ({ routeDetail }) => {
  return (
    <>
      <div className="card">
        {routeDetail && (
          <div className="card-body">
            <p>Stop #: {routeDetail?.stops?.[0]?.stop_id}</p>
            <p> {routeDetail?.stops?.[0]?.description}</p>
          </div>
        )}
        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>Route</th>
                <th>Destination</th>
                <th>Departs</th>
              </tr>
            </thead>
            <tbody>
              {routeDetail?.departures?.length > 0 ? (
                routeDetail?.departures?.map((item) => (
                  <tr key={item.route_short_name}>
                    <td className={`badge bg-secondary`}>
                      {item.route_short_name}
                    </td>
                    <td>{item.description}</td>
                    <td>{item.departure_text}</td>
                  </tr>
                ))
              ) : (
                <td>No departures at this time</td>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Departures;
