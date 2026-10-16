import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Building2, CreditCard, BarChart3, Activity, Flag, ScrollText } from 'lucide-react';

const links = [
  { to: '/admin', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/admin/tenants', label: 'Tenants', icon: Building2 },
  { to: '/admin/billing', label: 'Billing', icon: CreditCard },
  { to: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/admin/health', label: 'System Health', icon: Activity },
  { to: '/admin/flags', label: 'Feature Flags', icon: Flag },
  { to: '/admin/audit', label: 'Audit Log', icon: ScrollText },
];

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 shrink-0 bg-navy-900 text-white p-4 space-y-1">
        <h1 className="text-lg font-bold mb-4">TradesDash Admin</h1>
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-navy-700' : 'hover:bg-navy-700/60'}`
            }
          >
            <Icon size={18} /> {label}
          </NavLink>
        ))}
      </aside>
      <main className="flex-1 p-6 min-w-0">
        <Outlet />
      </main>
    </div>
  );
}
