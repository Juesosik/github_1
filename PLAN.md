# Plan

1. Establish monorepo structure with pnpm workspaces.
2. Scaffold `apps/web` (Next.js) and `apps/api` (NestJS) apps with minimal code and health endpoints.
3. Add `packages/domain`, `packages/adapters`, `packages/types` with placeholders and simple domain logic.
4. Configure TypeScript, ESLint, Prettier, Vitest, lint-staged, Husky, and shared scripts.
5. Provide documentation: README, ARCHITECTURE, ASSUMPTIONS, API, ENV.example.
6. Set up GitHub Actions workflow for lint, typecheck, test, build.
7. Implement unit test for domain fee calculation and health check tests for API and web.
8. Ensure scripts run: dev, build, test, lint, typecheck, format.

## Risks and Mitigations
- **Dependency download failures**: use minimal dependencies and fallback versions.
- **Build or typecheck errors**: keep TypeScript configs simple; run checks after setup.
- **Test environment issues**: keep tests minimal and avoid external services.

## Estimations
- Repository setup and configs: 2h
- App scaffolding (web/api): 2h
- Domain package and tests: 1h
- Documentation and workflow: 1h
Total: ~6h
