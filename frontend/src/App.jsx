import "./App.css";
import {Home} from "./components/Home/Home";
import { Categories } from "./components/Categories/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Filter } from "./components/Filter/Filter";
import { ServiceView } from "./components/ServiceView/ServiceView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/filter" element={<Filter />}></Route>
        <Route path="/service" element={<ServiceView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
