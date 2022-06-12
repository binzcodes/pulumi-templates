import * as AWS from "aws-sdk";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const hits = new aws.dynamodb.Table("hits", {
  attributes: [{name: "Site", type: "S"}],
  hashKey: "Site",
  billingMode: "PAY_PER_REQUEST",
});

const logHitsEventHandler = async () => {
  const dc = new AWS.DynamoDB.DocumentClient();
  const result = await dc
    .update({
      TableName: hits.name.get(),
      Key: {Site: "ACMECorp"},
      UpdateExpression: "SET Hits = if_not_exists(Hits, :zero) + :incr",
      ExpressionAttributeValues: {":zero": 0, ":incr": 1},
      ReturnValues: "UPDATED_NEW",
    })
    .promise();
  return {
    statusCode: 200,
    headers: {"Content-Type": "text/json"},
    body: JSON.stringify({
      messgae: "Welcome to ACMECorp!",
      hits: result.Attributes!.Hits,
    }),
  };
};

const site = new awsx.apigateway.API("site", {
  routes: [
    {
      path: "/",
      method: "GET",
      eventHandler: logHitsEventHandler,
    },
  ],
});

export const url = site.url;
