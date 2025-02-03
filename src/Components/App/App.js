// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

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

