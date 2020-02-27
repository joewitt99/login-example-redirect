# login-handler-router

This example provides a basic router solution for overriding the Okta landing page.  It uses OIDC and Okta groups to determine a landing page when a user goes directly to Okta's landing page.

Steps to configure:
1. Request Federation Broker mode feature flag
2. Create OIDC application in Okta
3. Modify index.js to provide your application and tenant configurations 
4. Deploy to webserver.

## Building and deployment

To begin, you'll need to install `node.js` version >10:

```console
$ npm install
$ npm run build
```

A `dist` folder will be create containing the index.html and minified js file which performs the OIDC and router logic.

This can be deployed to any webserver, amazon s3 or equivalent.
