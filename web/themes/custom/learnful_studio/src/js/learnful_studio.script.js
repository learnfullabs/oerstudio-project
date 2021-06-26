// import 'popper.js';
// import 'bootstrap';
import 'simplebar';
import 'simplebar/dist/simplebar.css';

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.enableToolTips = {
    attach: function (context) {
      $('[data-toggle="tooltip"]').tooltip();
    }
  };

  Drupal.behaviors.contactForms = {
    attach: function (context) {
      $('a.use-ajax.contact-form').attr('data-dialog-type', 'bootstrap4_modal');      
    }
  };

  Drupal.behaviors.collapseDetails = {
    attach: function (context, settings) {
      window.onload = function(){
        $('details#edit-contact').removeAttr('open');
      }
      
    }
  }

  Drupal.behaviors.dashboardSearch = {
    attach: function (context, settings) {

      $('.dashboard-h5p #edit-key').attr('placeholder', 'Search by keyword. Hit [enter] to search.')
      
    }
  }

  Drupal.behaviors.accountMenu = {
    attach: function (context, settings) {

      $('.menu-item-icon.icon-add').prepend('<span class="material-icons mr-1">add_circle</span>');
      $('.menu-item-icon.icon-avatar').prepend('<span class="material-icons mr-1">account_circle</span>');

      
    }
  }


})(jQuery, Drupal);
