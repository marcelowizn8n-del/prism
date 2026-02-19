import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Analytics } from "./pages/Analytics";
import { AI } from "./pages/AI";
import { Settings } from "./pages/Settings";
import { Refractions } from "./pages/Refractions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="ai" element={<AI />} />
          <Route path="refractions" element={<Refractions />} />
          <Route path="settings" element={<Settings />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
