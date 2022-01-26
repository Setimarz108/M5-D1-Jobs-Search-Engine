import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components.jsx/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchCompanyName from "./Components.jsx/SearchCompanyName";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:companyName" element={<SearchCompanyName/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
