/* eslint-disable */
import Hammer from 'hammerjs';
import 'waypoints/lib/jquery.waypoints.min.js';
import 'tilt.js';

export default {
  init() {
    // JavaScript to be fired on the home page

    // MAP FUNCTIONS
    const hammertime = new Hammer(document.getElementById('billboards'));
    const map = $('.home-billboards__map');
    // If section is swiped on
    hammertime.on('swipeleft', function() {
      if ($(window).width() < 1200) {
        map.animate({
          left: '0%',
        }, 300);
      }
    });
    hammertime.on('swiperight', function() {
      if ($(window).width() < 960) {
        map.animate({
          left: '100%',
        }, 300);
      }
    });

    $('.home-billboards-map__header a').on('click', e => {
      e.preventDefault();

      map.animate({
        left: '100%',
      }, 300);
    });


    // NAVIGATION
    // Brand Logo
    $(".banner a.brand").on('click', e => {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    // Adding nav item class
    new Waypoint({
      element: $('#about'),
      handler: direction => {
        if (direction === 'down') {
          // Removing active class
          removeActiveClass();
          // Adding active class
          $('nav ul li a[href=\'#about\']').addClass('active');
        } else if (direction === 'up') {
          // Removing active class
          removeActiveClass();
        }
      },
      offset: 20,
    });
    new Waypoint({
      element: $('#billboards'),
      handler: direction => {
        if (direction === 'down') {
          // Removing active class
          removeActiveClass();
          // Adding active class
          $('nav ul li a[href=\'#billboards\']').addClass('active');
          $('.brand img').addClass('billboard');
        } else if (direction === 'up') {
          // Removing active class
          removeActiveClass();
          $('.brand img').removeClass('billboard');
          // Adding active class
          $('nav ul li a[href=\'#about\']').addClass('active');
        }
      },
      offset: 20,
    });
    new Waypoint({
      element: $('#contact'),
      handler: direction => {
        if (direction === 'down') {
          // Removing active class
          removeActiveClass();
          $('.brand img').removeClass('billboard');
          // Adding active class
          $('nav ul li a[href=\'#contact\']').addClass('active');
        } else if (direction === 'up') {
          // Removing active class
          removeActiveClass();
          $('.brand img').addClass('billboard');
          // Adding active class
          $('nav ul li a[href=\'#billboards\']').addClass('active');
        }
      },
      offset: 20,
    });

    // Smooth Scrolling thanks to CSS-Tricks
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top,
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            });
          }
        }
      });
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    // $('.home__top').tilt({
    //   maxTilt    : 5,
    //   perspective: 1000,
    // });

    // BILLBOARD MAP
    // Building the map
    var mapZoom;
    if ($(window).width() < 700) {
      mapZoom = 9;
    } else if ($(window).width() >= 700 && $(window).width() < 1800) {
      mapZoom = 10;
    } else {
      mapZoom = 11;
    }

    const billboardsMap = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33.6872342, lng: -102.0668504},
        zoom: mapZoom,
        disableDefaultUI: true,
        styles: [
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#212121"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#212121"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#181818"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#1b1b1b"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#2c2c2c"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#8a8a8a"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#373737"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#3c3c3c"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#4e4e4e"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#000000"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#3d3d3d"
                      }
                    ]
                  }
                ]
      });

    // Creating markers
    const markerIcon = {
            url:'/app/themes/anglin-outdoor/dist/images/circle.png',
            anchor: new google.maps.Point(10, 10),
          };
    var markerInfoContent = `<div class="home-billboards-map__specs">
        <h3>Idalou, Tx</h3>
        <ul>
          <li><span>Location:</span> SE Corner of HWYS 82/62 &amp; Main St.</li>
          <li><span>Size:</span> 6'x12'</li>
          <li><span>Impressions:</span> 68,500 Weekly</li>
          <li><span>Lights:</span> No</li>
        </ul>
      </div>`;
    var markerInfoWindow = new google.maps.InfoWindow({
      content: markerInfoContent,
    });

    const billboard1 = new google.maps.Marker({
      position: {lat: 33.9039, lng: -102.3196},
      title: 'ATLA1',
      icon: markerIcon,
    });
    const billboard2 = new google.maps.Marker({
      position: {lat: 33.9041, lng: -102.3182},
      title: 'ATLA2',
      icon: markerIcon,
    });
    const billboard3 = new google.maps.Marker({
      position: {lat: 33.9227, lng: -102.3249},
      title: 'ATLA3',
      icon: markerIcon,
    });
    const billboard4 = new google.maps.Marker({
      position: {lat: 33.6665, lng: -101.6799},
      title: 'ATLU1',
      icon: markerIcon,
    });
    billboard4.addListener('click', function() {
      markerInfoWindow.open(billboardsMap, billboard4);
    });
    const billboard5 = new google.maps.Marker({
      position: {lat: 33.6443, lng: -101.9407},
      title: 'ATLU2',
      icon: markerIcon,
    });
    const billboard6 = new google.maps.Marker({
      position: {lat: 33.4214, lng: -101.6442},
      title: 'ATLU3',
      icon: markerIcon,
    });

    // Setting markers to the map
    billboard1.setMap(billboardsMap);
    billboard2.setMap(billboardsMap);
    billboard3.setMap(billboardsMap);
    billboard4.setMap(billboardsMap);
    billboard5.setMap(billboardsMap);
    billboard6.setMap(billboardsMap);
  },
};


function removeActiveClass() {
  $('nav ul li a[href=\'#about\']').removeClass('active');
  $('nav ul li a[href=\'#billboards\']').removeClass('active');
  $('nav ul li a[href=\'#contact\']').removeClass('active');
}
