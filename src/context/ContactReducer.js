export const ContactReducer = (state, action) => {
  switch (action.type) {
    case "LOAD": {
      return {
        id: action.payload[action.payload.length - 1].id,
        contacts: action.payload,
      };
    }
    case "CLEAN": {
      return {
        id: 0,
        contacts: [],
      };
    }
    case "ADD": {
      let contact = {
        id: state.id + 1,
        name: `${action.payload.firstname} ${action.payload.lastname}`,
        pin: action.payload.phonenumber,
      };
      return {
        id: state.id + 1,
        contacts: [...state.contacts, contact],
      };
    }
    case "REMOVE": {
      return {
        id: state.id,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};
