# hng_boilerplate_nextjs

## Overview

[Description]

## Getting Started

In order to run this app locally, you should have the following programs installed on your computer:

- [nodejs](https://nodejs.org/)>=20.0.0
- [pnpm](https://yarnpkg.com/)>=9.4.0

#### Clone this repository

```
git clone git@github.com/hngprojects/hng_boilerplate_nextjs.git
cd hng_boilerplate_nextjs
```

#### Install dependencies

```
pnpm install
```

#### Start the server

```
pnpm dev
```
## Continuous Integration (CI)

This project uses **GitHub Actions** for Continuous Integration. The pipeline runs automatically on every push and pull request targeting the `main` and `dev` branches.

### Pipeline Location

`.github/workflows/ci.yaml`

### What the CI Pipeline Checks

| Step          | Tool             | Command               | Description                                                 |
| ------------- | ---------------- | --------------------- | ----------------------------------------------------------- |
| Formatting    | Prettier         | `pnpm check-format` | Ensures consistent code style across the codebase           |
| Linting       | ESLint (Next.js) | `pnpm lint`         | Catches code quality issues and enforces Next.js lint rules |
| Type Checking | TypeScript       | `pnpm check-types`  | Validates all types with no emitted output                  |
| Build         | Next.js          | `pnpm build`        | Verifies the app compiles successfully                      |

### Triggering the Pipeline

The CI pipeline is triggered on:

- **Push** to `main` or `dev`
- **Pull Request** targeting `main` or `dev`

All checks must pass before a PR can be merged.

### Pipeline Optimization

Dependencies are cached using the `pnpm` store to speed up subsequent runs. The cache key is based on `pnpm-lock.yaml`, so it invalidates automatically when dependencies change.

## Contributing

Please see [CONTRIBUTING](./CONTRIBUTING.md)
