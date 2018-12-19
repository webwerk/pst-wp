jQuery.noConflict();
(function($){
  $(document).ready(function(e) {

      if($( "input#hideheader" ).is(':checked'))
      $(".custom-meta-options").hide();  // checked
      else
      $(".custom-meta-options").show();  // unchecked

      $( "input#hideheader" ).on( "click", function() {
        //custom-meta-options
        //alert($(this).attr('checked'))
        if($(this).is(':checked'))
        $(".custom-meta-options").hide();  // checked
        else
        $(".custom-meta-options").show();  // unchecked

      });


      if($( "input#mhideheader" ).is(':checked'))
      $(".mcustom-meta-options").hide();  // checked
      else
      $(".mcustom-meta-options").show();  // unchecked

      $( "input#mhideheader" ).on( "click", function() {
        //custom-meta-options
        //alert($(this).attr('checked'))
        if($(this).is(':checked'))
        $(".mcustom-meta-options").hide();  // checked
        else
        $(".mcustom-meta-options").show();  // unchecked

      });

      $(".removebtn").live('click', function() {
          $(this).parent().remove();
      });

      var inc = 1;
      $( ".addmore" ).on( "click", function(e) {
        e.preventDefault();
        inc = inc+1;
        $( ".addmored" ).append('<li id="removemore'+inc+'"><p class="label"><label>Upload your JPG here.</label></p><input id="logo_url" class="uploadfield inline" name="wp_custom_attachment_more[]" value="" size="75" /><div class="upload_buttons inline"><span class="upload_image_reset button">Reset</span><input class="upload_image_button button" type="button" data-button_text="Set As Image" value="Upload"></div><button class="removebtn button" type="button" value="Remove">Remove</button></li>');
      });


      var inc = 1;
      $( ".maddmore" ).on( "click", function(e) {
        e.preventDefault();
        inc = inc+1;
        $( ".maddmored" ).append('<li id="removemore'+inc+'"><p class="label"><label>Upload your JPG here.</label></p><input id="logo_url" class="uploadfield inline" name="mwp_custom_attachment_more[]" value="" size="75" /><div class="upload_buttons inline"><span class="upload_image_reset button">Reset</span><input class="upload_image_button button" type="button" data-button_text="Set As Image" value="Upload"></div><button class="removebtn button" type="button" value="Remove">Remove</button></li>');
      });

  });
})(jQuery);
