import "./App.css";
import { Provider } from "react-redux";
import store from "./shared/store";
import UserForm from "./components/UserForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <Provider store={store}>
        <UserForm />
      </Provider>
      <ContactForm />
    </div>
  );
}

export default App;
