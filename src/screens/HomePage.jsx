import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CorpCard from "../components/CorpCard";
import CorpTable from "../components/CorpTable";
import "../App.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("th");
  const [displayType, setDisplayType] = useState("card");

  useEffect(() => {
    fetch("https://stockradars.co/assignment/data.php")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const setTH = () => {
    setSelectedLanguage("th");
  };

  const setEN = () => {
    setSelectedLanguage("en");
  };

  const handleDisplayTypeChange = (event, newDisplayType) => {
    setDisplayType(newDisplayType);
  };

  return (
    <div className="container">
      <div className="toggle-button-group flex justify-end p-2 mt-4">
        <ToggleButtonGroup color="primary">
          <ToggleButton onClick={setEN} sx={{ color: "white" }}>
            EN
          </ToggleButton>
          <ToggleButton onClick={setTH} sx={{ color: "white" }}>
            TH
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className="display-toggle-container">
        <ToggleButtonGroup
          value={displayType}
          exclusive
          onChange={handleDisplayTypeChange}
          className="display-toggle-buttons"
        >
          <ToggleButton value="card">Card</ToggleButton>
          <ToggleButton value="table">Table</ToggleButton>
        </ToggleButtonGroup>
      </div>

      {displayType === "card" ? (
        <CorpCard data={data} selectedLanguage={selectedLanguage} />
      ) : (
        <CorpTable data={data} selectedLanguage={selectedLanguage} />
      )}
    </div>
  );
};

export default HomePage;
