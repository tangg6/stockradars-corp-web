import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export default function CorpCard({ data }) {
  return (
    <Box>
      <div className="grid grid-cols-3 gap-16">
        {data.map((item, index) => (
          <div key={index}>
            <Card variant="outlined" className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.N_name}</h2>
              <p className="text-sm mb-1">{item.N_fullname}</p>
              <p className="text-sm mb-1">{item.N_shortname}</p>
              <p className="text-sm mb-1">{item.marketcap}</p>
              <p className="text-sm mb-1">{item.N_COMPANY_T}</p>
              <p className="text-sm mb-1">{item.N_COMPANY_E}</p>
              <p className="text-sm mb-1">{item.F_TYPE}</p>
              <p className="text-sm mb-1">{item.N_BUSINESS_TYPE_E}</p>
              <p className="text-sm mb-1">{item.N_BUSINESS_TYPE_T}</p>
              <p className="text-sm mb-1">{item.N_URL}</p>
            </Card>
          </div>
        ))}
      </div>
    </Box>
  );
}
