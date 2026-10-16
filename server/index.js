import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import tenantRoutes from './routes/tenants.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.use('/api/admin', tenantRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
