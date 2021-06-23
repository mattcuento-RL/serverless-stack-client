const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-mcuento",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://3uxoka90bk.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_HzTN6KY0C",
      APP_CLIENT_ID: "b1kfm51ua0bhp58j4r2727qt7",
      IDENTITY_POOL_ID: "us-east-1:36afe7e9-4351-4bd6-a7b4-52e0c3925a1e",
    },
  };
  
  export default config;