import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components.jsx/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchCompanyName from "./Components.jsx/SearchCompanyName";
import Favs from "./Components.jsx/Favs";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:companyName" element={<SearchCompanyName/>} />
        <Route path="/favourites"   element={<Favs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
