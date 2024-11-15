import React from "react";
import { useSelector } from "react-redux";
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
  Paper,
  Button,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const latestOrders = {
  header: [
    "Customer ID",
    "Customer",
    "Phone Number",
    "Date",
    "Status",
    "Product",
  ],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "interested",
      product: "Ozone Generator",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "interested",
      product: "Ozone Generator",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "interested",
      product: "Ozone Generator",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "potential",
      product: "Ozone Generator",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "potential",
      product: "Ozone Generator",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "potential",
      product: "Ozone Generator",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "contracted",
      product: "Ozone Generator",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "contracted",
      product: "Ozone Generator",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "contracted",
      product: "Ozone Generator",
    },
  ],
};

const orderStatusColors = {
  contracted: "success",
  interested: "error",
  potential: "warning",
};

const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Dashboard
      </Typography>
      <div>
        <Card>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "90%",
            }}
          >
            <CardHeader title="Call Duties" />
            <Button variant="contained">Filter</Button>
          </div>
          <CardContent>
            <TableContainer
              component={Paper}
              sx={{ maxHeight: 500, backgroundColor: "white" }}
            >
              <Table
                stickyHeader
                aria-label="latest orders table"
                sx={{ backgroundColor: "white" }}
              >
                <TableHead>
                  <TableRow>
                    {latestOrders.header.map((item, index) => (
                      <TableCell key={index} sx={{ fontWeight: "bold" }}>
                        {item}
                      </TableCell>
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
                          color={orderStatusColors[item.status] || "default"}
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingTop: 25,
                        }}
                      >
                        {item.product}
                        <DoneIcon
                          sx={{
                            cursor: "pointer",
                            "&:hover": {
                              color: "blue", // Hover bo'lganda rangni o'zgartirish
                              transform: "scale(1.1)", // Kichik animatsiya
                            },
                          }}
                        />
                      </TableCell>
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
