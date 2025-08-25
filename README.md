# Ad Platform Demo

Monorepo skeleton for a SaaS advertising wallet demo. It contains:

- **apps/web** – Next.js 14 web client.
- **apps/api** – NestJS 10 API.
- **packages/domain** – domain logic.
- **packages/types** – shared DTOs.
- **packages/adapters** – mock adapters.

## Getting Started

```bash
pnpm install
pnpm -w dev # start web and api in parallel
```

### Scripts
- `pnpm -w lint`
- `pnpm -w typecheck`
- `pnpm -w test`
- `pnpm -w build`

See `ARCHITECTURE.md` and `API.md` for more details.
