import "./App.css";

import IndexPage from "./pages/IndexPage/IndexPage";
import CoasterPage from "./pages/CoastersPage/CoastersPage";
import CoasterDetails from "./pages/CoasterDetails/CoasterDetails";

function App() {
  return (
    <div className="container">
      <IndexPage />
      <CoasterPage />
      <CoasterDetails />
    </div>
  );
}

export default App;
