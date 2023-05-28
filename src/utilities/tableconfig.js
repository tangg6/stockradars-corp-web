export const tableColumns = (selectedLanguage) => [
  { field: "N_name", headerName: "Name", width: 150 },
  {
    field: selectedLanguage === "th" ? "N_COMPANY_T" : "N_COMPANY_E",
    headerName: "Company",
    width: 350,
  },
  { field: "marketcap", headerName: "Market Cap", width: 150 },
  { field: "F_TYPE", headerName: "Type", width: 80 },

  { field: "N_URL", headerName: "URL", width: 200 },
];
