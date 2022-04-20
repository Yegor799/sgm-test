import { Routes, Route } from "react-router-dom";
import MainTable from './components/MainTable/MainTable';
import PopupTable from "./components/PopupTable/PopupTable";


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<MainTable  />} />
      <Route path="popup" element={<PopupTable  />} />
      </Routes>
  );
}

export default App;
