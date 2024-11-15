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
import ProductsModal from "../components/productsModal/productsModal";
import customerList from "../assets/JsonData/customers-list.json";
import FilterButton from "../components/filterButton/filterButton";

const customerTableHead = [
  "ID",
  "Name",
  "Purchased",
  "Sold",
  "Stock",
  "Actions",
];

const Products = () => {
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
        Stock Products
      </Typography>
      <Card>
        <CardHeader
          title="Products List"
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
                Add Product
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
                    <TableCell>{"Ozone Generator"}</TableCell>
                    <TableCell>{8}</TableCell>
                    <TableCell>{3}</TableCell>
                    <TableCell>{5}</TableCell>
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
        <ProductsModal
          customer={selectedCustomer}
          onClose={closeModal}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Modal>
    </div>
  );
};

export default Products;
