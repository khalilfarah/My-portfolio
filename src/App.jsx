import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrortFolioPage from "./Pages/PrortFolioPage";
import Background from "./components/layout/Background";
import ScrollTop from "./components/layout/ScrollTop";

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrortFolioPage />} />
        </Routes>
      </BrowserRouter>
      <ScrollTop />
    </div>
  );
}
export default App;
