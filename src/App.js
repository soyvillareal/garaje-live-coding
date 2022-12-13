import "./App.css";

import IndexPage from "./pages/IndexPage/IndexPage";
import CoasterPage from "./pages/CoastersPage/CoastersPage";
import CoasterDetails from "./pages/CoasterDetails/CoasterDetails";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/galeria" element={<CoasterPage />}></Route>
        <Route path="/detalles/:coaster_id" element={<CoasterDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
