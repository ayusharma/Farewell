
/*
Function to make APIPostCall
*/

function APIPostCall(url,data){
	var jqXhr = $.ajax({
		url:url,
		method:"POST",
		contentType:"application/json; charset=utf-8",
		dataType:"json",
		async:false,
		data:JSON.stringify(data)
	});

	return jqXhr.responseJSON;
}

/*
Function to make APIGetCall
*/

function APIGetCall(url){
	var jqXhr = $.ajax({
		url:url,
		method:"GET",
		contentType:"application/json; charset=utf-8",
		dataType:"json",
		async:false,
	});

	return jqXhr.responseJSON;
}


/*

*/
function imageOps(imgSrc)
{
var canvas = document.getElementById("leCanvas");
var context = canvas.getContext("2d");
context.globalCompositeOperation = "source-over";

var image = new Image();
image.src = imgSrc;
image.onload = function() {
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  // if (level < 2)
  //   return;

  var together = new Image();
  together.src = "images/together.jpg";
  together.onload = function() {
    context.globalCompositeOperation = "soft-light";
    context.drawImage(together, 1, 1, canvas.width, canvas.height);
  //
  //   if (level < 3)
  //     return;
  //
  //   gradient = context.createLinearGradient(0, canvas.height, canvas.width, canvas.height);
  //
  //   gradient.addColorStop(0.000, 'rgba(255, 0, 0, 1.000)');
  //   gradient.addColorStop(0.333, 'rgba(225, 255, 0, 1.000)');
  //   gradient.addColorStop(0.666, 'rgba(0, 255, 17, 1.000)');
  //   gradient.addColorStop(1.000, 'rgba(0, 55, 255, 1.000)');
  //
  //   context.fillStyle = gradient;
  //   context.fillRect(0, 0, canvas.width, canvas.height);
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
      testAPI(response);
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
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

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '807805989353037',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
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

    //getting facebook profile picture
    FB.api('me/picture?width=300', function(response) {

      $("#profile_picture").attr("src",response.data.url);
      console.log(response);
      imageOps(response.data.url);

      // document.getElementById('status').innerHTML =
      //   'Thanks for logging in, ' + response + '!';
    });



  }
