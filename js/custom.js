// Sticky Menu
$(window).on('scroll',function(){
	if($(window).scrollTop()){
		$('nav').addClass('black');
	}
	else{
		$('nav').removeClass('black');
	}
})
$(document).ready(function(){
	$('.menu h4').click(function(){
		$("nav ul").toggleClass("active")
	})
})
		
// Add smooth scrolling to all links
$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1400, function(){
			window.location.hash = hash;
			});
		} 
	});
});

// Add Owl Carousel
$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true
    });
});
