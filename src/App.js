import "./styles.css";
import ContactCardList from "components/ContactCardList";
import AddContactForm from "components/AddContactForm";
import { Box, styled } from "@mui/material";
import React, { useEffect, useContext } from "react";
import { grey } from "@mui/material/colors";
import { contacts as contact_info } from "./mock_data";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ContactContext } from "context/ContactContext";

const StyledBox = styled(Box)({
  // background: grey[50],
  width: "100%",
  height: "100%",
});

export default function App() {
  const { contacts, dispatch } = useContext(ContactContext);

  useEffect(() => {
    dispatch({ type: "LOAD", payload: contact_info });
  }, []);

  return (
    <StyledBox>
      <Router>
        <Routes>
          <Route path="/" element={<ContactCardList />} />
          <Route exact path="add" element={<AddContactForm />} />
        </Routes>
      </Router>
    </StyledBox>
  );
}
