// TODO (Day 2): table + search (300ms debounce) + status/plan filters + Suspend/Activate with confirm dialog.
// API ready: GET /api/admin/tenants?search=&status=&plan=  and  PATCH /api/admin/tenants/:id/status
// Row click -> /admin/tenants/:id
export default function TenantManagement() {
  return (
    <div className="bg-white border border-line rounded-lg p-6">
      <h2 className="text-xl font-bold text-navy-700">Tenant Management</h2>
      <p className="text-muted mt-1">Day 2 task: build the tenants table here.</p>
    </div>
  );
}
