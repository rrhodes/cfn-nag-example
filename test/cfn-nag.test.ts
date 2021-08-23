import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CfnNag from '../lib/cfn-nag-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CfnNag.CfnNagStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
