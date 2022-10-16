import { Button, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { HBox, VBox } from "./styled";
import { styled } from "@mui/material/styles";

const CardNonBorder = styled(HBox)({
  justifyContent: "space-between",
  padding: "10px",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "5px",
  border: "1px solid inherit",
});

const CardBottomBorder = styled(CardNonBorder)({
  borderBottom: "1px solid #ddd",
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
});

const SelectedCard = ({ children, isLast }) => {
  return isLast ? (
    <CardNonBorder>{children}</CardNonBorder>
  ) : (
    <CardBottomBorder>{children}</CardBottomBorder>
  );
};

const ContactCard = ({ contact, onDelete, isLast }) => {
  return (
    <SelectedCard isLast={isLast}>
      <VBox>
        <Typography variant="h6">{contact.name}</Typography>

        <Button variant="text" disabled startIcon={<LocalPhoneIcon />}>
          {contact.pin}
        </Button>
        {/* <HBox>
          <LocalPhoneIcon color="disabled" />
          <Typography variant="body1">{contact.pin}</Typography>
        </HBox> */}
      </VBox>
      <Button
        variant="contained"
        color="error"
        // size="small"
        sx={{
          maxHeight: 30,
          minHeight: 30,
          maxWidth: 30,
          minWidth: 30,
          padding: 2.5,
        }}
        onClick={() => onDelete(contact.id)}
      >
        <DeleteOutlinedIcon />
      </Button>
    </SelectedCard>
  );
};

export default ContactCard;
