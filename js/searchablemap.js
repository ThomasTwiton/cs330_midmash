counter = 0

function initMap() {
  var datastring = localStorage["latlng"]
  //console.log(datastring)  
  var uluru = JSON.parse(datastring)
  let you = Math.floor(Math.random() * uluru.length)
  console.log(you)
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 43.303, lng: -91.786}
  });
    
  for (let i = 0; i<uluru.length; i++){
      let marker = new google.maps.Marker({
        position: uluru[i],
        map: map
      });
      if (i==you){
        let youpic = localStorage["waldo"]
        //console.log(youpic)
        let contentString = '<div>' + '<img src=' + youpic + ' alt="You!">' + '<p>You found yourself!</p>' + '</div>'
        //console.log(contentString)
        let youinfowindow = new google.maps.InfoWindow({
            content : contentString
        })
     
        marker.addListener('click', function(){
            counter =  counter +1
            //youmarker not marker
            youinfowindow.open(map, marker)
            alert("You found yourself in " + counter + " tries!")
        })        
        }
    else{
        let contentString = '<div>' + '<img src="./images/skull.png" alt="Not Waldo" width="128" height="128">' + '<p>You have found neither Waldo nor yourself</p>' + '</div>'

        let infowindow = new google.maps.InfoWindow({
          content: contentString
        })
  
        marker.addListener('click', function() {
          counter = counter + 1
          infowindow.open(map, marker)
        }) 
      }  
    }
}
    