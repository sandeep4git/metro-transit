import "@testing-library/jest-dom";
import React from "react";
import {
  render,
  screen,
  waitFor,
  fireEvent
} from "@testing-library/react";
import NextTrips from "./NextTrips";
import { fetchData } from "../../Service/service";
jest.mock("../../Service/service");

describe("Test NextTrips component", () => {
  it("React Testing Library works!", () => {
    render(<NextTrips />);
    expect(
      screen.getByText(
        /Please select the below options to find your next trip/i
      )
    ).toBeInTheDocument();
  });

  it("Verify that the drop down to chose routes is filled with data from API", async () => {
    fetchData.mockResolvedValue([
      {
        route_id: "901",
        agency_id: 0,
        route_label: "METRO Blue Line",
      },
    ]);
    render(<NextTrips />);
    const selectedValue = screen.getByTestId("select-1");
    fireEvent.click(selectedValue);
    await screen.findByText(/METRO/);
    expect(screen.getByText(/Select route/)).toBeInTheDocument();
    expect(screen.getByText(/METRO/)).toBeInTheDocument();
  });

  it("fetches and displays directions after selecting a route", async () => {
    const mockRoutes = [
      {
        route_id: "901",
        agency_id: 0,
        route_label: "METRO Blue Line",
      },
    ];

    const mockDirections = [
      {
        direction_id: 0,
        direction_name: "Northbound",
      },
      {
        direction_id: 1,
        direction_name: "Southbound",
      },
    ];

    // const handleDirectionSelect = jest.fn(); // Mock the handler

    fetchData
      .mockResolvedValueOnce(mockRoutes)
      .mockResolvedValueOnce(mockDirections); // Return directions when route is selected

    render(<NextTrips />);

    // Select a route from the dropdown
    fireEvent.change(screen.getByTestId("select-1"), { target: { value: 1 } });
    await waitFor(() => screen.findByText(/Northbound/));

    // Ensure that directions are displayed after route selection
    expect(screen.getByText("Southbound")).toBeInTheDocument();
  });

  it("fetches and displays stops after selecting the direction", async () => {
    const mockRoutes = [
      {
        route_id: "901",
        agency_id: 0,
        route_label: "METRO Blue Line",
      },
    ];

    const mockDirections = [
      {
        direction_id: 0,
        direction_name: "Northbound",
      },
      {
        direction_id: 1,
        direction_name: "Southbound",
      },
    ];
    const mockStops = [
      {
        place_code: "MAAM",
        description: "Mall of America Station",
      },
      {
        place_code: "30AV",
        description: "30th Ave Station",
      },
      {
        place_code: "BLCT",
        description: "Bloomington Central Station",
      },
    ];

    fetchData
      .mockResolvedValueOnce(mockRoutes)
      .mockResolvedValueOnce(mockDirections)
      .mockResolvedValueOnce(mockStops); // Return directions when route is selected

    render(<NextTrips />);

    // Select a route from the dropdown
    fireEvent.change(screen.getByTestId("select-1"), {
      target: { value: "901" },
    });
    await waitFor(() => screen.findByText(/METRO/));

    // Ensure that directions are displayed after route selection
    expect(screen.getByText("Southbound")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("select-2"), { target: { value: 1 } });

    // Ensure that stops are displayed after direction selection
    await waitFor(() => screen.findByText("Select stop"));
    expect(screen.getByText("30th Ave Station")).toBeInTheDocument();
  });
  it("fetches and displays directions after selecting a selecting the stop", async () => {
    const mockRoutes = [
      {
        route_id: "901",
        agency_id: 0,
        route_label: "METRO Blue Line",
      },
    ];

    const mockDirections = [
      {
        direction_id: 0,
        direction_name: "Northbound",
      },
      {
        direction_id: 1,
        direction_name: "Southbound",
      },
    ];
    const mockStops = [
      {
        place_code: "MAAM",
        description: "Mall of America Station",
      },
      {
        place_code: "30AV",
        description: "30th Ave Station",
      },
      {
        place_code: "BLCT",
        description: "Bloomington Central Station",
      },
    ];
    const mockRouteDetail = [
      {
        place_code: "MAAM",
        description: "Mall of America Station",
      },
    ];
    fetchData
      .mockResolvedValueOnce(mockRoutes)
      .mockResolvedValueOnce(mockDirections)
      .mockResolvedValueOnce(mockStops)
      .mockResolvedValueOnce(mockRouteDetail); // Return directions when route is selected

    render(<NextTrips />);
    // Select a route from the dropdown
    fireEvent.change(screen.getByTestId("select-1"), {
      target: { value: "901" },
    });
    await waitFor(() => screen.findByText(/METRO/));

    // Ensure that directions are displayed after route selection
    expect(screen.getByText("Southbound")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("select-2"), { target: { value: 1 } });

    // Ensure that stops are displayed after direction selection
    await waitFor(() => screen.findByText("Select stop"));
    expect(screen.getByText("30th Ave Station")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("select-3"), { target: { value: "30th Ave Station" } });
    await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });
   
  });
});

