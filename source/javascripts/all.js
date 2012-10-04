//= require_tree .
$(function() {
  $('#main-gallery-images').carousel();
  $("#gallery-link").on('click', function(){
    $('#gallery-modal').modal();
  });
});