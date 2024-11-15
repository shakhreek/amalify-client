import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function FilterButton() {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl size="small">
      <Select
        value={filter}
        onChange={handleChange}
        IconComponent={FilterAltIcon}
        displayEmpty
        sx={{
          "& .MuiSelect-icon": {
            color: "gray",
            marginRight: 0.5,
          },
        }}
      >
        <MenuItem value={"status"}>Status</MenuItem>
        <MenuItem value={"product"}>Product</MenuItem>
        <MenuItem value={"date"}>Date</MenuItem>
      </Select>
    </FormControl>
  );
}
