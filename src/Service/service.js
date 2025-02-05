import axios from "axios";
export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // console.error(error);
    if (error.response) {
      throw new Error(
        `API Error: ${error.response.status} - ${error.response.data}`
      );
    } else if (error.request) {
      throw new Error("Network Error: Could not reach the API");
    } else {
      throw new Error(`Unexpected Error: ${error.message}`);
    }
  }
};
