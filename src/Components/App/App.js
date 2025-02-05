import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import NextTrips from "../NextTrips//NextTrips";
import Navbar from '../NavBar/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NextTrips" element={<NextTrips />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

