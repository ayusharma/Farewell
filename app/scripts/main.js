
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

function imageOps(imgSrc) {

  var canvas = document.getElementById("leCanvas");
  var context = canvas.getContext("2d");
  context.globalCompositeOperation = "source-over";

  var image = new Image();
  image.setAttribute('crossOrigin', 'anonymous');
  image.src = imgSrc;

  image.onload = function() {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);


    var together = new Image();
    together.setAttribute('crossOrigin', 'anonymous');
    together.src = "images/together.png";
    together.onload = function() {
      // context.globalCompositeOperation = "soft-light";
      context.drawImage(together, 0, 0, canvas.width, canvas.height);

    };
  };
}


// This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.

      $('#loginbutton').css('display','none');
      testAPI(response);
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      // document.getElementById('status').innerHTML = 'Please log ' +
      //   'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      // document.getElementById('status').innerHTML = 'Please log ' +
      //   'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function fblogin(){
    FB.login(function(response){
      if (response.status === 'connected') {
        $('#loginbutton').css('display','none');
        testAPI(response);
      }
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '807805989353037',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : false,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });

  // Now that we've initialized the JavaScript SDK, we call
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI(access_token) {

    console.log('Welcome!  Fetching your information.... ');

    var access_token = access_token;

    console.log(access_token)

    FB.api('me/albums',function(response) {
      console.log(response);
    });

    //getting facebook profile picture
    FB.api('me/picture?width=250', function(response) {
      console.log(response)
      $('#downloadbutton,#profilepic').css('display','block');
      imageOps(response.data.url);

    });
  }
