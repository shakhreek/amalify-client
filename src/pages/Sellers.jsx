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
import ManagerModal from "../components/managerModal/managerModal";
import ManagerContractsModal from "../components/managerModal/managerContractsModal";
import FilterButton from "../components/filterButton/filterButton";

const customerTableHead = ["ID", "Name", "Contracts", "Sales", "Actions"];

const Sellers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contractModalIsOpen, setContractModalIsOpen] = useState(false);

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

  const openContractModal = (customer = null) => {
    setSelectedCustomer(customer);
    setContractModalIsOpen(true);
  };

  const closeContractModal = () => {
    setContractModalIsOpen(false);
    setSelectedCustomer(null);
  };

  const handleDelete = (customerId) => {
    console.log("Deleting customer with ID:", customerId);
    closeModal();
  };

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Managers
      </Typography>
      <Card>
        <CardHeader
          title="Managers List"
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
                Add Manager
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
                {/* {customerList.map((customer, index) => ( */}
                <TableRow key={1} hover>
                  <TableCell>{1}</TableCell>
                  <TableCell>{"Shahriyor"}</TableCell>
                  <TableCell>{"$25000"}</TableCell>
                  {/* <TableCell>{3}</TableCell>
                                        <TableCell>{5}</TableCell>
                                        <TableCell>${250}</TableCell>
                                        <TableCell>${500}</TableCell> */}
                  <TableCell>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        openContractModal("Shahriyor");
                      }}
                    >
                      <Edit />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal("Shahriyor");
                      }}
                    >
                      <Edit />
                    </IconButton>
                  </TableCell>
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Modal open={modalIsOpen} onClose={closeModal}>
        <ManagerModal
          customer={selectedCustomer}
          onClose={closeModal}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Modal>
      <Modal open={contractModalIsOpen} onClose={closeContractModal}>
        <ManagerContractsModal
          customer={selectedCustomer}
          onClose={closeContractModal}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Modal>
    </div>
  );
};

export default Sellers;
