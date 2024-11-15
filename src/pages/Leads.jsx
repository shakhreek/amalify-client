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
import LeadModal from "../components/leadModal/leadModal";
import customerList from "../assets/JsonData/customers-list.json";
import FilterButton from "../components/filterButton/filterButton";

const customerTableHead = [
  "ID",
  "Name",
  "Phone",
  "Product",
  "Status",
  "Actions",
];

const Leads = () => {
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

  const orderStatusColors = {
    contracted: "success",
    interested: "error",
    potential: "warning",
  };

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Leads
      </Typography>
      <Card>
        <CardHeader
          title="Leads List"
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
                Add Lead
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
                      <Chip
                        label={customer.status}
                        color={orderStatusColors[customer.status] || "default"}
                        variant="outlined"
                      />
                    </TableCell>
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
        <LeadModal
          customer={selectedCustomer}
          onClose={closeModal}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Modal>
    </div>
  );
};

export default Leads;
