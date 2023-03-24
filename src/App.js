import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnitConverter from './components/unit-converter/UnitConverter';
import ColorPalette from './components/color-palette-generator/ColorPalette';
import ProjectRoutes from './router/ProjectRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ProjectRoutes />}>
            <Route path="unit-converter" element={<UnitConverter />} />
            <Route path="color-palette" element={<ColorPalette />} />
          </Route>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
