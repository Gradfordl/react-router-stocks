//Import route and our components
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stock from "./components/Stock";
import Nav from "./components/Nav"
import About from "./pages/About"
import "./index.css"

export default function App () {
  // We will use the Route component to specify each route
  return (
    <div className="App">
        {/* The component here isn't included in the Routes here because we are already pointing the items in nav to the Routes */}
        {/* THE LINKS MUST EXIST IN APP.JS FOR THE LINKS GENERATED IN NAV TO WORK */}
        {/* Nav will ALWAYS display no matter what since the page changing doesn't apply to Nav, since it's not inside Routes */}
        <Nav />
    <Routes>
        {/* Routes allow us to load different pages without refreshing the page and loading an entirely new page */}
        {/* To go to other components, do /[PAGENAME] on the end of the URL */}
        {/* Main is just localhost:3000, not /main */}
        {/* Home */}
      <Route path="/" element={<Home/>}/>
      {/* Stock front selector Page */}
      <Route path="/stocks" element={<Dashboard/>}/>
      <Route path="/stock/:symbol" element={<Stock/>}/>
      <Route path = "/about" element={<About/>} />
    </Routes>
    </div>
  );
}