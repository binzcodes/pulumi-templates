# Nano Serverless - API Gateway DynamoDB

A minimal serverless API template using AWS API Gateway and Lambda functions serving a dynamic DynamoDB-based hit counter.

- Pulumi
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

Based on: [awsworkshop.com](https://pulumi.awsworkshop.io/additional-content/120_serverless_application_patterns/1_new_project.html)
