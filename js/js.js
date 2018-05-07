$(".x").on("click", function() {

  $(this).closest(".nav").toggleClass("open");
  $(".search").toggleClass("move-search");
});

$(".close-menu").on("click", function() {
  $(this).closest(".nav").toggleClass("open");
  $(".search").toggleClass("move-search");
});

$(".glyphicon-search").on("click", function(){

  $(".glyphicon-search").toggleClass("change-icon");
  $(".search-box").toggleClass("expand-search");
})

$(".oi-magnifying-glass").on("click", function(){
  $(".mobile-search").toggleClass("toggle-mobile-search");
})

$(".search-box").on('keyup', function(){
  //console.log("Show Message");
  //console.log(this.value.length);

  var inputLength = this.value.length;

  if (inputLength > 2) {
    //console.log("ShowMessage");
    $(".search-message").css("display","block");
  }
  else {
    //console.log("hide message");
    $(".search-message").css("display","none");
  }
})


/*
jQuery(document).ready(function($){

  $('.live-search-list li').each(function(){
    $(this).attr('data-search-term', $(this).text().toLowerCase());
  });

  $('.live-search-box').on('keyup', function(){

  var searchTerm = $(this).val().toLowerCase();

      $('.live-search-list li').each(function(){

          if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
              $(this).show();
          } else {
              $(this).hide();
          }

      });


  });

});
*/
