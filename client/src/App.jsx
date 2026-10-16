import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './admin/AdminLayout.jsx';
import Overview from './admin/Overview.jsx';
import TenantManagement from './admin/TenantManagement.jsx';
import TenantDetail from './admin/TenantDetail.jsx';
import Placeholder from './admin/Placeholder.jsx';

// Routes follow docs/routes.md. Do not rename without telling the group.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Overview />} />
          <Route path="tenants" element={<TenantManagement />} />
          <Route path="tenants/:id" element={<TenantDetail />} />
          {/* Other students' screens: placeholders until they push theirs */}
          <Route path="billing" element={<Placeholder name="Subscription & Billing (S2)" />} />
          <Route path="analytics" element={<Placeholder name="Analytics (S2)" />} />
          <Route path="health" element={<Placeholder name="System Health (S3)" />} />
          <Route path="flags" element={<Placeholder name="Feature Flags (S3)" />} />
          <Route path="audit" element={<Placeholder name="Audit Log (S3)" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
