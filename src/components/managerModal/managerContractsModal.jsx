import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Grid, Table, TableBody, TableRow, TableCell, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
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

const ManagerContractsModal = ({ customer, onClose, onEdit }) => {
    const [editableCustomer, setEditableCustomer] = useState(customer || {});
    const [selectedDateTime, setSelectedDateTime] = useState(dayjs());

    const contractDetails = customer.contracts || [
        { customer: 'Abdulloh', date: '2024-01-15', cost: 500, product: 'Laptop', count: 1 },
        { customer: 'Abdulloh', date: '2024-02-20', cost: 700, product: 'Phone', count: 2 },
        { customer: 'Abdulloh', date: '2024-03-10', cost: 300, product: 'Monitor', count: 1 },
        { customer: 'Abdulloh', date: '2024-03-10', cost: 300, product: 'Monitor', count: 1 },
        { customer: 'Abdulloh', date: '2024-03-10', cost: 300, product: 'Monitor', count: 1 },
        { customer: 'Abdulloh', date: '2024-03-10', cost: 300, product: 'Monitor', count: 1 },
        { customer: 'Abdulloh', date: '2024-03-10', cost: 300, product: 'Monitor', count: 1 },
        { customer: 'Abdulloh', date: '2024-03-10', cost: 300, product: 'Monitor', count: 1 },
        { customer: 'Abdulloh', date: '2024-03-10', cost: 300, product: 'Monitor', count: 1 },
        
    ];

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
                scrollbarWidth: 'none',
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
                        {/* <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="ID"
                                name="id"
                                value={editableCustomer.id}
                                onChange={handleInputChange}
                                disabled
                                margin="normal"
                                sx={{ borderRadius: 2 }}
                            />
                        </Grid> */}
                        <Grid item xs={12}>
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
                        {/* <Grid item xs={6}>
                            <FormControl fullWidth margin="normal" sx={{ borderRadius: 2 }}>
                                <InputLabel>Status</InputLabel>
                                <Select
                                    label="Status"
                                    name="status"
                                    value={editableCustomer.status || ''}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value="potential">Potential</MenuItem>
                                    <MenuItem value="offered">Offered</MenuItem>
                                    <MenuItem value="interested">Interested</MenuItem>
                                    <MenuItem value="contracted">Contracted</MenuItem>
                                    <MenuItem value="purchased">Purchased</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid> */}
                    </Grid>
                </form>
                <Typography variant="h6" component="h2" mb={2} mt={4}>
                    Contract Details
                </Typography>
                <Table>
                    <TableBody>
                        {contractDetails.map((contract, index) => (
                            <TableRow key={index}>
                                <TableCell>{contract.customer}</TableCell>
                                <TableCell>{contract.date}</TableCell>
                                <TableCell>${contract.cost}</TableCell>
                                <TableCell>{contract.product}</TableCell>
                                <TableCell>{contract.count}</TableCell>
                                <TableCell>${contract.count * contract.cost}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            <Box
                sx={{
                    position: 'sticky',
                    bottom: 0,
                    bgcolor: 'background.paper',
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

export default ManagerContractsModal;