jQuery.fn.label_fields = function(options) {
  var defaults = {
    validate: true
  };
  var options = $.extend(defaults, options);
  
  if (options.validate === true) {
    this.submit(function() {
      var fail = false;
      $('input[title],textarea[title]', this).not('[type=file]').each(function(index){ 
        if ($(this).attr('title') != '' && $(this).val() == $(this).attr('title') && $(this).hasClass('required')) {
          alert('Please make sure all fields are correctly filled out.');
          $(this).focus();
          fail = true;
          return false;
        } else if ($(this).attr('title') != '' && $(this).val() == $(this).attr('title')) {
          $(this).val('');
        }
      }); 
      if (fail) return false;
    });
  }
  
  return $('input[title],textarea[title]', this).not('[type=file]').each(function(){ 
    if ($(this).val() == '' && $(this).attr('value') == '') {
      $(this).val($(this).attr('title'));
    } else {
      $(this).val($(this).attr('value'));
    }

    $(this)
    .focus(function() {
      if ($(this).val() == $(this).attr('title')) {
        $(this).val('');
      }
    })
    .blur(function() {
      if ($(this).val() == '' && $(this).attr('value') == '') {
        $(this).val($(this).attr('title'));
      } else {
        $(this).val($(this).attr('value'));
      }
    });
  }); 
}; 

jQuery(function() {
  $('form').label_fields();
});