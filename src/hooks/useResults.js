import { useEffect, useState } from "react";
import yelp from "../api/yelp";


export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

  // Call searchApi when component
  // is first rendered
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
