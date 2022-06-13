"use strict";
// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const ecs = require(".");
const x = require("..");
const utils = require("../utils");
class CapacityProviderService extends ecs.Service {
    constructor(name, args, opts = {}) {
        if (!args.taskDefinition) {
            throw new Error("The [taskDefinition] must be provided");
        }
        const cluster = args.cluster || x.ecs.Cluster.getDefault();
        const taskDefinition = args.taskDefinition;
        const securityGroups = x.ec2.getSecurityGroups(cluster.vpc, name, args.securityGroups || cluster.securityGroups, opts) || [];
        let assignPublicIp, networkConfiguration, subnets;
        if (taskDefinition instanceof ecs.FargateTaskDefinition) {
            assignPublicIp = utils.ifUndefined(args.assignPublicIp, true);
            subnets = ecs.getSubnets(cluster, args.subnets, assignPublicIp);
            networkConfiguration = {
                subnets,
                assignPublicIp,
                securityGroups: securityGroups.map(g => g.id),
            };
        }
        else {
            assignPublicIp = false;
            subnets = args.subnets || cluster.vpc.publicSubnetIds;
            networkConfiguration = taskDefinition.taskDefinition.networkMode.apply(n => {
                // The network configuration for the EC2 service. This parameter is required for task
                // definitions that use the `awsvpc` network mode to receive their own Elastic
                // Network Interface, and it is not supported for other network modes.
                if (n !== "awsvpc") {
                    return undefined;
                }
                return {
                    subnets,
                    assignPublicIp: false,
                    securityGroups: securityGroups.map(g => g.id),
                };
            });
        }
        super("awsx:x:ecs:CapacityProviderService", name, Object.assign(Object.assign({}, args), { taskDefinition,
            securityGroups,
            networkConfiguration }), opts);
        this.taskDefinition = taskDefinition;
        this.registerOutputs();
    }
}
exports.CapacityProviderService = CapacityProviderService;
// Make sure our exported args shape is compatible with the overwrite shape we're trying to provide.
const test = utils.checkCompat();
//# sourceMappingURL=capacityProviderService.js.map