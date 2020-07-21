$(document).ready(function () {
	//Initialize Smooth Scrolling
	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 500
	});

	//Sticky Navbar
	$(".js--start-sticky-nav").waypoint(
		function (direction) {
			if (direction == "down") {
				$("nav").addClass("sticky");
			} else {
				$("nav").removeClass("sticky");
			}
		}, {
			offset: "80px"
		}
	);

	//Go To Top
	$(".js--start-go-top").waypoint(
		function (direction) {
			if (direction == "down") {
				$(".go_to_top").addClass("d-flex");
				$(".go_to_top").removeClass("d-none");
			} else {
				$(".go_to_top").addClass("d-none");
				$(".go_to_top").removeClass("d-flex");
			}
		}, {
			offset: "80px"
		}
	);

	var typed = new Typed("#typed", {
		strings: ["Developer.", "Designer."],
		backSpeed: 30,
		typeSpeed: 50,
		loop: true,
		backDelay: 3000
	});

	//Scroll Animation
	sal({
		rootMargin: '38% 50%',
		once: false,
	});

	//Porfolio Filter
	$('.filter_btn').click(function (e) {
		e.preventDefault();

		var value = $(this).attr('data-filter');
		if (value == 'all') {
			$('.filter').show(300);
		} else {
			$('.filter').not('.' + value).hide(300);
			$('.filter').filter('.' + value).show(300);
		}
	});

	$('ul li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});

	//Owl Carosel
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		responsiveClass: true,
		stagePadding: 20,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				autoplay: false
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			}
		},
		nav: false,
	});

	particlesJS.load('particles-js', 'vendor/particles/particles.json', function() {
		console.log('callback - particles.js config loaded');
	});
});