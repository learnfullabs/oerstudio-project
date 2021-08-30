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

  Drupal.behaviors.exposedFilters = {
    attach: function(context) {
      // Remove TID's onload.
      Drupal.exposedFilters.remove_tid();

      // Remove TID's onchange.
      jQuery('body').find('.form-autocomplete').on('autocompleteclose', function() {
        Drupal.exposedFilters.remove_tid();
      });

      // Add descriptions for certain exposed filters
      Drupal.exposedFilters.add_descriptions();

    }
  };

  Drupal.exposedFilters = {
    remove_tid: function () {
      var field_autocomplete = jQuery('body').find('.form-autocomplete');
      field_autocomplete.each(function (event, node) {
        var val = $(this).val();
        var match = val.match(/\((.*?)\)$/);
        if (match) {
          $(this).data('real-value', val);
          $(this).val(val.replace(' ' + match[0], ''));
        }
      });
    },

    add_descriptions: function () {
      var collFilters = $('form[action="/browse/collections"]');

      $('details[data-drupal-selector="edit-tags-collapsible"] .card-body', collFilters).append('<p class="small text-muted">Enter multiple tags separated by commas to search for more than 1 tag.</p>');

      $('details[data-drupal-selector="edit-key-collapsible"] .card-body', collFilters).append('<p class="small text-muted">Search titles and descriptions using a keyword.</p>');
    }

  };



})(jQuery, Drupal);
