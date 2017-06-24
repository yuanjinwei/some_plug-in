$(document).ready(function(){
	$(window).scroll(function() {
		console.log($(document).scrollTop());
		if($(document).scrollTop() > 100) {
			$('.navbar-default').addClass('in');
		}else {
			$('.navbar-default').removeClass('in');
		}
		if($(document).scrollTop() >= 0&&$(document).scrollTop() <= 100){
			$('#fuck li').removeClass('active');
			$($('#fuck li')[0]).addClass('active');
		}else if($(document).scrollTop() > 100&&$(document).scrollTop() <=600){
			$('#fuck li').removeClass('active');
			$($('#fuck li')[1]).addClass('active');
		}else if($(document).scrollTop() >600&&$(document).scrollTop() <=2100){
			$('#fuck li').removeClass('active');
			$($('#fuck li')[2]).addClass('active');
		}else if($(document).scrollTop() >2100&&$(document).scrollTop() <=3000){
			$('#fuck li').removeClass('active');
			$($('#fuck li')[3]).addClass('active');
		}else if($(document).scrollTop() >3000&&$(document).scrollTop() <=3500){
			$('#fuck li').removeClass('active');
			$($('#fuck li')[4]).addClass('active');
		}else{
			$('#fuck li').removeClass('active');
			$($('#fuck li')[5]).addClass('active');
		}
	});
});

