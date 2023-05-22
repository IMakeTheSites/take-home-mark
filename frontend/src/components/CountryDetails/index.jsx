import React, { useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import CountryForm from "./CountryForm";
import CountryTable from "./CountryTable";
import LoadingIndicator from "../common/LoadingIndicator";

const apiUrl = process.env.REACT_APP_API_URL ?? "http://localhost:5000";

const Country = () => {
  const [countryCode, setCountryCode] = useState("");
  const [countryDetails, setCountryDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!countryCode) return;

    setIsLoading(true);
    try {
      const { data } = await axios.get(`${apiUrl}/country/${countryCode}`);

      setCountryDetails(data);
    } catch (error) {
      console.error("Error retrieving country details:", error);
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <CountryForm
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        handleSubmit={handleSubmit}
      />
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <CountryTable countryDetails={countryDetails} />
      )}
    </Container>
  );
};

export default Country;
