import React from "react";
import { render, screen } from "@testing-library/react";
import Departures from "./index"; // Adjust the import path as needed
import "@testing-library/jest-dom"; // For extra matchers like toBeInTheDocument

describe("Departures Component", () => {
  
  // Test when routeDetail is provided and contains departure data
  it("renders route details and departures when routeDetail is provided", () => {
    const routeDetail = {
      stops: [
        {
          stop_id: "123",
          description: "Main Street Station",
        },
      ],
      departures: [
        {
          route_short_name: "101",
          description: "Downtown",
          departure_text: "10:30 AM",
        },
        {
          route_short_name: "102",
          description: "Uptown",
          departure_text: "11:00 AM",
        },
      ],
    };

    render(<Departures routeDetail={routeDetail} />);
    expect(screen.getByText("Stop #: 123")).toBeInTheDocument();
    expect(screen.getByText("Main Street Station")).toBeInTheDocument();
    expect(screen.getByText("101")).toBeInTheDocument(); 
    expect(screen.getByText("Downtown")).toBeInTheDocument();
    expect(screen.getByText("10:30 AM")).toBeInTheDocument();
    expect(screen.getByText("102")).toBeInTheDocument();
    expect(screen.getByText("Uptown")).toBeInTheDocument(); 
    expect(screen.getByText("11:00 AM")).toBeInTheDocument();
  });

  // Test when routeDetail is provided but no departures are available
  it("renders 'No departures at this time' when there are no departures", () => {
    const routeDetail = {
      stops: [
        {
          stop_id: "123",
          description: "Main Street Station",
        },
      ],
      departures: [],
    };
    render(<Departures routeDetail={routeDetail} />);
    expect(screen.getByText("No departures at this time")).toBeInTheDocument();
  });

  // Test when routeDetail is provided but without stops or departures
  it("renders an empty state when routeDetail contains no stops or departures", () => {
    const routeDetail = {
      stops: [],
      departures: [],
    };

    render(<Departures routeDetail={routeDetail} />);
    expect(screen.getByText("No departures at this time")).toBeInTheDocument();
  });
});
