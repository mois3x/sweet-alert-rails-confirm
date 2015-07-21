(function( $ ) {
  var sweetAlertConfirm = function(event) {
    swalDefaultOptions = {
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Ok"

    }

      $linkToVerify = $(this)
      var swalOptions = swalDefaultOptions;
      var optionKeys = [
                          'confirm',
                          'text',
                          'sweetAlertType',
                          'showCancelButton',
                          'confirmButtonColor',
                          'cancelButtonColor',
                          'confirmButtonText',
                          'cancelButtonText',
                          'closeOnConfirm',
                          'imageUrl',
                          'allowOutsideClick',
                          'remote',
                          'method',
                          'function'
                        ]

      $.each($linkToVerify.data(), function(key, val){
        if ($.inArray(key, optionKeys) >= 0) {
          swalOptions[key] = val
          if (key == 'sweetAlertType') {
            swalOptions['type'] = val;
          }

        }
      })

      var nameFunction = swalOptions['function'];
      message = $linkToVerify.attr('data-sweet-alert-confirm')
      swalOptions['title'] = message
      swal(swalOptions, function(r){
        if (nameFunction) {
          window[nameFunction]();
        }
        if (swalOptions['remote'] === true) {
          if (r === false) {
            return false;
          } else {
            $.rails.handleRemote($linkToVerify)
          }
        }
        else if(swalOptions[ 'method' ] !== undefined) {
          if (r === false) {
            return false;
          } else {
            $.rails.handleMethod($linkToVerify);
          }
        }
        else {
          if (r === false) {
            return false;
          } else {
            if($linkToVerify.attr('type') == 'submit'){
              var name = $linkToVerify.attr('name'),
              data = name ? {name: name, value:$linkToVerify.val()} : null;
              $linkToVerify.closest('form').data('ujs:submit-button', data);
              $linkToVerify.closest('form').submit();
            }
            else {
              window.location.href = $linkToVerify.attr('href');
            }

          }
        }
      });

      return false;
  }
  $(document).on('ready page:load ajaxComplete', function() {
    $('[data-sweet-alert-confirm]').on('click', sweetAlertConfirm)
  });

  $(document).on('ready page:load', function() {
    //To avoid "Uncaught TypeError: Cannot read property 'querySelector' of null" on turbolinks
    if (typeof window.sweetAlertInitialize === 'function') {
      window.sweetAlertInitialize();
    }
  });


})( jQuery );
