$(document).ready(function() {


  $(".x").on("click", function() {

    $(this).closest(".nav").toggleClass("open");
    $(".search").toggleClass("move-search");
  });

  $(".close-menu").on("click", function() {
    $(this).closest(".nav").toggleClass("open");
    $(".search").toggleClass("move-search");
  });

  $(".glyphicon-search").on("click", function() {
    $(".glyphicon-search").toggleClass("change-icon");
    $(".search-box").toggleClass("expand-search");
  })

  $(".oi-magnifying-glass").on("click", function() {
    $(".mobile-search").toggleClass("toggle-mobile-search");
  })


  //Show Live Search Message as you type
  $(".search-box").on('keyup', function() {
    //console.log("Show Message");
    //console.log(this.value.length);
    var winWidthOnKeyUp = $(window).width();
    var inputLength = this.value.length;

    //console.log(winWidth);

    if (inputLength > 2 && winWidthOnKeyUp > 768) {
      //console.log("ShowMessage");
      $(".search-message").css("display", "block");
    } else {
      //console.log("hide message");
      $(".search-message").css("display", "none");
    }
  })

  //Hide live search message when clicking off message and empty form
  $(".weather-bar, .nav, .row-container").on("click", function() {
    destroyLiveSearch();
  })

  //Hide Live Search message when window re-sizes
  $(window).resize(function() {
    var winWidthOnResize = $(window).width();
    //console.log(winWidthOnResize);

    if (winWidthOnResize < 768) {
      destroyLiveSearch();
    }

    //Show & Hide Mobile Search if window resizes.
    if (winWidthOnResize > 768) {
      //$(".mobile-search").toggleClass("toggle-mobile-search");
      $(".mobile-search").css("display", "none");
    } else {
      $(".mobile-search").css("display", "table");
    }

  })

  //Pointless Get Todays Date Task
  var today = new Date();

  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    //dd = '0' + dd;
  }

  if (mm < 10) {
    //mm = '0' + mm;
  }

  function getDayName(dateStr, locale) {
    var date2 = new Date(dateStr);
    return date2.toLocaleDateString(locale, {
      weekday: 'long'
    });
  }

  function getMonthName(monthStr, locale) {
    var monthName = new Date(dateStr);
    return monthName.toLocaleDateString(locale, {
      month: 'long'
    });
  }

  var dateStr = today;
  var day = getDayName(dateStr, "EN-US");
  var month = getMonthName(dateStr, "EN-US");
  //console.log(day);
  //console.log(month);

  var today = day + ',' + ' ' + dd + ' ' + month;
  document.getElementById("todaysDate").innerHTML = today;
  //console.log(today);
})

function destroyLiveSearch() {
  $(".search-message").css("display", "none");
  $(".search-box").val("");
}




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
