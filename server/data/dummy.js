// In-memory dummy data (Weeks 3-4). Replace with database in Weeks 5-6.

export const tenants = [
  { id: 't1', businessName: 'Ali Plumbing', ownerName: 'Ali Raza', email: 'ali@aliplumbing.com', phone: '0300-1111111', plan: 'Starter', status: 'Trial', vatNumber: '', usage: { quotes: 12, invoices: 4, jobs: 6 }, createdAt: '2026-10-14', trialEndsAt: '2026-10-28' },
  { id: 't2', businessName: 'Bright Electric', ownerName: 'Sara Khan', email: 'sara@brightelectric.com', phone: '0300-2222222', plan: 'Pro', status: 'Active', vatNumber: 'GB123456789', usage: { quotes: 85, invoices: 60, jobs: 54 }, createdAt: '2026-10-12', trialEndsAt: null },
  { id: 't3', businessName: 'SafeGas Services', ownerName: 'Usman Ahmed', email: 'usman@safegas.com', phone: '0300-3333333', plan: 'Pro', status: 'Active', vatNumber: 'GB987654321', usage: { quotes: 40, invoices: 31, jobs: 28 }, createdAt: '2026-10-10', trialEndsAt: null },
  { id: 't4', businessName: 'TopRoof Ltd', ownerName: 'Hamza Ali', email: 'hamza@toproof.com', phone: '0300-4444444', plan: 'Business', status: 'Active', vatNumber: 'GB555000111', usage: { quotes: 210, invoices: 180, jobs: 150 }, createdAt: '2026-09-20', trialEndsAt: null },
  { id: 't5', businessName: 'QuickFix Heating', ownerName: 'Bilal Shah', email: 'bilal@quickfix.com', phone: '0300-5555555', plan: 'Starter', status: 'Suspended', vatNumber: '', usage: { quotes: 5, invoices: 2, jobs: 1 }, createdAt: '2026-08-02', trialEndsAt: null },
];

export const tenantUsers = [
  { id: 'u1', tenantId: 't1', name: 'Ali Raza', email: 'ali@aliplumbing.com', role: 'owner', status: 'Active', lastLoginAt: '2026-10-15' },
  { id: 'u2', tenantId: 't2', name: 'Sara Khan', email: 'sara@brightelectric.com', role: 'owner', status: 'Active', lastLoginAt: '2026-10-16' },
  { id: 'u3', tenantId: 't2', name: 'Zain Malik', email: 'zain@brightelectric.com', role: 'tradesperson', status: 'Active', lastLoginAt: '2026-10-15' },
  { id: 'u4', tenantId: 't3', name: 'Usman Ahmed', email: 'usman@safegas.com', role: 'owner', status: 'Active', lastLoginAt: '2026-10-14' },
  { id: 'u5', tenantId: 't4', name: 'Hamza Ali', email: 'hamza@toproof.com', role: 'owner', status: 'Active', lastLoginAt: '2026-10-16' },
  { id: 'u6', tenantId: 't4', name: 'Adeel Khan', email: 'adeel@toproof.com', role: 'manager', status: 'Active', lastLoginAt: '2026-10-13' },
  { id: 'u7', tenantId: 't5', name: 'Bilal Shah', email: 'bilal@quickfix.com', role: 'owner', status: 'Disabled', lastLoginAt: '2026-08-30' },
];

export const planPrices = { Starter: 29, Pro: 79, Business: 149 };
