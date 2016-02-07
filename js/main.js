$(function(){
	owlMain();
	owlList();
})

function owlMain(){
	$('.owl-main').owlCarousel({
	    loop:true,
	  	dots: false,
	   	nav: true,
	    items: 1,	   
	    autoplayHoverPause: true
	})
}

$(function(){ 
$('a[href^="#"]').click(function(){ 
var target = $(this).attr('href'); 
$('html, body').animate({scrollTop: $(target).offset().top}, 700);
return false; 
}); 
});

function owlList(){
	$('.owl-list').owlCarousel({
	    loop:true,
	    margin:20,
	    nav:false,
	    dots: true,
	    items: 1,
	    autoplayHoverPause: true
	})
}











