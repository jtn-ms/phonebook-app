import React, { useState, useContext } from "react";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { HBox, VBox } from "./styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router";

import { ContactContext } from "context/ContactContext";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const AddContactForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(ContactContext);
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const addContact = (e) => {
    if (
      contact.firstname === "" ||
      contact.lastname === "" ||
      contact.phonenumber === ""
    ) {
      return;
    }
    
    if (contact.phonenumber)
    
    dispatch({ type: "ADD", payload: contact });
    navigate("/");
  };

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
          marginTop: 4,
        }}
      >
        <VBox
          sx={{
            padding: 1,
            width: 300,
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
              onChange={handleChange}
              // pass down to FormLabel as children
              label="First Name"
            />
            <TextField
              // html input attribute
              name="lastname"
              type="text"
              placeholder="Snow"
              onChange={handleChange}
              // pass down to FormLabel as children
              label="Last Name"
            />
            <FormControl>
              <InputLabel htmlFor="component-outlined">Phone Number</InputLabel>
              <OutlinedInput
                value={contact.phonenumber}
                onChange={handleChange}
                name="phonenumber"
                id="component-outlined"
                label="Phone Number"
                placeholder="(111) 111-1111"
                inputComponent={TextMaskCustom}
              />
            </FormControl>
          </Stack>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              mt: 1, // margin top
            }}
            onClick={addContact}
          >
            Confirm
          </Button>
        </VBox>
      </HBox>
    </VBox>
  );
};

export default AddContactForm;
