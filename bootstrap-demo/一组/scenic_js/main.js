/*
* @Author: 电脑
* @Date:   2017-05-06 15:39:37
* @Last Modified by:   电脑
* @Last Modified time: 2017-05-11 15:53:36
*/

'use strict';
$(document).ready(function(){
	$('.carousel').carousel({
		interval:8000
	})
})
$(".carousel-inner").swipe( {
		//Generic swipe handler for all directions
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).parent().carousel('prev');
		},
		swipeLeft: function() {
			$(this).parent().carousel('next');
		},
		//Default is 75px, set to 0 so any distance triggers swipe
		threshold:0
	});
