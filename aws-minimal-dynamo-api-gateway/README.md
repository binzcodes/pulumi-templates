# Minimal Serverless - API Gateway DynamoDB

Start a minimal serverless API template using AWS API Gateway and Lambda functions serving a dynamic DynamoDB-based hit counter.

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
- Jest
- eslint
- Prettier

### CI/CD

- Pulumi
- Github Actions
- Gitpod

### Infrastructure

- Pulumi
- AWS Lambda
- AWS API Gateway
- AWS DynamoDB
