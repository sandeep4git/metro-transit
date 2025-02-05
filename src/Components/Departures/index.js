import React from "react";

const Departures = ({ routeDetail }) => {
  return (
    <>
      <div data-testid="modalbox" className="card">
        <div className="card-body">
          <p>Stop #: {routeDetail?.stops?.[0]?.stop_id}</p>
          <p> {routeDetail?.stops?.[0]?.description}</p>
        </div>
        <div className="card-body">
          <table>
            <thead>
              <tr key="table-header">
                <th>Route</th>
                <th>Destination</th>
                <th>Departs</th>
              </tr>
            </thead>
            {routeDetail?.departures?.length > 0 && (
              routeDetail?.departures?.map((item) => (
                <tbody>
                  <tr key={item.route_short_name}>
                    <td className={`badge bg-secondary`}>
                      {item.route_short_name}
                    </td>
                    <td>{item.description}</td>
                    <td>{item.departure_text}</td>
                  </tr>
                </tbody>
              ))
            )} 
            </table> 
            {routeDetail?.departures?.length === 0 && (
                <p>No departures at this time</p>
            )}   
        </div>
      </div>
    </>
  );
};

export default Departures;
