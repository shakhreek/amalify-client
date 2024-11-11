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

const PurchaseModal = ({ customer, onClose, onEdit }) => {
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
                Product Details
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
                                <InputLabel>Supplier</InputLabel>
                                <Select
                                    label="Supplier"
                                    name="supplier"
                                    value={editableCustomer.product || ''}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value="Laptop">NANA</MenuItem>
                                    <MenuItem value="Phone">Chan Medical</MenuItem>
                                    <MenuItem value="Monitor">otech</MenuItem>
                                </Select>
                            </FormControl>
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
                                label="Quantity"
                                name="quantity"
                                value={8}
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
                                label="Quantity for Free"
                                name="quantity_free"
                                value={2}
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
                                label="Price"
                                name="price"
                                value={"$500"}
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
                                label="Total"
                                name="total"
                                value={"$1000"}
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

export default PurchaseModal;
