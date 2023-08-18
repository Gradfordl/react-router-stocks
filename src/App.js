import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stock from "./components/Stock";
import Nav from "./components/Nav"
import About from "./pages/About"
import "./index.css"

export default function App () {
  return (
    <div className="App">
        <Nav />
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/stocks" element={<Dashboard/>}/>
      <Route path="/stock/:symbol" element={<Stock/>}/>
      <Route path = "/about" element={<About/>} />
    </Routes>
    </div>
  );
}