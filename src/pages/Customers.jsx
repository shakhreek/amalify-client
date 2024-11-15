import React, { useState } from "react";
import {
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { Add, Edit } from "@mui/icons-material";
import CustomerModal from "../components/customerModal/customerModal";
import customerList from "../assets/JsonData/customers-list.json";
import FilterButton from "../components/filterButton/filterButton";

const customerTableHead = ["ID", "Name", "Phone", "Total Spend", "Actions"];

const Customers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (customer) => {
    setSelectedCustomer(customer);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCustomer(null);
  };

  const handleEdit = (updatedCustomer) => {
    console.log("Editing customer:", updatedCustomer);
    // You can update the customerList here or send the updated data to a backend server
    closeModal();
  };

  const handleDelete = (customerId) => {
    console.log("Deleting customer with ID:", customerId);
    // Implement delete functionality here
    closeModal();
  };

  const orderStatusColors = {
    contracted: "success",
    interested: "error",
    potential: "warning",
  };

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Customers
      </Typography>
      <Card>
        <CardHeader
          title="Customer List"
          action={
            <Box display="flex" gap="20px">
              <FilterButton />
              <Button
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() =>
                  openModal({ id: "", name: "", phone: "", total_spend: "" })
                }
                sx={{ marginRight: 2 }}
              >
                Add Customer
              </Button>
            </Box>
          }
        />

        <CardContent>
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 500, backgroundColor: "white" }}
          >
            <Table stickyHeader aria-label="customer table">
              <TableHead>
                <TableRow>
                  {customerTableHead.map((head, index) => (
                    <TableCell key={index} sx={{ fontWeight: "bold" }}>
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {customerList.map((customer, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{customer.id}</TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.total_spend}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent the row click event from triggering
                          openModal(customer);
                        }}
                      >
                        <Edit />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Modal open={modalIsOpen} onClose={closeModal}>
        <CustomerModal
          customer={selectedCustomer}
          onClose={closeModal}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Modal>
    </div>
  );
};

export default Customers;
