import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Cms from "./components/Cms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cms" element={<Cms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
