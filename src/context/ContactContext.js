import { createContext, useEffect, useReducer } from "react";

import { ContactReducer } from "./ContactReducer";

const INITIAL_STATE = {
  id: 0,
  contacts: [], //JSON.parse(localStorage.getItem("contacts")) || [],
};

export const ContactContext = createContext(INITIAL_STATE);

export const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContactReducer, INITIAL_STATE);

  useEffect(() => {
    //localStorage.setItem("contacts", JSON.stringify(state.contacts));
  }, [state.contacts]);

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};
