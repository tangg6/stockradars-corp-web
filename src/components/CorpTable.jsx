import React from "react";

const CorpTable = ({ data, selectedLanguage }) => {
  return (
    <table className="corp-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Full Name</th>
          <th>Short Name</th>
          <th>Market Cap</th>
          <th>Type</th>
          <th>Business Type</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.N_name}</td>
            <td>
              {selectedLanguage === "th" ? item.N_COMPANY_T : item.N_COMPANY_E}
            </td>
            <td>{item.N_fullname}</td>
            <td>{item.N_shortname}</td>
            <td>{item.marketcap}</td>
            <td>{item.F_TYPE}</td>
            <td>
              {selectedLanguage === "th"
                ? item.N_BUSINESS_TYPE_T
                : item.N_BUSINESS_TYPE_E}
            </td>
            <td>
              <a href={item.N_URL}>{item.N_URL}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CorpTable;
