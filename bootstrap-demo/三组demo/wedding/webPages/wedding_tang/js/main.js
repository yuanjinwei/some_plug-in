/*
* @Author: Administrator
* @Date:   2017-05-06 17:33:23
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-06 18:05:33
*/

'use strict';
$(function(){
	$(window).scroll(function() {
	  if($(window).scrollTop()>200){
			$('.gototop').addClass('active');
		}else{
			$('.gototop').removeClass('active');
		}
	});
	//顺序动画
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
			(function(){
			window.scrollReveal = new scrollReveal({reset: true});
		})();
	};
	
	//	loading动画
	var loading = setTimeout(function(){
		$(".fh5co-loader").css("display","none");
	},500);
});

