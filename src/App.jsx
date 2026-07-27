import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import ChartsPage from "./pages/ChartsPage";
import DataTablePage from "./pages/DataTablePage";
import ReportsPage from "./pages/ReportsPage";
import ExportPage from "./pages/ExportPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="charts" element={<ChartsPage />} />
        <Route path="table" element={<DataTablePage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="export" element={<ExportPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;