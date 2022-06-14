# Pulumi Template - Minimal AWS Serverless API

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/binzcodes/pulumi-templates)

This repo contains templates for pulumi new, which makes it easy to quickly get started building new Pulumi projects.

# AWS Nano Serverless API

```bash
pulumi new https://github.com/binzcodes/pulumi-templates/aws-nano-dynamo-api-gateway
```

Start a minimal serverless API template using AWS API Gateway and Lambda functions serving a dynamic DynamoDB-based hit counter.

See [`README.md`](aws-nano-dynamo-api-gateway/README.md) for documentation.

## Tooling
- Typescript

## Infrastructure
- Pulumi
- AWS Lambda
- AWS API Gateway
- AWS DynamoDB

# AWS Minimal Serverless API
Builds a serverless API template extending `Nano AWS Serverless API` with linting, testing and CI/CD.

Uses AWS API Gateway and Lambda functions serving a dynamic DynamoDB-based hit counter.

```bash
pulumi new https://github.com/binzcodes/pulumi-templates/aws-minimal-dynamo-api-gateway
```


See [`README.md`](aws-minimal-dynamo-api-gateway/README.md) for documentation.

### Tooling
- Typescript
- Jest
- eslint
- Prettier

# CI/CD
- Pulumi
- Github Actions
- Gitpod

### Infrastructure
- Pulumi
- AWS Lambda
- AWS API Gateway
- AWS DynamoDB

# Contributing

Contrbutions welcome

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/binzcodes/pulumi-templates)

# Todo

- Husky & Commitizen
