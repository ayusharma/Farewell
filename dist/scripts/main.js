"use strict";function downloadCanvas(t,n,e){t.href=document.getElementById(n).toDataURL(),t.download=e}function imageOps(t){var n,e=document.getElementById("leCanvas"),o=e.getContext("2d");o.globalCompositeOperation="source-over",n=new Image,n.setAttribute("crossOrigin","anonymous"),n.src=t,n.onload=function(){var t;o.drawImage(n,0,0,e.width,e.height),t=new Image,t.setAttribute("crossOrigin","anonymous"),t.src="images/together.png",t.onload=function(){o.drawImage(t,0,0,e.width,e.height)}}}function statusChangeCallback(t){"connected"===t.status?($("#loginbutton").css("display","none"),testAPI(t)):"not_authorized"===t.status}function checkLoginState(){FB.getLoginStatus(function(t){statusChangeCallback(t)})}function fblogin(){FB.login(function(t){"connected"===t.status&&($("#loginbutton").css("display","none"),testAPI(t))})}function testAPI(t){FB.api("me/albums",function(t){console.log(t)}),FB.api("me/picture?width=400",function(t){console.log(t),$("#downloadbutton,#profilepic").css("display","block"),imageOps(t.data.url)})}window.fbAsyncInit=function(){FB.init({appId:"807805989353037",cookie:!0,xfbml:!1,version:"v2.5"}),FB.getLoginStatus(function(t){statusChangeCallback(t)})},function(t,n,e){var o,a=t.getElementsByTagName(n)[0];t.getElementById(e)||(o=t.createElement(n),o.id=e,o.src="//connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(o,a))}(document,"script","facebook-jssdk");