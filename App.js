import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import { getStocks, getStockPrices } from './utils/api';
import StockChart from './components/StockChart';
import CorrelationHeatmap from './components/CorrelationHeatmap';

const App = () => {
  const [stocksList, setStocksList] = useState([]);
  const [stockData, setStockData] = useState({});
  const [loading, setLoading] = useState(true);
  const minutes = 50;

  useEffect(() => {
    const fetchData = async () => {
      const stocks = await getStocks();
      setStocksList(stocks);

      const data = {};
      for (const stock of stocks.slice(0, 5)) {
        const res = await getStockPrices(stock.ticker, minutes);
        // Simulate historical data from a single price
        data[stock.ticker] = Array.from({ length: minutes }, () => res.price + (Math.random() * 10 - 5));
      }

      setStockData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Stock Price Aggregator</Typography>
      {Object.entries(stockData).map(([ticker, prices]) => (
        <StockChart key={ticker} stockData={prices} stockName={ticker} />
      ))}
      <CorrelationHeatmap data={stockData} />
    </Container>
  );
};

export default App;