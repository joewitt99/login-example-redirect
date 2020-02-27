
import OktaAuth from '@okta/okta-auth-js';

var config = {
    url: '[your okta url]'
};

var authClient = new OktaAuth(config);

export function ValidationEvent(event) {
    
    var username = document.forms["loginform"]["uname"].value;
    var password = document.forms["loginform"]["psw"].value;

    var redirectUri = decodeURIComponent(getQueryString('RelayState')) || config.url;

    authClient.signIn({
        username: username,
        password: password
      })
      .then(function(transaction) {
        if (transaction.status === 'SUCCESS') {
          authClient.session.setCookieAndRedirect(transaction.sessionToken, redirectUri); // Sets a cookie on redirect
        } else {
          throw 'We cannot handle the ' + transaction.status + ' status';
        }
      })
      .fail(function(err) {
        console.error(err);
      });
    event.preventDefault(); // disable normal form submit behavior
    return false;
};

//Function to obtaim the query string.  Note that your server application may handle this differently.
function getQueryString() {
    var key = false, res = {}, itm = null;
    // get the query string without the ?
    var qs = location.search.substring(1);
    // check for the key as an argument
    if (arguments.length > 0 && arguments[0].length > 1)
      key = arguments[0];
    // make a regex pattern to grab key/value
    var pattern = /([^&=]+)=([^&]*)/g;
    // loop the items in the query string, either
    // find a match to the argument, or build an object
    // with key/value pairs
    while (itm = pattern.exec(qs)) {
      if (key !== false && decodeURIComponent(itm[1]) === key)
        return decodeURIComponent(itm[2]);
      else if (key === false)
        res[decodeURIComponent(itm[1])] = decodeURIComponent(itm[2]);
    }

    return key === false ? res : null;
}