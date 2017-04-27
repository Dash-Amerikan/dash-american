
$(document).ready(function(){

   $('.footnotebox').hide();


   /*welcome window*/
   modalPosition();
   $(window).resize(function(){
       modalPosition();
   });

 /*modal window for footnote1*/
   $('.modal').fadeIn('fast');

    $('.close').click(function(){
        $('#myModal').fadeOut('fast');
    });



    function modalPosition() {
        var width = $('.modal').width();
        var pageWidth = $(window).width();
        var x = (pageWidth / 2) - (width / 2);
        $('.modal').css({left: x + "px"});
    }

    $( ".kiss" ).click(function() {
      var kiss_id = $(this).attr('id');
      $('#kiss-' + kiss_id).slideToggle('fast');
    });



//<!--this is the beginning of making the cycling image banner work-->

window.onload = rotate;

var imagebanner = 0;
var singleimages = new Array("images/testimagebanner1.jpg","images/testimagebanner2.jpg","images/testimagebanner1.jpg","images/testimagebanner2.jpg", "images/testimagebanner1.jpg");

function rotate() {
     imagebanner++;
     if (imagebanner == singleimages.length) {
        imagebanner = 0;
     }
     document.getElementById("Banner").src = singleimages[imagebanner];

     setTimeout(rotate, 5 * 1000);
}
});
