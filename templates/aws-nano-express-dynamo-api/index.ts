import * as AWS from 'aws-sdk';
import * as aws from '@pulumi/aws';
import * as cloud from '@pulumi/cloud-aws';
import express from 'express';
import asyncHandler from 'express-async-handler';

const hits = new aws.dynamodb.Table('hits', {
  attributes: [{ name: 'Site', type: 'S' }],
  hashKey: 'Site',
  billingMode: 'PAY_PER_REQUEST',
});

const update = async () => {
  const dc = new AWS.DynamoDB.DocumentClient();
  const result = await dc
    .update({
      TableName: hits.name.get(),
      Key: { Site: 'ACMECorp' },
      UpdateExpression: 'SET Hits = if_not_exists(Hits, :zero) + :incr',
      ExpressionAttributeValues: { ':zero': 0, ':incr': 1 },
      ReturnValues: 'UPDATED_NEW',
    })
    .promise();

  return result.Attributes!.Hits;
};

const expressApp = new cloud.HttpServer('expressApp', () => {
  const app = express();

  app.get(
    '/',
    asyncHandler(async (_, res) => {
      const hits = await update();

      res.json({
        messgae: 'Welcome to ACMECorp!',
        hits,
      });
    })
  );

  return app;
});

export const { url } = expressApp;
