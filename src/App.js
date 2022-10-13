import "./styles.css";
import ContactCardList from "components/ContactCardList";
import AddContactForm from "components/AddContactForm";
import { Box, styled } from "@mui/material";
import React from "react";
import { grey } from "@mui/material/colors";
import { contacts } from "./mock_data";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const StyledBox = styled(Box)({
  // background: grey[50],
  width: "100%",
  height: "100%"
});

export default function App() {
  return (
    <StyledBox>
      <Router>
        <Routes>
          <Route path="/" element={<ContactCardList contacts={contacts} />} />
          <Route exact path="add" element={<AddContactForm />} />
        </Routes>
      </Router>
    </StyledBox>
  );
}
