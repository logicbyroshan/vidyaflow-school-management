# 10 — Git Workflow

## Branch Strategy (Git Flow)

```
main          ← Production-ready code only. Protected.
  └─ develop  ← Integration branch. All features merge here.
       ├─ feature/VF-123-student-enrolment
       ├─ fix/VF-456-fee-calculation-bug
       ├─ chore/upgrade-react-19
       └─ release/v1.2.0 ← Release preparation branch
```

## Branch Naming

```
feature/<ticket-id>-<short-description>
fix/<ticket-id>-<short-description>
chore/<description>
docs/<description>
release/v<major>.<minor>.<patch>
hotfix/<ticket-id>-<short-description>
```

**Examples**:
```
feature/VF-101-student-admission-form
fix/VF-202-attendance-date-calculation
chore/update-turbo-to-2.1
hotfix/VF-999-login-token-expiry
```

## Pull Request Process

1. Create a branch from `develop` (or `main` for hotfixes)
2. Implement your change following coding standards
3. Write tests achieving ≥80% coverage on new code
4. Open a PR targeting `develop`
5. Fill out the PR template completely
6. Require **2 approvals** before merging
7. Squash merge into develop

## Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short description>

[optional body — explain WHY not WHAT]

[optional footer: BREAKING CHANGE, Closes #123]
```

### Types

| Type | When to use |
|------|------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Formatting, no logic change |
| `refactor` | Code restructure, no behavior change |
| `test` | Adding/updating tests |
| `chore` | Tooling, dependencies, config |
| `perf` | Performance improvement |
| `ci` | CI/CD pipeline changes |
| `revert` | Revert a previous commit |

## Release Process

1. Create `release/vX.Y.Z` from `develop`
2. Run full test suite, fix any failures
3. Update `CHANGELOG.md` and bump versions
4. Merge release branch → `main`
5. Tag `main` with `vX.Y.Z`
6. Merge `main` → `develop` (keep in sync)
7. Deploy tagged version to production

## Protected Branch Rules

| Branch | Rules |
|--------|-------|
| `main` | Requires 2 reviews, CI must pass, no direct push, no force push |
| `develop` | Requires 1 review, CI must pass, no force push |

---

*Last updated: 2026-07-02*
