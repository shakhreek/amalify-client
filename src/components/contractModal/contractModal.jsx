import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

// Import required plugins for dayjs
import weekOfYear from 'dayjs/plugin/weekOfYear';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isBetween from 'dayjs/plugin/isBetween';
import advancedFormat from 'dayjs/plugin/advancedFormat';

// Use the plugins in dayjs
dayjs.extend(weekOfYear);
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.extend(isBetween);
dayjs.extend(advancedFormat);

const ContractModal = ({ customer, onClose, onEdit }) => {
    const [editableCustomer, setEditableCustomer] = useState(customer || {});
    const [selectedDateTime, setSelectedDateTime] = useState(dayjs()); // Default to current datetime

    useEffect(() => {
        setEditableCustomer(customer || {});
    }, [customer]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableCustomer((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onEdit({ ...editableCustomer, dateTime: selectedDateTime });
        onClose();
    };

    if (!customer) return null;

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                width: 600,
                borderRadius: 5,
                maxHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'scroll',
                scrollbarWidth: 'none'
            }}
        >
            <Typography variant="h6" component="h2" mb={2}>
                Customer Details
            </Typography>
            <Box
                sx={{
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                    flex: 1,
                }}
            >
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="ID"
                                name="id"
                                value={editableCustomer.id}
                                onChange={handleInputChange}
                                disabled
                                margin="normal"
                                sx={{
                                    borderRadius: 2,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <FormControl fullWidth margin="normal" sx={{ borderRadius: 2 }}>
                                <InputLabel>Product</InputLabel>
                                <Select
                                    label="Product"
                                    name="product"
                                    value={editableCustomer.product || ''}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value="Laptop">Laptop</MenuItem>
                                    <MenuItem value="Phone">Phone</MenuItem>
                                    <MenuItem value="Monitor">Monitor</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Customer"
                                name="customer"
                                value={editableCustomer.name}
                                onChange={handleInputChange}
                                margin="normal"
                                sx={{
                                    borderRadius: 2,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
                                fullWidth
                                label="Total Sum"
                                name="total_sum"
                                value={editableCustomer.total_spend}
                                onChange={handleInputChange}
                                margin="normal"
                                sx={{
                                    borderRadius: 2,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
                                fullWidth
                                label="Units"
                                name="units"
                                value={2}
                                onChange={handleInputChange}
                                margin="normal"
                                sx={{
                                    borderRadius: 2,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} mt={2}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    label="Date"
                                    value={selectedDateTime}
                                    onChange={(newValue) => setSelectedDateTime(newValue)}
                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Notes"
                                name="notes"
                                multiline
                                rows={4}
                                value={editableCustomer.notes || ''}
                                onChange={handleInputChange}
                                margin="normal"
                                sx={{
                                    borderRadius: 2,
                                }}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Box
                sx={{
                    position: 'sticky',
                    bottom: 0,
                    bgcolor: 'background.paper', // Match the button box color with modal background
                    pt: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <Button variant="outlined" onClick={handleSave} sx={{ marginRight: 2 }}>
                    Save
                </Button>
                <Button variant="outlined" onClick={onClose}>
                    Close
                </Button>
            </Box>
        </Box>
    );
};

export default ContractModal;
