import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge.jsx';

const shortcuts = [
  ['Tenants', '/admin/tenants'],
  ['Billing', '/admin/billing'],
  ['Analytics', '/admin/analytics'],
  ['System Health', '/admin/health'],
  ['Feature Flags', '/admin/flags'],
];

export default function Overview() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/admin/overview')
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then(setData)
      .catch(() => setError('Could not load data. Is the server running on port 5000?'));
  }, []);

  if (error) return <p className="text-danger">{error}</p>;
  if (!data) return <p className="text-muted">Loading...</p>;

  const { stats, recentSignups } = data;
  const cards = [
    ['Total tenants', stats.totalTenants],
    ['Monthly revenue', `£${stats.monthlyRevenue.toLocaleString()}`],
    ['Active users', stats.activeUsers],
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-navy-700">Overview</h2>

      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map(([label, value]) => (
          <div key={label} className="bg-white border border-line rounded-lg p-4 shadow-sm">
            <p className="text-sm text-muted">{label}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-line rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold mb-3">Recent sign-ups</h3>
        {recentSignups.length === 0 ? (
          <p className="text-muted">No sign-ups yet.</p>
        ) : (
          recentSignups.map((t) => (
            <Link
              key={t.id}
              to={`/admin/tenants/${t.id}`}
              className="flex justify-between items-center py-2 px-2 rounded border-b border-line last:border-0 hover:bg-navy-50"
            >
              <span>{t.businessName}</span>
              <StatusBadge status={t.status} />
            </Link>
          ))
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {shortcuts.map(([label, to]) => (
          <Link key={to} to={to} className="bg-navy-700 text-white text-sm px-4 py-2 rounded-lg">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
