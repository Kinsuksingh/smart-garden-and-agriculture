import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from './components/Home'
import NavBar from "./components/NavBar";
import Page from "./components/Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return(
    <BrowserRouter>
      <NavBar/>
      <div className="main-container">
          <Routes>
              <Route path="/smart-garden-and-agriculture" element={<Home/>} />
              <Route path="/smart-garden-and-agriculture/data" element={<Page/>} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App