# Architecture

```
UI (Next.js) ↔ API Gateway (NestJS) ↔ Domain Services ↔ Repositories (Prisma) ↔ PostgreSQL
            ↘ Adapters (mocked bank/CRM/platform)
            ↘ Redis/BullMQ for background jobs
```

This demo only wires the layers and health checks.
