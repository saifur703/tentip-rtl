(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.mobile-menu').on('click', function () {
      $(this).toggleClass('active');
      $('body').toggleClass('active');
    });

    $('.search').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('s_active');
      $('body').toggleClass('s_active');
    });
  });

  jQuery(window).on('load', function () {
    // Code
  });
})(jQuery);
