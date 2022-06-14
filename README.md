# Pulumi Template - Minimal AWS Serverless API

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/binzcodes/pulumi-templates)

This repo contains templates for pulumi new, which makes it easy to quickly get started building new Pulumi projects.

## AWS Nano Serverless - API Gateway DynamoDB

---

A bare-bones serverless API template using AWS API Gateway and Lambda functions serving a dynamic DynamoDB-based hit counter.

```bash
pulumi new https://github.com/binzcodes/pulumi-templates/aws-nano-dynamo-api-gateway
```

See [`README.md`](aws-nano-dynamo-api-gateway/README.md) for more.

## AWS Minimal Serverless - API Gateway DynamoDB

---

Builds a serverless API template extending `AWS Nano Serverless API` with linting, testing and CI/CD.

Uses AWS API Gateway and Lambda functions serving a dynamic DynamoDB-based hit counter.

```bash
pulumi new https://github.com/binzcodes/pulumi-templates/aws-minimal-dynamo-api-gateway
```

See [`README.md`](aws-minimal-dynamo-api-gateway/README.md) for more.

## AWS Nano serverless - Express DynamoDB API

---

A minimal serverless [Express](https://expressjs.com/) API template using Pulumi's cloud.HttpServer built on AWS API Gateway and Lambda functions, serving a dynamic DynamoDB-based hit counter.

```bash
pulumi new https://github.com/binzcodes/pulumi-templates/aws-nano-express-dynamo-api
```

See [`README.md`](aws-nano-express-dynamo-api/README.md) for more.

# Contributing

Contrbutions welcome

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/binzcodes/pulumi-templates)

# Todo

- Husky & Commitizen in minimal
