// v3.1.0
//Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Cagliari, IT',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = weather.city + ' - ' + weather.temp + '&deg;' + weather.units.temp + ' - ' + weather.currently +' -  <i class="icon-'+weather.code+'"></i>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});

//      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
