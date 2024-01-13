import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Hotel from "./Pages/Hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/MERCURE-BOOKING" element={<Navigate replace to="/" />} />

        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
