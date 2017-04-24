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
//Subscribe to Mailing List
  $('form button').on('click', function(event){
    event.preventDefault();
    if ($('form input').val()==''){
      alert('Please input your e-mail address.');
    } else {
      alert('Thanks for subscribing!');       
    }
  });
});