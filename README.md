# login-example-redirect

This example provides a basic custom login form.  It utilizes Okta's auth js library to perform username/password validation then a set cookie session redirect to send the user to a target RelayState.  This example supports the OIDC authorization flow which redirects the user to an idp.  You can also call specify the RelayState as a request parameter.

Steps to configure:
1. open the src/index.js and update with your Okta tenant url (i.e. https://mydomain.oktapreview.com)

## Building and deployment

To begin, you'll need to install `node.js` version >10:

```console
$ npm install
$ npm run build
$ npm start
```

A `dist` folder will be create containing the index.html and minified js file which performs the authentication.

npm start - starts a local http server on port 9000 for local testing.

This can be deployed to any webserver, amazon s3 or equivalent.
