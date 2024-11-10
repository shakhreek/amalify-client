import React from 'react';
import { useSelector } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Card,
    CardHeader,
    CardContent,
    Chip,
    Paper
} from '@mui/material';

const latestOrders = {
    header: [
        "Customer ID",
        "Customer",
        "Phone Number",
        "Date",
        "Status", 
        "Product"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping",
            product: "Ozone Generator"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid",
            product: "Ozone Generator"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending",
            product: "Ozone Generator"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid",
            product: "Ozone Generator"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund",
            product: "Ozone Generator"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund",
            product: "Ozone Generator"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund",
            product: "Ozone Generator"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund",
            product: "Ozone Generator"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund",
            product: "Ozone Generator"
        },
    ]
};

const orderStatusColors = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "error"
};

const Dashboard = () => {
    const themeReducer = useSelector(state => state.ThemeReducer.mode);

    return (
        <div>
            <Typography variant="h4" component="h2" gutterBottom>
                Dashboard
            </Typography>
            <div>
                <Card>
                    <CardHeader title="Call Duties" />
                    <CardContent>
                        <TableContainer component={Paper} sx={{ maxHeight: 500, backgroundColor: 'white' }}>
                            <Table stickyHeader aria-label="latest orders table" sx={{ backgroundColor: 'white' }}>
                                <TableHead>
                                    <TableRow>
                                        {latestOrders.header.map((item, index) => (
                                            <TableCell key={index} sx={{ fontWeight: 'bold' }}>{item}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {latestOrders.body.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell>{item.user}</TableCell>
                                            <TableCell>{item.price}</TableCell>
                                            <TableCell>{item.date}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={item.status}
                                                    color={orderStatusColors[item.status]}
                                                    variant="outlined"
                                                />
                                            </TableCell>
                                            <TableCell>{item.product}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
