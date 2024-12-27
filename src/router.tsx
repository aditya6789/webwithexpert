import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<HomePage />} />
        <Route path="/plan" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
