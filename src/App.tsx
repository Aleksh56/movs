import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import AboutPage from "./pages/About";
import ApplicantsPage from "./pages/Applicants";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/applicants" element={<ApplicantsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
