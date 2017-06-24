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

	function wedding(d,h,m,s){
		var time = setInterval(function(){
			if(s--<=1){
				s = 59;
				if(m--<=1){
					m = 59;
					if(h--<=0){
						h=23;
						if(d--==0){
							clearInterval(time);
							alert("今天结婚了！！！！！！！！！");
						}
					}
				}
			}
			$(".second").html(s);
			$(".minutes").html(m);
			$(".hours").html(h);
			$(".days").html(d);
		},100);
	}
	wedding(66,4,5,0);
	
	function add(now,num,d){
		var time1 = setInterval(function(){
			now+=10;
			if(now>=d){
				clearInterval(time1);
				$($(".counter")[num]).html(d);
			}
			$($(".counter")[num]).html(now);
		},50);
	}
	add(0,0,500);
	add(0,1,1000);
	add(0,2,402);
	add(0,3,2345);
	
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

