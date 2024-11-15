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
import { Edit, Add } from "@mui/icons-material";
import customerList from "../assets/JsonData/customers-list.json";
import PurchaseModal from "../components/purchaseModal/PurchaseModal";
import FilterButton from "../components/filterButton/filterButton";

const customerTableHead = [
  "ID",
  "Supplier",
  "Items",
  "Quantity",
  "Quantity for Free",
  "Price",
  "Total",
  "Actions",
];

const Purchases = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (customer = null) => {
    setSelectedCustomer(customer);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCustomer(null);
  };

  const handleEdit = (updatedCustomer) => {
    console.log("Editing customer:", updatedCustomer);
    closeModal();
  };

  const handleDelete = (customerId) => {
    console.log("Deleting customer with ID:", customerId);
    closeModal();
  };

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Purchases
      </Typography>
      <Card>
        <CardHeader
          title="Purchases List"
          action={
            <Box display="flex" gap="20px">
              <FilterButton />
              <Button
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() =>
                  openModal({
                    id: "",
                    name: "",
                    phone: "",
                    total_spend: "",
                    status: "potential",
                  })
                }
                sx={{ marginRight: 2 }}
              >
                Add Purchase
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
                    <TableCell>{"NANA"}</TableCell>
                    <TableCell>{"Ozone Generator"}</TableCell>
                    <TableCell>{3}</TableCell>
                    <TableCell>{5}</TableCell>
                    <TableCell>${250}</TableCell>
                    <TableCell>${500}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
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
        <PurchaseModal
          customer={selectedCustomer}
          onClose={closeModal}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Modal>
    </div>
  );
};

export default Purchases;
