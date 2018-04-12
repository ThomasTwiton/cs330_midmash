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

  for (let i = 0; i<5; i++){
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
   let contentString = '<div>' + '<img src=' + youpic + 'alt="Not Waldo" width="128" height="128">' + '<p>You found yourself!</p>' + '</div>'

   let youinfowindow = new google.maps.InfoWindow({
       content : contentString
   })

   youmarker.addListener('click', function(){
       counter =  counter +1
       youinfowindow.open(map, marker)
       alert("You found yourself in" + counter + "tries!")
   })

   if (youinfowindow.content != '<div>' + '<img src="./images/skull.png" alt="Not Waldo" width="128" height="128">' + '<p>You have found neither Waldo nor yourself</p>' + '</div>'){
    alert("You found yourself!")
}
  
}
    