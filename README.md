# Waiter

Service to take orders

# Please install these

- [`envrc`](https://direnv.net/) - unclutter your .profile
- node 12.x

# Installation

Install necessary libraries

```
pnpm i
```

# Setup

Remove existing packages and reinstall `node_modules`.

```
npm run bootstrap
```

# Build

Build monorepo project.

```
npm run build
```

# Deploy

Make sure you've logged in via stackery and make sure you have your env vars in your `.envrc`

```
// .envrc
export STACKERY_ENV_NAME=YOUR-STACKERY-ENV-NAME
export STACKERY_EMAIL=YOUR-STACKERY-EMAIL
export STACKERY_PASSWORD=YOUR-STACKERY-PASSWORD

// bash
stackery deploy -n waiter
```
