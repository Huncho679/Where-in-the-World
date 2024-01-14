import CountryData from "./features/pages/CountryData";
import Home from "./features/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path=":name" element={<CountryData />} />
      </Routes>
    </BrowserRouter>
  );
}
