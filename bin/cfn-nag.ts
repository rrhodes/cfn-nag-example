#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CfnNagStack } from '../lib/cfn-nag-stack';

const app = new cdk.App();
new CfnNagStack(app, "CfnNagStack");
