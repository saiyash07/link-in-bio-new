import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdminDashboard from "./pages/AdminDashboard";
import PublicProfile from "./pages/PublicProfile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/admin" element={<AdminDashboard />} />

        {/* DEMO PROFILE */}
        <Route path="/demo" element={<PublicProfile demo={true} />} />

        {/* REAL USER PROFILES */}
        <Route path="/:username" element={<PublicProfile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;