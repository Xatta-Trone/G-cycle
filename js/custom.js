$(document).ready(function(){
	//scroll to top
	 $(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(200);   // Fade in the arrow
	        $("#sticker").addClass("lightheader");
	    } else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	        $("#sticker").removeClass("lightheader");
	    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});

	
	// owl carousel

	$(".testimonial-slides").owlCarousel({
		items: 1,
		margin:30,
		autoplay:true,
		autoplayTimeout:2500,
        loop:true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>","<i class='fa fa-chevron-right' aria-hidden='true'></i>"]
	});

	//counter 

	$('.counter').counterUp({
                delay: 10,
                time: 1500
    });

	// value area show
    $(".getPrice").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".phone-value-details").slideDown(700);
		return false;
	});

	$("#editprofile").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".profile-edit-area").slideDown(700);
		return false;
	});







	   
  });
