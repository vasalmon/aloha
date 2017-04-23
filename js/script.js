$(function(){

//Initialized Flickity with HTML

//Flickity: Smooth Scrolling
  $('nav a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


//  Codepen submission code to use with .email
//  $('#my-form').on('submit', function(event){
//    event.preventDefault();
//    if ($('#my-text-input').val()==''){
//      console.log('The field is empty!');
//    } else {
//      console.log('You put something in the field!');       
//    }
//  });

});