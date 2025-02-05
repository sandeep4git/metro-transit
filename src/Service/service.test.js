import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchData } from "./service"; // Import the fetchData function

// Create an instance of axios-mock-adapter to mock axios requests
const mock = new MockAdapter(axios);

describe("fetchData", () => {
  afterEach(() => {
    mock.reset(); // Reset the mock adapter after each test
  });

  it("should return data when the API call is successful", async () => {
    // Mock successful response from the API
    const mockData = [
      {
        route_id: "901",
        agency_id: 0,
        route_label: "METRO Blue Line",
      },
    ];
    mock
      .onGet("https://svc.metrotransit.org/nextripv2/routes")
      .reply(200, mockData);

    const result = await fetchData(
      "https://svc.metrotransit.org/nextripv2/routes"
    );

    // Check if the function returns the correct data
    expect(result).toEqual(mockData);
  });

  it("should throw an error when the API responds with an error", async () => {
    // Mock an error response with status 404
    mock
      .onGet("https://svc.metrotransit.org/nextripv2/route")
      .reply(404, "Request failed with status code 404");

    // Check if the function throws the correct error message
    await expect(
      fetchData("https://svc.metrotransit.org/nextripv2/route")
    ).rejects.toThrowError(
      "API Error: 404 - Request failed with status code 404"
    );
  });

  it("should throw an unexpected error when something goes wrong during the request setup", async () => {
    // Simulate an unexpected error during request setup (e.g., invalid URL)
    const errorMessage = "Unexpected error during request setup";
    mock.onGet("https://svc.metrotransit.org/nextripv2/route").reply(() => {
      throw new Error(errorMessage);
    });

    // Check if the function throws the correct error message
    await expect(
      fetchData("https://svc.metrotransit.org/nextripv2/route")
    ).rejects.toThrowError(`Unexpected Error: ${errorMessage}`);
  });
});
