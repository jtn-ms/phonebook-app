import { Box, Button, Typography, InputBase } from "@mui/material";

import React, { useEffect, useState } from "react";
import ContactsIcon from "@mui/icons-material/Contacts";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { HBox, VBox } from "./styled";
import ContactCard from "./ContactCard";
import { useNavigate } from "react-router";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  border: "1px solid #ddd",
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25)
  // },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

const ContactCardList = ({ contacts }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const onDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setItems(contacts);
  }, [contacts]);

  return (
    <Box>
      <HBox
        sx={{
          paddingTop: 3,
          justifyContent: "center"
        }}
      >
        <ContactsIcon sx={{ fontSize: 40, marginRight: 2 }} />
        <Typography variant="h4">Phone Book App</Typography>
      </HBox>
      <VBox sx={{ padding: 3 }}>
        <HBox
          sx={{
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Typography variant="h5">Contacts</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/add")}
          >
            + Add Contact
          </Button>
        </HBox>
        <Search sx={{ marginY: "20px" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for contact by last name..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <VBox
          sx={{
            borderLeft: "1px solid #ddd",
            borderTop: "1px solid #ddd",
            borderRight: "1px solid #ddd",
            borderTopLeftRadius: 1,
            borderTopRightRadius: 1
          }}
        >
          {items &&
            items.length > 0 &&
            items.map((item, idx) => (
              <ContactCard key={item.id} contact={item} onDelete={onDelete} />
            ))}
        </VBox>
      </VBox>
    </Box>
  );
};

export default ContactCardList;
