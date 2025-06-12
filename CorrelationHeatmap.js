import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { pearsonCorrelation } from '../utils/stats';

const CorrelationHeatmap = ({ data }) => {
  const tickers = Object.keys(data);
  const matrix = tickers.map(row =>
    tickers.map(col => {
      if (row === col) return 1;
      return pearsonCorrelation(data[row], data[col]);
    })
  );

  return (
    <Card style={{ marginTop: 20 }}>
      <CardContent>
        <Typography variant="h6">Correlation Heatmap</Typography>
        <table border="1" style={{ width: '100%', textAlign: 'center' }}>
          <thead>
            <tr>
              <th></th>
              {tickers.map(t => <th key={t}>{t}</th>)}
            </tr>
          </thead>
          <tbody>
            {tickers.map((t, i) => (
              <tr key={t}>
                <td>{t}</td>
                {matrix[i].map((val, j) => (
                  <td key={j} style={{ background: `rgba(255,0,0,${Math.abs(val)})` }}>
                    {val.toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default CorrelationHeatmap;