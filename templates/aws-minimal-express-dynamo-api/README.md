# Minimal AWS serverless Express DynamoDB API

A minimal serverless [Express](https://expressjs.com/) API template using Pulumi's cloud.HttpServer built on AWS API Gateway and Lambda functions, serving a dynamic DynamoDB-based hit counter.

## Run

---

You wil need [Pulumi cli](https://www.pulumi.com/docs/get-started/install/), then:

```bash
# Deploy resources:
pulumi up

# Test the endpoint:
pulumi stack select
for i in {1..5}; do curl $(pulumi stack output url); done

# Clean up resources:
pulumi destroy
pulumi stack rm
```

## About

---

### Tooling

- Typescript
- [Express](https://expressjs.com/)
- Jest
- eslint
- Prettier

### CI/CD

- Pulumi
- Github Actions
- Gitpod

### Infrastructure

- Pulumi cloud.HttpServer
- AWS Lambda
- AWS API Gateway
- AWS DynamoDB
