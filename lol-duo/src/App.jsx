import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
//import OnBoarding from "./pages/OnBoarding"; //verificar   //  <Route path="/onboarding" element={<OnBoarding />} />
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
