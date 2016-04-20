var sweetAlertConfirmConfig = sweetAlertConfirmConfig || {}; // Add default config object

(function( $ ) {
  var sweetAlertConfirm = function(event) {
    
    swalDefaultOptions = {
      title: sweetAlertConfirmConfig.title || 'Are you sure?',
      type: sweetAlertConfirmConfig.type || 'warning',
      showCancelButton: sweetAlertConfirmConfig.showCancelButton || true,
      //confirmButtonColor: sweetAlertConfirmConfig.confirmButtonColor || null, //"#DD6B55" removed by Noc, do not apply default color as it triggers inline styles on buttons
      //Null causes javascript errors when hover is fired on confirm buttons
      confirmButtonText: sweetAlertConfirmConfig.confirmButtonText || "Ok",
      cancelButtonText: sweetAlertConfirmConfig.cancelButtonText || "Cancel"
    }
    if (sweetAlertConfirmConfig.confirmButtonColor !== null) {
      swalDefaultOptions.confirmButtonColor = sweetAlertConfirmConfig.confirmButtonColor
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
                          'html',
                          'imageUrl',
                          'allowOutsideClick',
                          'customClass',
                          'remote',
                          'method',
                          'function'
                        ];
      
      function afterAlertCallback(r){
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
      }
      
      var beforeFunction = null;
      
      $.each($linkToVerify.data(), function(key, val){
        if ($.inArray(key, optionKeys) >= 0) {
          swalOptions[key] = val
          if (key == 'sweetAlertType') {
            swalOptions['type'] = val;
          }
        }
        // Make a before callback to verify that swal should be shown
        if(key == 'sabeforefunction') {
          beforeFunction = val;
        }
      });
      
      // Skip alert if false
      if(beforeFunction != null) {
        var beforeRes = window[beforeFunction]($linkToVerify);
        if(beforeRes === true) {
          return afterAlertCallback(true); // Skip alert
        }
      }
      
      var nameFunction = swalOptions['function'];
      message = $linkToVerify.attr('data-sweet-alert-confirm')
      swalOptions['title'] = message
      swal(swalOptions, afterAlertCallback);

      return false;
  }
  $(document).on('ready turbolinks:load page:update ajaxComplete', function() {
    $('[data-sweet-alert-confirm]').on('click', sweetAlertConfirm)
  });

  $(document).on('ready turbolinks:load page:load', function() {
    //To avoid "Uncaught TypeError: Cannot read property 'querySelector' of null" on turbolinks
    if (typeof window.sweetAlertInitialize === 'function') {
      window.sweetAlertInitialize();
    }
  });


})( jQuery );
