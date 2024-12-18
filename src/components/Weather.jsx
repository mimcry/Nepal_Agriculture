import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Grid,
  Box,
  Autocomplete,
  Container,
  TextField,
  Button,
} from '@mui/material';
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from 'react-icons/wi';
import { FaTemperatureHigh, FaWind, FaTint } from 'react-icons/fa';

import toast from 'react-hot-toast';
// Utility functions
function getDayName(dateString) {
  const date = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  } else {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }
}

function formatTime(dateString) {
  return new Date(dateString).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}
const nepaliCities = [
  'Kathmandu',
  'Pokhara',
  'Lalitpur',
  'Bhaktapur',
  'Biratnagar',
  'Butwal',
  'Dhangadhi',
  'Hetauda',
  'Nepalgunj',
  'Janakpur',
  'Ithari',
  'Bharatpur',
  'Chitwan',
  'Dhankuta',
  'Lumbini',
  'Birendranagar',
  'Rupandehi',
  'Sunsari',
  'Baglung',
  'Dang',
  'Kohalpur',
  'Ghorahi',
  'Tulsipur',
  'Damauli',
  'Kanchanpur',
  'Morang',
  'Kavre',
  'Sindhupalchok',
  'Nawalparasi',
  'Rolpa',
  'Ramechhap',
  'Bajura',
  'Solukhumbu',
  'Kaski',
  'Rasuwa',
  'Baitadi',
  'Mugu',
  'Syangja',
  'Gulmi',
  'Makwanpur',
  'Parbat',
  'Sindhuli',
  'Tanahu',
  'Pyuthan',
  'Parsa',
  'Saptari',
  'Siraha',
  'Mahottari',
  'Kailali',
  'Achham',
  'Doti',
  'Bajhang',
  'Taplejung',
  'Ilam',
  'Okhaldhunga',
  'Arghakhanchi',
  'Chandranigahapur',
  'Kalikot',
  'Surkhet',
  'Salyan',
  'Jajarkot',
  'Dailekh',
  'Dolpa',
  'Dhulikhel',
  'Sallaghari',
  'Banepa',
  'Panauti',
  'Melamchi',
  'Chautara',
  'Barhabise',
  'Tatopani',
  'Thimi',
  'Suryabinayak',
  'Nala',
  'Chyamasingh',
  'Bungamati',
  'Godavari',
  'Sunakothi',
  'Tikathali',
  'Harisiddhi',
  'Lekhnath',
  'Hemja',
  'Sarangkot',
  'Batulechaur',
  'Ratnanagar',
  'Narayangarh',
  'Sauraha',
  'Madi',
  'Dharan',
  'Duhabi',
  'Inaruwa',
  'Ramdhuni',
  'Siddharthanagar',
  'Devdaha',
  'Tilottama',
  'Lamahi',
  'Narayanpur',
  'Belbari',
  'Urlabari',
  'Letang',
  'Pathari',
  'Kawasoti',
  'Gaindakot',
  'Parasi',
  'Bardaghat',
  'Sunwal',
  'Bhainse',
  'Palung',
  'Manahari',
  'Thaha',
  'Hile',
  'Pakhribas',
  'Bhedetar',
  'Leguwa',
  'Salleri',
  'Namche Bazaar',
  'Lukla',
  'Khumjung',
  'Jiri',
  'Fung',
];
const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [hourlyWeatherData, setHourlyWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Dhulikhel');
  const weatherApiUrl = 'http://localhost:8000/weather';

  const weatherIcons = {
    Clear: <WiDaySunny />,
    Clouds: <WiCloudy />,
    Rain: <WiRain />,
    Storm: <WiThunderstorm />,
    Snow: <WiSnow />,
    Fog: <WiFog />,
  };

  useEffect(() => {
    if (!city) return;
    setLoading(true);
    setError(null);

    axios
      .get(`${weatherApiUrl}?city=${city}`)
      .then((response) => {
        setWeatherData(response.data.forecast);
        setHourlyWeatherData(response.data.hourlyForecast);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        toast.error('Error fetching weather data');
        setError('Error fetching weather data');
        setLoading(false);
      });
  }, [city]);
  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#e8f5e9',
        }}
      >
        <CircularProgress sx={{ color: '#2e7d32' }} />
      </Box>
    );
  }

  const currentDate = new Date().toLocaleDateString();
  const todayData = weatherData.find((day) => day.date === currentDate);
  const otherDaysData = weatherData.filter((day) => day.date !== currentDate);

  console.log(hourlyWeatherData, 'todays hourly date');
  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', py: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: '#1b5e20', mb: 4 }}
      >
        Weather Forecast
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          marginBottom: 3,
        }}
      >
        <Autocomplete
          options={nepaliCities}
          value={city}
          fullWidth
          onChange={(_, newValue) => setCity(newValue || 'Kathmandu')}
          className="cursor-pointer"
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select City"
              variant="outlined"
              fullWidth
              color="success"
            />
          )}
        />
        {/* <Button
          variant="contained"
          onClick={() => fetchWeatherData(city)}
          sx={{
            mt: 1,
            bgcolor: "green",
            height: { xs: "40px", sm: "100%" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Search
        </Button> */}
      </Box>
      <Grid container spacing={4}>
        {todayData && (
          <Grid item xs={12} lg={8}>
            <Card
              sx={{
                backgroundColor: '#2e7d32',
                color: '#ffffff',
                borderRadius: 2,
                height: '100%',
              }}
            >
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Today's {city} Weather
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: 100,
                  }}
                >
                  {weatherIcons[todayData.main] || <WiDaySunny />}
                </Box>
                <Typography variant="h6" align="center" gutterBottom>
                  {todayData.description.charAt(0).toUpperCase() +
                    todayData.description.slice(1)}
                </Typography>
                <Grid container spacing={2} sx={{ mt: 3 }}>
                  {[
                    {
                      icon: <FaTemperatureHigh />,
                      label: 'Temperature',
                      value: `${todayData.temperature}°C`,
                    },
                    {
                      icon: <FaTint />,
                      label: 'Rain Probability',
                      value: `${(todayData.rainprobability * 100).toFixed(0)}%`,
                    },
                    {
                      icon: <FaWind />,
                      label: 'Wind Speed',
                      value: `${todayData.wind_speed.toFixed(1)} km/h`,
                    },
                    {
                      icon: <FaTint />,
                      label: 'Humidity',
                      value: `${todayData.humidity}%`,
                    },
                  ].map((item, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                      <Box
                        sx={{
                          textAlign: 'center',
                          p: 2,
                          bgcolor: 'rgba(255,255,255,0.1)',
                          borderRadius: 2,
                        }}
                      >
                        <Box sx={{ fontSize: 40, mb: 1 }}>{item.icon}</Box>
                        <Typography variant="body2">{item.label}</Typography>
                        <Typography variant="h6">{item.value}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        )}

        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              backgroundColor: '#388e3c',
              color: '#ffffff',
              borderRadius: 2,
              height: '100%',
            }}
          >
            <CardContent>
              <Typography variant="h6" align="center" gutterBottom>
                7-Day Forecast
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {otherDaysData.map((day, index) => (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      p: 2,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ fontSize: 40 }}>
                        {weatherIcons[day.main] || <WiDaySunny />}
                      </Box>
                      <Box>
                        <Typography variant="body1">
                          {getDayName(day.date)}
                        </Typography>
                        <Typography variant="body2">
                          {day.description}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="h6">{day.temperature}°C</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card
            sx={{
              backgroundColor: '#43a047',
              color: '#ffffff',
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography variant="h6" align="center" gutterBottom>
                Today's Hourly Forecast
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  overflowX: 'auto',
                  pb: 2,
                  alignItems: 'center',
                  justifyItems: 'center',
                }}
              >
                {hourlyWeatherData.map((hour, index) => (
                  <Box
                    key={index}
                    sx={{
                      minWidth: 120,
                      textAlign: 'center',
                      p: 2,
                      mr: 2,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="body2">
                      {formatTime(hour.date)}
                    </Typography>
                    <Box sx={{ fontSize: 40, my: 2 }}>
                      {weatherIcons[hour.main] || <WiDaySunny />}
                    </Box>
                    <Typography variant="h6">{hour.temperature}°C</Typography>
                    <Typography variant="body2">
                      {(hour.rainprobability * 100).toFixed(0)}%
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Weather;
