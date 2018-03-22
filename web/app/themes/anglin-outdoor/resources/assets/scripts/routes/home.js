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
    // } else if ($(window).width() >= 700 && $(window).width() < 1800) {
    //   mapZoom = 10;
    } else {
      mapZoom = 10;
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


    // CREATING BILLBOARDS
    const billboards = [
      {
        name: 'ATDW1',
        market: 'This billboard is located on HWY 87 right in the middle of Lamesa TX. Great for traffic headed Southbound to Big Spring or San Angelo.',
        image: 'ATDW1.jpg',
        city: 'Lamesa',
        state: 'Tx',
        location: 'Lamesa, TX in between N 15th & N 16th St.',
        lat: 32.7478139,
        lng: -101.9540387,
        gps: ['32°44\'52.13"N', '101°57\'6.66"W'],
        position: 'Right Read',
        size: '6x12',
        illuminated: 'No',
        faces: 2,
        impressions: 86065
      },
      {
        name: 'ATLA1',
        market: 'This board is located on a busy US 84 in Littlefield TX. Great for westbound travelers to Littlefield, Muleshoe, & Clovis.',
        image: 'ATLA1.jpg',
        city: 'Littlefield',
        state: 'Tx',
        location: '1/2 Mile East of HWY 385',
        lat: 33.9039,
        lng: -102.3196,
        gps: ['33°54\'14.26"N', '102°19\'5.62"W'],
        position: 'Right Read',
        size: '12x24',
        illuminated: 'No',
        faces: 4,
        impressions: 60053
      },
      {
        name: 'ATLA2',
        market: 'This board is located on US 84 and located perfectly for a "next exit" sign to Littlefield, & Levelland, but also great for traffic to Muleshoe & Clovis.',
        image: 'ATLA2.jpg',
        city: 'Littlefield',
        state: 'Tx',
        location: '1/4 mile east of US 385 & US 84 Intersection',
        lat: 33.9041,
        lng: -102.3182,
        gps: ['33°54\'14.85"N', '102°19\'10.69"W'],
        position: 'Right Read',
        size: '12x24',
        illuminated: 'No',
        faces: 4,
        impressions: 60053
      },
      {
        name: 'ATLA3',
        market: 'This billboard is located in Littlefield, TX at the intersection of US 385 & Loop 430. This billboard is perfect for traffic headed to Dimmitt, Muleshoe, or Levelland.',
        image: 'ATLA3.jpeg',
        city: 'Littlefield',
        state: 'Tx',
        location: 'Intersection of US 385 & Loop 430',
        lat: 33.9227,
        lng: -102.3249,
        gps: ['33°55\'21.56"N', '102°19\'29.80"W'],
        position: 'Right Read',
        size: '8x16',
        illuminated: 'No',
        faces: 4,
        impressions: 18403
      },
      {
        name: 'ATLU1',
        market: '',
        image: '',
        city: 'Idalou',
        state: 'Tx',
        location: 'SE Corner of HWYS 82/62 & Main St.',
        lat: 33.6665,
        lng: -101.6799,
        gps: [],
        position: 'Right Read',
        size: '6x12',
        illuminated: 'No',
        faces: 4,
        impressions: 68500
      },
      {
        name: 'ATLU2',
        market: 'This billboard is located in Lubbock, TX at the intersection of Frankford Ave & US 84. This billboard is great for inbound traffic into Lubbock.',
        image: 'ATLU2.jpg',
        city: 'Lubbock',
        state: 'Tx',
        location: 'NW Corner of Intersection of US 84 & Frankford Ave',
        lat: 33.6443,
        lng: -101.9407,
        gps: ['33°38\'39.71"N', '101°56\'26.55"W'],
        position: 'Right Read',
        size: '12x25',
        illuminated: 'No',
        faces: 2,
        impressions: 106000
      },
      {
        name: 'ATLU3',
        market: 'This billboard is located on US 84 in Slaton, TX. This is perfect for Westbound traffic towards Lubbock, or Clovis.',
        image: 'ATLU3.jpg',
        city: 'Slaton',
        state: 'Tx',
        location: 'Northwest corner of US 84 & 9th st.',
        lat: 33.4214,
        lng: -101.6442,
        gps: ['33°38\'39.71"N', '101°56\'26.55"W'],
        position: 'Right Read',
        size: '10x20',
        illuminated: 'No',
        faces: 4,
        impressions: 98000
      },
      {
        name: 'ATLY2',
        market: 'This billboard is located on HWY 380 right next to Allsups and perfect for in-town traffic or traffic headed Westbound to Brownfield.',
        image: 'ATLY2.jpg',
        city: 'Tahoka',
        state: 'Tx',
        location: 'Tahoka, TX in between Ave L & M',
        lat: 33.166347,
        lng: -101.8032327,
        gps: ['33°09\'58.9"N', '101°48\'03.8"W'],
        position: 'Right Read',
        size: '6x12',
        illuminated: 'No',
        faces: 2,
        impressions: 20489
      }
    ];
    // Initally adding markers to map
    let currentMarkers = addBillboardMarkers(billboardsMap, billboards);

    // Building out the locations
    buildAvailableLocations(billboards);

    // Move the map based on the location that's clicked
    $('.home__billboards ul li a').on('click', function(e) {
      e.preventDefault();
      const location = { lat: $(this).data('billboard-lat'), lng: $(this).data('billboard-lng') };

      let zoomDistance = 13;

      if ($(window).width() < 1200) {
        zoomDistance = 11;
        console.log(billboardsMap);
        $('.home-billboards__map').animate({
          left: '0%',
        }, 300);
      }

      // Changing map location
      newMapLocation(billboardsMap, location);
      // Changing map zoom
      billboardsMap.setZoom(zoomDistance);
    });
  },
};

/**
 * Removes the active class from the navigation
 *
 */
function removeActiveClass() {
  $('nav ul li a[href=\'#about\']').removeClass('active');
  $('nav ul li a[href=\'#billboards\']').removeClass('active');
  $('nav ul li a[href=\'#contact\']').removeClass('active');
}


/**
 * Adds billboard markers to the map
 *
 * @param {Object} map        - Google Maps map object
 * @param {Array}  billboards - An array of billboard objects
 * @return {Array} allMarkers - An array of Google Maps Markers
 */
function addBillboardMarkers(map, billboards) {
  let allMarkers = [];

  // Going through billboards array and creating markers
  $.each(billboards, (index, value) => {
    // Setting the map icon
    const markerIcon = {
            url:'/app/themes/anglin-outdoor/dist/images/circle.png',
            anchor: new google.maps.Point(10, 10),
          };

    // Creating the content for the info window
    let markerInfoContent = `<div class="home-billboards-map__specs">`;
    if (value.image !== '' && value.image !== null) {
      markerInfoContent += `<img src="/app/themes/anglin-outdoor/dist/images/billboards/${value.image}" alt="${value.name}" />`;
    }
    markerInfoContent += `<h3>${value.city}, ${value.state}</h3>`;
    if (value.market !== '' && value.market !== null) {
      markerInfoContent += `<p>${value.market}</p>`;
    }
    markerInfoContent += `<ul>`;
    markerInfoContent += `<li><span>Location:</span> ${value.location}</li>`;
    if (value.gps.length !== 0) {
      markerInfoContent += `<li><span>GPS:</span> ${value.gps[0]}, ${value.gps[1]}</li>`;
    }
    markerInfoContent += `<li><span>Size:</span> ${value.size}</li>`;
    markerInfoContent += `<li><span>Faces:</span> ${value.faces}</li>`;
    markerInfoContent += `<li><span>Impressions:</span> ${value.impressions} Weekly</li>`;
    markerInfoContent += `<li><span>Illuminated:</span> ${value.illuminated}</li>`;
    markerInfoContent += `</ul>`;
    markerInfoContent += `<div class="home-billboards-map-specs__links">`;
    markerInfoContent += `<a href="mailto:shawn@anglinoutdoor.com?subject=Billboard ${value.name} in ${value.city}, ${value.state}">Email</a>`;
    markerInfoContent += `<a href="tel:8061234567">Call</a>`;
    markerInfoContent += `</div>`;
    markerInfoContent += `</div>`;

    // Appending the content to the info window
    const markerInfoWindow = new google.maps.InfoWindow({
      content: markerInfoContent,
    });

    // Creating the marker for the map
    const billboardMarker = new google.maps.Marker({
      position: {lat: value.lat, lng: value.lng},
      title: value.name,
      icon: markerIcon,
      animation: google.maps.Animation.DROP,
    });

    // Putting the marker on the map
    billboardMarker.setMap(map);

    // Adding the marker to the allMarkers array
    allMarkers.push(billboardMarker);

    // Adding the info window to the marker
    billboardMarker.addListener('click', function() {
      // Opening the popup window
      markerInfoWindow.open(map, billboardMarker);

      // Hiding the maps header
      $('.home-billboards-map__header').addClass('hidden');

      $('.gm-style > div > div > div > div > div > img').on('click', function() {
        // Showing the map header
        $('.home-billboards-map__header').removeClass('hidden');
      });
    });
  });

  return allMarkers;
}

/**
 * Removes all the markers from the map
 *
 * @param {Array} markers - An array of Google Map Markers
 * @return {Array} markers - The same array put in but emptied
 */
function removeBillboardMarkers(markers) {
  $.each(markers, (index, marker) => {
    marker.setMap(null);
  });

  markers.length = 0;

  return markers;
}

/**
 * Builds the available locations list for the billboards map
 *
 * @param {Array} billboards - Array of billboard objects
 */
function buildAvailableLocations(billboards) {
  // Array to hold available locations
  let availableLocations = [];

  // Going through each billboard and adding them to available locations
  $.each(billboards, (index, billboard) => {
    if (availableLocations.length === 0) {
      // Adding the first location
      availableLocations.push({city: billboard.city, coords: {lat: billboard.lat, lng: billboard.lng}, number: 1});
    } else if (availableLocations.length > 0) {
      // Variable to hold if the location needs to be pushed
      let needsPushing = true;

      // Seeing if the location already exists in availableLocations
      $.each(availableLocations, (index, location) => {
        // If it does, add a number and set needsPushing to false
        if (location.city.toLowerCase() === billboard.city.toLowerCase()) {
          // Add one to the number
          availableLocations[index].number++;
          // Doesn't need to be pushed so setting that variable to false
          needsPushing = false;
        }
      });

      // If location needs to be pushed, push it
      if (needsPushing) {
        availableLocations.push({city: billboard.city, coords: {lat: billboard.lat, lng: billboard.lng}, number: 1});
      }
    }
  });

  // Sorting the list alphabetically
  availableLocations.sort(sortByCity);

  // Appending the list of locations to the billboards list
  $.each(availableLocations, (index, location) => {
    $('.home__billboards ul').append(`<li><a href="#" data-billboard-lat="${location.coords.lat}" data-billboard-lng="${location.coords.lng}">${location.city} (${location.number})</a></li>`);
  });
}

/**
 * Change the map to a new location
 *
 * @param {Object} map      - Google Maps map object
 * @param {Object} location - Object with lat and lng
 */
function newMapLocation(map, location) {
  map.setCenter(location);
}

/**
 * Sorts an array of objects by city
 */
function sortByCity(a, b) {
  const aCity = a.city.toLowerCase();
  const bCity = b.city.toLowerCase();
  return ((aCity < bCity) ? -1 : ((aCity > bCity) ? 1 : 0));
}
