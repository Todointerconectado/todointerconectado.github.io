window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel-lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel-indicadores',
		arrows: {
			prev: '.carousel-anterior',
			next: '.carousel-siguiente'
		},
		responsive: [
			{
				// screens greater than >= 775px
				breakpoint: 450,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},{
				// screens greater than >= 1024px
				breakpoint: 800,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			}
		]
	});
});