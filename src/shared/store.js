import { createStore } from "redux";
import { combineForms } from "react-redux-form";

const initialUserState = {
  firstName: "",
  lastName: "",
  email: "",
};

const store = createStore(combineForms({ user: initialUserState }));

export default store;
