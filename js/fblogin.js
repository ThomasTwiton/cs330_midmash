var fiftystates =[{lat: 32.806671, lng: -86.791130},{lat: 61.370716, lng: -152.404419},{lat: 33.729759, lng: -111.431221},{lat: 34.969704, lng: -92.373123},{lat: 36.116203, lng: -119.681564},{lat: 39.059811, lng: -105.311104},{lat: 41.597782, lng: -72.755371},{lat: 39.318523, lng: -75.507141},{lat: 27.766279, lng: -81.686783},{lat: 33.040619, lng: -83.643074},{lat: 21.094318, lng: -157.498337},{lat: 44.240459, lng: -114.478828},{lat: 40.349457, lng: -88.986137},{lat: 39.849426, lng: -86.258278},{lat: 42.011539, lng: -93.210526},{lat: 38.526600, lng: -96.726486},{lat: 37.668140, lng: -84.670067},{lat: 31.169546, lng: -91.867805},{lat: 44.693947, lng: -69.381927},{lat: 39.063946, lng: -76.802101},{lat: 42.230171, lng: -71.530106},{lat: 43.326618, lng: -84.536095},{lat: 45.694454, lng: -93.900192},{lat: 32.741646, lng: -89.678696},{lat: 38.456085, lng: -92.288368},{lat: 46.921925, lng: -110.454353},{lat: 41.125370, lng: -98.268082},{lat: 38.313515, lng: -117.055374},{lat: 43.452492, lng: -71.563896},{lat: 40.298904, lng: -74.521011},{lat: 34.840515, lng: -106.248482},{lat: 42.165726, lng: -74.948051},{lat: 35.630066, lng: -79.806419},{lat: 47.528912, lng: -99.784012},{lat: 40.388783, lng: -82.764915},{lat: 35.565342, lng: -96.928917},{lat: 44.572021, lng: -122.070938},{lat: 40.590752, lng: -77.209755},{lat: 41.680893, lng: -71.511780},{lat: 33.856892, lng: -80.945007},{lat: 44.299782, lng: -99.438828},{lat: 35.747845, lng: -86.692345},{lat: 31.054487, lng: -97.563461},{lat: 40.150032, lng: -111.862434},{lat: 44.045876, lng: -72.710686},{lat: 37.769337, lng: -78.169968},{lat: 47.400902, lng: -121.490494},{lat: 38.491226, lng: -80.954453},{lat: 44.268543, lng: -89.616508},{lat: 42.755966, lng: -107.302490}]
var continents = [{lat: 41.8781, lng: -87.6298}, {lat: 48.8566, lng: 2.3522}, {lat: 28.6139, lng: 77.2090}, {lat: -15.3878, lng: 28.3228}, {lat: -14.2350, lng: -51.9253}, {lat: -23.6980, lng: 133.8807}, {lat: -82.8628, lng: 135.0000}]
var randomlocations = []

function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  // .toFixed() returns string, so ' * 1' is a trick to convert to number
}



// This is called with the results from from FB.getLoginStatus().
 function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
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
      appId      : 164811644223295,
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
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
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

  function onClick() {
    FB.getLoginStatus(function(response){
      if(response.status === 'connected'){
        FB.api('/me?fields=picture.width(800).height(800)', function(response) {
        localStorage["waldo"] = response.picture.data.url;        
        gametype = document.getElementsByName("gametype")
        if (gametype[0].checked){
         let datastring = JSON.stringify(fiftystates)
          localStorage["latlng"] = datastring
        }
        if (gametype[1].checked){
          let datastring = JSON.stringify(continents)
          localStorage["latlng"] = datastring
        }
        if (gametype[2].checked){
          for(let i =0; i<20; i++){
            randomlocations[i] = {lat: getRandomInRange(-100, 100, 3), lng: getRandomInRange(-100, 100,3)}
          }
          let datastring = JSON.stringify(randomlocations)
          localStorage["latlng"] = datastring
        }
        });
        
        //FB.api('/me', function(response) {
        //  localStorage["waldo"] = "https://graph.facebook.com/" + response.id + "/picture?type=square"
        //})
        FB.logout(function(response){console.log("Bye! Have fun finding yourself")})
        window.location = "https://thomastwiton.github.io/cs330_midmash/mapsearch.html"
      } 
      else{
        alert("Please Log In before continuing")
      }
    })
   
  }
