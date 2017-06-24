$(function(){
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
	new WOW().init();
    };
	$('.navbar-toggle').click(function(){
		$('body').attr('class','body');
		$('#nav').css('display','block');
		$('#nav').animate({
			right:0
		},1000)
    })
	$('#nav>a').click(function(){		
		$('#nav').animate({
			right:-270
		},1000);		
		$('body').attr('class','');
		setTimeout(function(){
			$('#nav').css('display','none');
		},1000);	
	})
	
	$('#goto-top').css('display','none');
//gototop的隐藏
$(window).scroll(function(){
		if($(window).scrollTop()<=500){
			$('#goto-top').css('display','none');
		}else{
			$('#goto-top').css('display','block');
		}
	})
})




