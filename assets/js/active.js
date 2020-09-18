(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.mobile-menu').on('click', function () {
      $(this).toggleClass('active');
    });
  });

  jQuery(window).on('load', function () {
    // Code
  });
})(jQuery);
