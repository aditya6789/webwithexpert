import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import WorkPage from "./pages/work";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
