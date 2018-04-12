counter = 0

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

function initMap() {
  var uluru = {lat: getRandomInRange(-150, 150, 3), lng: getRandomInRange(-150, 150, 3)};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 43.303, lng: -91.786}
  });

  for (let i = 0; i<20; i++){
      let marker = new google.maps.Marker({
        position: uluru,
        map: map
      }); 

      uluru = {lat: getRandomInRange(-150, 150, 3), lng: getRandomInRange(-150, 150, 3)};
      let contentString = '<div>' + '<img src="./images/skull.png" alt="Not Waldo" width="128" height="128">' + '<p>You have found neither Waldo nor yourself</p>' + '</div>'

      let infowindow = new google.maps.InfoWindow({
        content: contentString
      })

      marker.addListener('click', function() {
        counter = counter + 1
        infowindow.open(map, marker)
      })
  }
   let youmarker = new google.maps.Marker({
       position: uluru,
       map: map
   })
   let youpic = localStorage["waldo"]
   console.log(youpic)
   let contentString = '<div>' + '<img src=' + youpic + ' alt="You!">' + '<p>You found yourself!</p>' + '</div>'
   console.log(contentString)
   let youinfowindow = new google.maps.InfoWindow({
       content : contentString
   })

   youmarker.addListener('click', function(){
       counter =  counter +1
       //youmarker not marker
       youinfowindow.open(map, youmarker)
       alert("You found yourself in" + counter + " tries!")
   })

}
    