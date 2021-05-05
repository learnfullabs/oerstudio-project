import 'popper.js';
import 'bootstrap';
import 'simplebar';
import 'simplebar/dist/simplebar.css';

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.enableToolTips = {
    attach: function (context) {
      //$('[data-toggle="tooltip"]').tooltip();
      
    }
  };

  Drupal.behaviors.collapseDetails = {
    attach: function (context, settings) {
      window.onload = function(){
        $('details#edit-contact').removeAttr('open');
      }
      
    }
  }

})(jQuery, Drupal);
