import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { backend } from 'declarations/backend';

const StyledCard = styled(Card)(({ theme }) => ({
  width: 300,
  backgroundColor: theme.palette.background.paper,
  borderRadius: 8,
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(255, 255, 255, 0.2)',
  },
}));

const CryptoIcon = styled('div')({
  width: 50,
  height: 50,
  borderRadius: '50%',
  backgroundColor: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto 16px',
  '& svg': {
    width: 30,
    height: 30,
  },
});

interface CryptoBlock {
  name: string;
  symbol: string;
  price: bigint;
  change24h: bigint;
}

function App() {
  const [cryptoData, setCryptoData] = useState<CryptoBlock | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await backend.getCryptoBlock();
        setCryptoData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (!cryptoData) {
    return <Typography>No data available</Typography>;
  }

  return (
    <StyledCard>
      <CardContent>
        <CryptoIcon>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
          </svg>
        </CryptoIcon>
        <Typography variant="h5" component="div" gutterBottom>
          {cryptoData.name} ({cryptoData.symbol})
        </Typography>
        <Typography variant="h4" component="div" gutterBottom>
          ${Number(cryptoData.price).toLocaleString()}
        </Typography>
        <Typography
          variant="body2"
          color={Number(cryptoData.change24h) >= 0 ? 'success.main' : 'error.main'}
        >
          {Number(cryptoData.change24h) >= 0 ? '+' : ''}{Number(cryptoData.change24h)}%
        </Typography>
      </CardContent>
    </StyledCard>
  );
}

export default App;