$(document).ready( function() {
	$(window).scroll(function() {
		if($(document).scrollTop() > 100) {
			$('.navbar-fixed-top').addClass('navbar-solid-color');
		}else {
			$('.navbar-fixed-top').removeClass('navbar-solid-color');
		}
	});
	// localScroll 插件
	$('.nav-onepage, .onepage-links').localScroll({
		duration: 500,
		offset: $('.navbar-fixed-top').height()
	});

	// // parents() 获得当前匹配元素集合中每个元素的祖先元素，使用选择器进行筛选是可选的。
	$('#navbar_text li a').click( function() {
		var navbarCollapse = $(this).parents('.navbar-collapse .collapse');
        navbarCollapse.addClass("in").siblings().removeClass('in');
	});


    //owlCarousel 轮播插件
	$('#testimonial-big-carousel').owlCarousel({
		singleItem: true,
		autoPlay: 3000,
		transitionStyle: 'fadeUp'
	});


});