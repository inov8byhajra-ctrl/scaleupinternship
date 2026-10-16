import { useParams } from 'react-router-dom';

// TODO (Day 3): profile, plan & usage, users table, actions
// (Change plan -> /admin/billing, Suspend, View as tenant, links to /admin/flags and /admin/audit)
// API ready: GET /api/admin/tenants/:id  and  GET /api/admin/tenants/:id/users
export default function TenantDetail() {
  const { id } = useParams();
  return (
    <div className="bg-white border border-line rounded-lg p-6">
      <h2 className="text-xl font-bold text-navy-700">Tenant Detail</h2>
      <p className="text-muted mt-1">Tenant id: {id}. Day 3 task: build this screen.</p>
    </div>
  );
}
