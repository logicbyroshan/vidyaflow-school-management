# Contributing to VidyaFlow

Thank you for your interest in contributing to VidyaFlow! This document outlines the process and standards for contributing.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branching Strategy](#branching-strategy)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Requirements](#testing-requirements)

---

## Code of Conduct

All contributors are expected to uphold professionalism, respect, and constructive collaboration. Discrimination, harassment, or toxic behavior of any kind is not tolerated.

---

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- pnpm >= 9.0.0
- Python >= 3.13
- Docker & Docker Compose
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/logicbyroshan/vidyaflow-school-management.git
cd vidyaflow-school-management

# Install Node dependencies
pnpm install

# Setup backend
cd apps/backend
cp .env.example .env
poetry install

# Start infrastructure
docker compose -f docker/docker-compose.yml up postgres redis -d
```

---

## Development Workflow

1. **Create a branch** from `develop` (never from `main`)
2. **Make your changes** following the coding standards in `docs/04-coding-standards.md`
3. **Write tests** for all new functionality
4. **Run the full test suite** before submitting a PR
5. **Submit a Pull Request** against `develop`

---

## Branching Strategy

| Branch type | Naming pattern | Example |
|-------------|----------------|---------|
| Feature | `feature/VF-XXX-description` | `feature/VF-001-student-enrollment` |
| Bug fix | `fix/VF-XXX-description` | `fix/VF-042-login-redirect` |
| Hotfix | `hotfix/VF-XXX-description` | `hotfix/VF-099-payment-crash` |
| Chore | `chore/description` | `chore/update-dependencies` |
| Docs | `docs/description` | `docs/api-guidelines` |

---

## Commit Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification.

```
<type>(<scope>): <short summary>

<body>

<footer>
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `build`, `ci`

**Examples:**

```
feat(students): add enrollment status tracking
fix(auth): resolve JWT token refresh race condition
docs(api): update pagination examples
chore(deps): upgrade React to 19.1.0
```

---

## Pull Request Process

1. Ensure all CI checks pass
2. Add a clear description of what changed and why
3. Link any related issues using `Closes #XXX`
4. Request at least **one review** from a team member
5. Do not merge your own PR without a review

---

## Coding Standards

See [`docs/04-coding-standards.md`](docs/04-coding-standards.md) for the full coding standards document.

**Quick rules:**
- Python: follow Ruff rules, 119 char line length
- TypeScript: strict mode, no `any`
- All new code must have tests
- No commented-out code in PRs

---

## Testing Requirements

- **Backend:** pytest with minimum 80% coverage on new code
- **Frontend:** Vitest unit tests for utilities and hooks
- **All:** Tests must pass in CI before merge

---

## Questions?

Open a [Discussion](https://github.com/logicbyroshan/vidyaflow-school-management/discussions) or reach out to the maintainers.
