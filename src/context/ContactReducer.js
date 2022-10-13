export const ContactReducer = (state, action) => {
  switch (action.type) {
    case "LOAD": {
      return {
        contacts: action.payload
      };
    }
    case "CLEAN": {
      return {
        contacts: []
      };
    }
    case "ADD": {
      return [...state, action.payload];
    }
    case "REMOVE": {
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        )
      };
    }
    default: {
      return state;
    }
  }
};
