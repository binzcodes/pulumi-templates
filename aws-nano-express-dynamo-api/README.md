# Nano AWS serverless Express DynamoDB API

A bare-bones serverless [Express](https://expressjs.com/) API template using Pulumi's cloud.HttpServer built on AWS API Gateway and Lambda functions, serving a dynamic DynamoDB-based hit counter.

- [Express](https://expressjs.com/)
- Pulumi cloud.HttpServer
- AWS Lambda
- AWS API Gateway
- AWS DynamoDB

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
