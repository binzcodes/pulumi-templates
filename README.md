# Pulumi Template - Minimal AWS Serverless API

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/binzcodes/pulumi-minimal-dynamodb-api)

This repo contains a template for pulumi new, which makes it easy to quickly get started building new Pulumi projects.

```bash
pulumi new https://github.com/binzcodes/pulumi-template-aws
```

Start a minimal serverless API template using AWS API Gateway and Lambda functions serving a dynamic DynamoDB-based hit counter.

## tools

- Pulumi
- AWS Lambda
- AWS API Gateway
- AWS DynamoDB
- Gitpod


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

# Contributing
Contrbutions welcome

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/binzcodes/pulumi-minimal-dynamodb-api)

# Todo
- Testing with jest
- CI/CD with Github Actions

Based on [pulumi.awsworkshop.com](https://pulumi.awsworkshop.io/additional-content/120_serverless_application_patterns/1_new_project.html)
