we are using react.jsx
# ScaleUp Internship: TradesDash Admin (Tenants Module)

Super Admin panel for **TradesDash**: manage tenants (companies), view their plans, usage and users.

> Group 3 (Platform and Public Site) · Student 1: Tenants (Super Admin core)

## Screens

| Screen | Route | Status |
|---|---|---|
| Overview | `/admin` | Done |
| Tenant Management | `/admin/tenants` | In progress |
| Tenant Detail | `/admin/tenants/:id` | In progress |

## Tech stack

- **Frontend:** React (Vite), Tailwind CSS v4, React Router, lucide-react
- **Backend:** Node.js, Express (in-memory dummy data for now, database comes later)
- **Deployment:** Render

## Project structure

```
.
├── client/          React frontend (port 5173)
│   └── src/admin/   Overview, TenantManagement, TenantDetail, layout, badge
├── server/          Express backend (port 5000)
│   ├── index.js
│   ├── routes/tenants.js
│   └── data/dummy.js
└── docs/
    ├── schema.md    tenants + tenant_users schema
    ├── routes.md    shared frontend + backend routes
    └── internship-guide.md   original internship instructions
```

## Getting started

Requirements: Node.js 20+, Git.

```bash
git clone https://github.com/inov8byhajra-ctrl/scaleupinternship.git
cd scaleupinternship
```

**Backend** (terminal 1)

```bash
cd server
cp .env.example .env     # Windows: copy .env.example .env
npm install
npm run dev
```

Check: open http://localhost:5000/api/admin/overview, you should see JSON.

**Frontend** (terminal 2)

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173/admin. Vite proxies `/api` calls to the backend, so use `fetch('/api/admin/...')` in React.

## API

| Method | Route | Purpose |
|---|---|---|
| GET | `/api/admin/overview` | stats + recent sign-ups |
| GET | `/api/admin/tenants?search=&status=&plan=` | list with filters |
| GET | `/api/admin/tenants/:id` | single tenant |
| GET | `/api/admin/tenants/:id/users` | users of a tenant |
| PATCH | `/api/admin/tenants/:id/status` | body: `{ "status": "Suspended" }` |

Full shared route list: [docs/routes.md](docs/routes.md). Database schema: [docs/schema.md](docs/schema.md).

## Contributing

1. `git pull origin main` to get the latest code.
2. Create a branch: `git checkout -b feature/<short-name>`.
3. Commit small and often with clear messages (`feat: add tenant search`, `fix: status badge color`).
4. `git push -u origin feature/<short-name>` and open a **Pull Request** into `main`.
5. Never commit `.env` or `node_modules` (already in `.gitignore`).

## Roadmap

- [x] Setup, layout, Overview screen
- [x] Backend routes with dummy data
- [ ] Tenant Management and Tenant Detail screens
- [ ] Connect frontend to API
- [ ] Database (tenants, tenant_users)
- [ ] Deploy on Render