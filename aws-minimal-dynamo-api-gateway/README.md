# Pulumi Minimal AWS DynamoDB API

Start a minimal serverless API template using AWS API Gateway and Lambda functions serving a dynamic DynamoDB-based hit counter.

# run

To use this template install [Pulumi cli](https://www.pulumi.com/docs/get-started/install/) and run:

```bash
pulumi new https://github.com/binzcodes/pulumi-template-aws
```

Deploy resources:

```bash
pulumi up
```

Test the endpoint:

```bash
pulumi stack select && \
for i in {1..5}; do curl $(pulumi stack output url); done
```

Clean up resources:

```bash
pulumi destroy
pulumi stack rm
```
