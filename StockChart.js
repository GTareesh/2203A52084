import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';

const StockChart = ({ stockData, stockName }) => {
  const chartData = {
    labels: stockData.map((_, i) => i),
    datasets: [
      {
        label: stockName,
        data: stockData,
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'lightblue',
      },
    ],
  };

  return (
    <Card style={{ marginTop: 20 }}>
      <CardContent>
        <Typography variant="h6">{stockName}</Typography>
        <Line data={chartData} />
      </CardContent>
    </Card>
  );
};

export default StockChart;