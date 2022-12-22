import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-west-2_CWgkUJntW",
  ClientId: "7p7agmabh5j0uflrlkri2a7to6",
};

export default new CognitoUserPool(poolData);
