import Hammer from 'hammerjs';

export default {
  init() {
    // JavaScript to be fired on the home page

    // MAP FUNCTIONS
    const hammertime = new Hammer(document.getElementById('billboards'));
    const map = $('.home-billboards__map');
    // If section is swiped on
    hammertime.on('swipeleft', function() {
      map.animate({
        left: '0%',
      }, 300);
    });
    hammertime.on('swiperight', function() {
      map.animate({
        left: '100%',
      }, 300);
    });

    $('.home-billboards-map__header a').on('click', e => {
      e.preventDefault();

      map.animate({
        left: '100%',
      }, 300);
    });
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
