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
    $('.home__top').tilt({
      maxTilt    : 5,
      perspective: 1000,
    });
  },
};


function removeActiveClass() {
  $('nav ul li a[href=\'#about\']').removeClass('active');
  $('nav ul li a[href=\'#billboards\']').removeClass('active');
  $('nav ul li a[href=\'#contact\']').removeClass('active');
}
