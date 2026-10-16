# Database Schema (Student 1) - share with the group in Week 1

## tenants
| Field | Type | Note |
|---|---|---|
| id | ObjectId / PK | |
| businessName | string | |
| ownerName | string | |
| email | string | unique |
| phone | string | |
| plan | string | Starter / Pro / Business (confirm with S2) |
| status | string | Active / Trial / Suspended |
| vatNumber | string | optional |
| usage | object | { quotes, invoices, jobs } |
| createdAt | date | |
| trialEndsAt | date | |

## tenant_users
| Field | Type | Note |
|---|---|---|
| id | ObjectId / PK | |
| tenantId | reference | tenants.id |
| name | string | |
| email | string | |
| role | string | owner / manager / tradesperson |
| status | string | Active / Disabled |
| lastLoginAt | date | |

## Who uses this
- S2 (Billing): tenants.plan, tenants.id
- S3 (Audit Log, Flags): tenants.id
- S4 (Trial signup): creates a new tenant
