(function($) {

  Drupal.behaviors.visualElements = {
    attach: function(context) {

      //$('#off-canvas-region');
      $('.toggle-offcanvas-region, .close-offcanvas').once().click(function() {
        if ($('.toggle-offcanvas-region').is(':visible')) {
          $('.toggle-offcanvas-region').fadeOut(50, function() {
            $('#off-canvas-region').toggle('slide', {
              direction: 'left'
            }, 250);
          });
        } else {
          $('#off-canvas-region').toggle('slide', {
            direction: 'left'
          }, 250, function() {
            $('.toggle-offcanvas-region').fadeIn(50);
          });
        }
      });
      // if view is block-view and using exposed filters with ajax callback - force toggled states to avoid running multiple times.
      $('#off-canvas-region .views-exposed-widget.views-submit-button button, #off-canvas-region .views-exposed-widget.views-reset-button button').once().click(function() {
        if ($('.toggle-offcanvas-region').is(':visible')) {
          $('.toggle-offcanvas-region').fadeOut(50, function() {
            $('#off-canvas-region').toggle('slide', {
              direction: 'left'
            }, 250);
          });
        } else {
          $('#off-canvas-region').toggle('slide', {
            direction: 'left'
          }, 250, function() {
            $('.toggle-offcanvas-region').fadeIn(50);
          });
        }
      });


      // move secondary sidebar in off-canvas div with trigger on mobile.
      /*
            $('body.sidebar-second .view-header').append('<div class="mobile-sidebar-trigger"><a class="toggle-offcanvas-sidebar" href="javascript:void(0)"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a></div>');
            // move content from secondary sidebar into off-canvas-sidebar
            $('body.sidebar-second .region-sidebar-second').appendTo('#off-canvas-sidebar');

            $('.toggle-offcanvas-sidebar').once().click(function() {
              $('#off-canvas-sidebar').css('width', '300px').css('padding', '100px 15px');
              $(this).css('display', 'none');
            });

            $('.close-offcanvas-sidebar').once().click(function() {
              $('#off-canvas-sidebar').css('width', '0px').css('padding', '0px');
              $('.toggle-offcanvas-sidebar').css('display', 'block');
            });

      */

      // node admin links
      if ($('#node-admin-tabs ul.tabs--primary')) {
        $('#node-admin-tabs ul.tabs--primary').once().wrap('<div class="btn-group"></div>');
        $('#node-admin-tabs ul.tabs--primary').removeClass('nav nav-tabs');
        $('#node-admin-tabs ul.tabs--primary').addClass('dropdown-menu');
        $('#node-admin-tabs .btn-group').once().prepend('<a href="#" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-cogs" aria-hidden="true"></i> Manage</a>');
        // $('#node-admin-tabs .btn-group').once().prepend('<a href="#" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-cogs" aria-hidden="true"></i>Manage Content</a>');
      }

      // comments
      $('.comment-form .form-actions button.form-submit').html('<span class="icon glyphicon glyphicon-ok" aria-hidden="true"></span> Post Reply');
      $('.comment-form .field-name-comment-body textarea').attr('placeholder', 'Your comment here. Use \'@\' to reference a reply. Example: @#4 will reference the comment marked with #4. Must reply with 5 or more characters.');
      $('.comment-form .field-name-comment-body textarea').attr('rows', '3');
      $('.comment-form .form-actions button.form-submit').attr('disabled', true);

      $('.comment-form .field-name-comment-body textarea').focus(function() {
        $('.comment-form .form-actions').once().slideToggle("slow");
        $(this).attr('rows', '5');
      });
      $('.comment-form .field-name-comment-body textarea').keyup(function() {
        if ($('.comment-form .field-name-comment-body textarea').val().length > 5) {
          $('.comment-form .form-actions button.form-submit').prop('disabled', false);
        } else {
          $('.comment-form .form-actions button.form-submit').prop('disabled', true);
          $(this).attr('rows', '3');
        }
      });


      // Match height in Views Grid
      $('.grid-item .grid-info').matchHeight();
      $('.grid-item > .views-row').matchHeight();


      // add current year to footer
      var dteNow = new Date();
      var intYear = dteNow.getFullYear();
      $('.year').text(intYear);

      // set document title when page-header has link
      $('h1.page-header > a').each(function() {
        document.title = $('.page-header').text();
      })




    }
  }


})(jQuery);
