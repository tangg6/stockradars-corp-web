import CorpCard from "../components/CorpCard";
import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import "../App.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("th");

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

  return (
    <div className="container">
      <div className="toggle-button-group flex justify-end p-2">
        <ToggleButtonGroup color="primary">
          <ToggleButton onClick={setEN} sx={{ color: "white" }}>
            EN
          </ToggleButton>
          <ToggleButton onClick={setTH} sx={{ color: "white" }}>
            TH
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <CorpCard data={data} selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default HomePage;
