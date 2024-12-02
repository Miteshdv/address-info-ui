import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const DataForm = ({ setData }) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const id = event.target.idInput.value;
        const response = await fetch(`/data?id=${id}`);
        const result = await response.json();
        setData([result.item]);
    };

    return (
        <Box
            component="form"
            id="dataForm"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 4,
                p: 2,
                border: '1px solid #ccc',
                borderRadius: '8px',
            }}
        >
            <Typography variant="h5" component="h1" gutterBottom>
                Get Data from DynamoDB
            </Typography>
            <TextField
                label="Enter ID"
                name="id"
                id="idInput"
                variant="outlined"
                required
                fullWidth
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
};

export default DataForm;