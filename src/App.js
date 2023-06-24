import "./App.css";
import "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {} from "reactstrap";
function App() {
  return (
    <div className="Website">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
