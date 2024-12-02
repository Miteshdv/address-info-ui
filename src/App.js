import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, List, ListItem, Paper } from '@mui/material';
import UploadForm from './UploadForm';
import DataForm from './DataForm';
import DataDisplay from './DataDisplay';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/all-data');
      const result = await response.json();
      setData(result);
    };

    fetchData();

    const ws = new WebSocket(`ws://${window.location.host}`);
    ws.onmessage = async (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);

      // Fetch all data from DynamoDB
      const response = await fetch('/all-data');
      const result = await response.json();
      setData(result);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Address Info
      </Typography>
      <UploadForm />
      <DataForm setData={setData} />
      <Typography variant="h5" component="h2" gutterBottom>
        Form Data
      </Typography>
      <DataDisplay data={data} />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Address List
        </Typography>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index} component={Paper} sx={{ mb: 2, p: 2 }}>
              {JSON.stringify(message, null, 2)}
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default App;