import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const UploadForm = ({ handleUpload }) => {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="body1">Upload CSV File</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
                Please upload a CSV file with the format: name, email, age, city.
            </Typography>
            <Button
                variant="contained"
                component="label"
                sx={{ mt: 2 }}
            >
                Upload File
                <input
                    type="file"
                    hidden
                    onChange={handleUpload}
                />
            </Button>
        </Box>
    );
};

export default UploadForm;