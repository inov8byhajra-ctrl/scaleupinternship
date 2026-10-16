import { Router } from 'express';
import { tenants, tenantUsers, planPrices } from '../data/dummy.js';

const router = Router();
const VALID_STATUS = ['Active', 'Trial', 'Suspended'];

// GET /api/admin/overview
router.get('/overview', (req, res) => {
  const paying = tenants.filter((t) => t.status === 'Active');
  const monthlyRevenue = paying.reduce((sum, t) => sum + (planPrices[t.plan] || 0), 0);
  const recentSignups = [...tenants]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 5)
    .map(({ id, businessName, plan, status, createdAt }) => ({ id, businessName, plan, status, createdAt }));

  res.json({
    stats: {
      totalTenants: tenants.length,
      monthlyRevenue,
      activeUsers: tenantUsers.filter((u) => u.status === 'Active').length,
    },
    recentSignups,
  });
});

// GET /api/admin/tenants?search=&status=&plan=
router.get('/tenants', (req, res) => {
  const { search = '', status = '', plan = '' } = req.query;
  const q = search.toLowerCase();
  const result = tenants.filter(
    (t) =>
      (!q || t.businessName.toLowerCase().includes(q) || t.email.toLowerCase().includes(q)) &&
      (!status || t.status === status) &&
      (!plan || t.plan === plan)
  );
  res.json(result);
});

// GET /api/admin/tenants/:id
router.get('/tenants/:id', (req, res) => {
  const tenant = tenants.find((t) => t.id === req.params.id);
  if (!tenant) return res.status(404).json({ message: 'Tenant not found' });
  res.json(tenant);
});

// GET /api/admin/tenants/:id/users
router.get('/tenants/:id/users', (req, res) => {
  res.json(tenantUsers.filter((u) => u.tenantId === req.params.id));
});

// PATCH /api/admin/tenants/:id/status   body: { status }
router.patch('/tenants/:id/status', (req, res) => {
  const tenant = tenants.find((t) => t.id === req.params.id);
  if (!tenant) return res.status(404).json({ message: 'Tenant not found' });
  const { status } = req.body;
  if (!VALID_STATUS.includes(status)) {
    return res.status(400).json({ message: `Status must be one of: ${VALID_STATUS.join(', ')}` });
  }
  tenant.status = status;
  // TODO (when S3 shares it): logAudit({ action: 'tenant.status', target: tenant.id, status })
  res.json(tenant);
});

export default router;
