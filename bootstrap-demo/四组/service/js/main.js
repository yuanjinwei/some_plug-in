
//$(document).ready(function(){
//	$('.carousel').carousel({
//		interval:3000
//	})
//});
//添加手势滑动
//$(".carousel-inner").swipe( {
//		//Generic swipe handler for all directions
//		swipeRight:function(event, direction, distance, duration, fingerCount) {
//			$(this).parent().carousel('prev');
//		},
//		swipeLeft: function() {
//			$(this).parent().carousel('next');
//		},
//		//Default is 75px, set to 0 so any distance triggers swipe
//		threshold:0
//});

//上下跳动的按钮
setInterval(function(){
		$('.arrowBtn').animate({
			top : 15,
			opacity : 0.5
		},500,function(){
			$('.arrowBtn').animate({
				top : 0,
				opacity : 1
			},500)
		})
	},1500);
	$('body').css('overflowX','hidden');
