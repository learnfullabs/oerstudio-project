import 'popper.js';
import 'bootstrap';

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.enableToolTips = {
    attach: function (context) {
      //$('[data-toggle="tooltip"]').tooltip();
      
    }
  };

})(jQuery, Drupal);
