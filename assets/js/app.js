$(document).ready(function(){
  //Smooth Scroll
  $('a.nav-link').on('click', function(e){
    if(this.hash !== '') {
      e.preventDefault();
      
      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  })
  //End Smooth Scroll
  //Navbar Opacity change on scroll
  $(window).scroll(function() {
    if($(window).scrollTop()) {
      $('.fixed-top').addClass('seeThru');
    } else {
      $('.fixed-top').removeClass('seeThru');
    }
  })

  //Make nav links active on scroll w/ Scrollspy
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

});