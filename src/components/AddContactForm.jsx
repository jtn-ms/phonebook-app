import React, { useState } from "react";
import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { HBox, VBox } from "./styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router";

const AddContactForm = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    phonenumber: ""
  });

  const onChange = (e) => {
    let { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const onConfirm = () => {};

  return (
    <VBox>
      <HBox>
        <IconButton aria-label="backward" onClick={() => navigate("/")}>
          <ChevronLeftIcon />
        </IconButton>
      </HBox>
      <HBox
        sx={{
          justifyContent: "center",
          marginTop: 4
        }}
      >
        <VBox
          sx={{
            padding: 1,
            width: 300
            // border: "1px solid #ddd",
            // borderRadius: 1
          }}
        >
          <Typography variant="h5" textAlign="center">
            <b>Add Contact</b>
          </Typography>
          <Stack spacing={1} marginTop={3} marginBottom={1}>
            {/* <Typography level="body2">Sign in to continue</Typography> */}
            <TextField
              // html input attribute
              name="firstname"
              type="text"
              placeholder="John"
              onChange={onChange}
              // pass down to FormLabel as children
              label="First Name"
            />
            <TextField
              // html input attribute
              name="lastname"
              type="text"
              placeholder="John"
              onChange={onChange}
              // pass down to FormLabel as children
              label="Last Name"
            />
            <TextField
              // html input attribute
              name="phonenumber"
              type="text"
              placeholder="Snow"
              onChange={onChange}
              // pass down to FormLabel as children
              label="(111) 111-1111"
            />
          </Stack>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              mt: 1 // margin top
            }}
            // onClick={add}
          >
            Confirm
          </Button>
        </VBox>
      </HBox>
    </VBox>
  );
};

export default AddContactForm;
