$(function() {

$('.slider').owlCarousel({
    loop : true,
    items: 1,
    smartSpeed: 700,
    itemClass: "slide-wrap",
    nav: true,
    navText: ['<img src="img/left.png">', '<img src="img/right.png">'],
    dots: false,
    responsiveClass: true,
});

	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".top_menu").slideToggle();
	});


        var link = $('.gumburger');
        var close = $('.close-menu');
        var menu = $('.m-menu');
        link.on('click', function(event){
            event.preventDefault();
            menu.toggleClass('m-menu__active')
        });
        close.on('click', function(event){
            event.preventDefault();
            menu.toggleClass('m-menu__active')
        });
});
