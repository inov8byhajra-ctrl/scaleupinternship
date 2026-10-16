# Shared Routes (do NOT change without telling the group)

## Frontend routes (React Router)
| Screen | Route | Owner |
|---|---|---|
| Overview | /admin | S1 |
| Tenant Management | /admin/tenants | S1 |
| Tenant Detail | /admin/tenants/:id | S1 |
| Subscription & Billing | /admin/billing | S2 |
| Analytics | /admin/analytics | S2 |
| System Health | /admin/health | S3 |
| Feature Flags | /admin/flags | S3 |
| Audit Log | /admin/audit | S3 |

## Backend routes (S1)
| Method | Route | Purpose |
|---|---|---|
| GET | /api/admin/overview | stats + recent sign-ups |
| GET | /api/admin/tenants?search=&status=&plan= | list with filters |
| GET | /api/admin/tenants/:id | one tenant |
| GET | /api/admin/tenants/:id/users | that tenant's users |
| PATCH | /api/admin/tenants/:id/status | body: { "status": "Suspended" } |
