import { Navigate, Route, Routes } from "react-router-dom";
import { DocLayout } from "./components/doc/DocLayout";
import { FoundationsPage } from "./pages/Foundations";
import { ComponentsPage } from "./pages/Components";
import { InventoryPage } from "./pages/Inventory";

export default function App() {
  return (
    <DocLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/foundations" replace />} />
        <Route path="/foundations" element={<FoundationsPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Routes>
    </DocLayout>
  );
}
