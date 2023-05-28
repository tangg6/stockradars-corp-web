import React, { useState } from "react";
import { Box, Card } from "@mui/material";
import "../styles/CorpCard.css"; 

const CorpCard = ({ data, selectedLanguage }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    if (selectedItem === item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <Box>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {data.map((item, index) => (
          <div key={index}>
            <Card
              variant="outlined"
              className={`p-4 max-w-sm mx-auto ${selectedItem === item ? "expanded" : ""}`}
            >
              <h2 className="text-xl font-bold mb-2">{item.N_name}</h2>
              {/* Shown Detail */}
              <div>
                <p className="text-sm mb-1">
                  {selectedLanguage === "th"
                    ? item.N_COMPANY_T
                    : item.N_COMPANY_E}
                </p>
                <p className="text-sm mb-1 text-gray-600">Market Cap. {item.marketcap}</p>
              </div>
              {/* Hidden Detail */}
              {selectedItem === item && (
                <div>
                  <p className="text-sm mb-1">
                    {selectedLanguage === "th"
                      ? item.N_BUSINESS_TYPE_T
                      : item.N_BUSINESS_TYPE_E}
                  </p>
                  <a href={item.N_URL} className="text-sm mb-1 text-blue-500">
                    {item.N_URL}
                  </a>
                </div>
              )}
              <button onClick={() => handleClick(item)} className="w-full text-center">
                <p style={{ fontSize: "10px" }} className="text-gray-500">
                  {selectedItem === item ? "..." : `${selectedLanguage === "th" ? "เพิ่มเติม..." : "More..."}` }
                </p>
              </button>
            </Card>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CorpCard;
