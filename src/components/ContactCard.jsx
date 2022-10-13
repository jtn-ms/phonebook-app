import { Button, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { HBox, VBox } from "./styled";

const ContactCard = ({ contact, onDelete }) => {
  return (
    <HBox
      sx={{
        justifyContent: "space-between",
        padding: "10px",
        alignItems: "center",
        backgroundColor: "white",
        // borderRadius: 1,
        borderBottom: "1px solid #ddd"
      }}
    >
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
          padding: 2.5
        }}
        onClick={() => onDelete(contact.id)}
      >
        <DeleteOutlinedIcon />
      </Button>
    </HBox>
  );
};

export default ContactCard;
