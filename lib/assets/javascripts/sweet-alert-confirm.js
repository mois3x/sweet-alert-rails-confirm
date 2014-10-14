//= require sweet-alert
(function( $ ) {
  var sweetAlertConfirm = function(event) {
    swalDefaultOptions = {
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Ok"

    }

    //this.click(function(event) {
      $linkToVerify = $(this)
      var swalOptions = swalDefaultOptions;
      var optionKeys = [
                          'confirm',
                          'text',
                          'type',
                          'showCancelButton',
                          'confirmButtonColor',
                          'cancelButtonColor',
                          'confirmButtonText',
                          'cancelButtonText',
                          'closeOnConfirm',
                          'remote',
                          'method'
                        ]

      $.each($linkToVerify.data(), function(key, val){
        if ($.inArray(key, optionKeys) >= 0) {
          swalOptions[key] = val
        }
      })

      message = $linkToVerify.attr('data-sweet-alert-confirm')
      swalOptions['title'] = message
      swal(swalOptions, function(r){
        if (swalOptions['reemote'] === true) { 
          $.rails.handleRemote($linkToVerify)
        }
        else if(swalOptions[ 'method' ] !== undefined) {
          $.rails.handleMethod($linkToVerify)
        }
        else {
          //[FIXME]Check this im not sure about this
          window.location.href = $linkToVerify.attr('href');
        }
      });

      return false;
    //});
    //return this;
  }
  $(document).ready(function(){
    //$("a[data-sweet-alert-confirm]").sweetAlertConfirm();
    $('a[data-sweet-alert-confirm]').on('click', sweetAlertConfirm)
  });

})( jQuery );
