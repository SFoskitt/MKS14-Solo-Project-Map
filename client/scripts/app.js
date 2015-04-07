
var app = {};

app.init = function() {
	this.server = "http://127.0.0.1:3000",
	this.contentType = "text/plain"

  var map = L.map('map').setView([30.2697005,-97.7425659], 15);
  var marker = L.marker([30.2697005,-97.7425659]).addTo(map);
  
  L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
    type: 'map',
    ext: 'jpg',
    attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: '1234'
  }).addTo(map);

  $('#searchForm').on('submit', function (e) {
    e.preventDefault()
      $.ajax({
        url: app.server,
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function (data) {
          app.setMarkers(data);
          console.log('app.init ajax success');
        },
        error: function (data) {
          console.error('app.init ajax fail');
        }
      });
  });
}

app.setMarkers = function(data){
  app.init();
  console.log("in setmarkers, the data is", data);
}

$(document).on('ready', function() {
  
  app.init();

  $.post( "ajax/index.html", function( data ) {
    app.setMarkers(data)
  });

});

// $.ajax({
//   type: "POST",
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType
// });

    // var zip = $('#search').val();
    // var zipRegex = /^\d{5}$/;

    // if (!zipRegex.test(zip))
    // {
    //     alert("Five digit zipcodes only, please");
    // }
    // else
    // {
    //   console.log("submit worked");   
    //   console.log("input value is ", zip);
    // }

