import { Vpc } from '@aws-cdk/aws-ec2';
import { DatabaseCluster, DatabaseClusterEngine } from '@aws-cdk/aws-rds';
import * as cdk from '@aws-cdk/core';

export class CfnNagStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = Vpc.fromLookup(this, "Vpc", {
      vpcId: String(process.env.VPC_ID),
    });

    new DatabaseCluster(this, "DatabaseCluster", {
      engine: DatabaseClusterEngine.AURORA,
      instanceProps: {
        vpc,
      },
    });
  }
}
