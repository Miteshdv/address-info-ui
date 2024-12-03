import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const UploadForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData,
        });
        const result = await response.text();
        console.log(result);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 4 }}
        >
            <Typography variant="body1">Upload CSV File</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
                Please upload a CSV file with the format: name, email, age, city.
            </Typography>
            <TextField
                type="file"
                name="file"
                variant="outlined"
                fullWidth
                sx={{ mt: 2 }}
                InputLabelProps={{ shrink: true }}
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
            >
                Submit
            </Button>
        </Box>
    );
};

export default UploadForm;