$(function(){
	$('.left_1>li').click(function(){
		$('.left_1>li').removeClass("left_1_1");
		$(this).addClass("left_1_1");
		$('.col_1').hide().eq($(this).index()).show();
		var x=$(this).index();
		if(x=0){
			$('#col_3').addClass("col_3");
		}else{
			$('#col_3').removeClass("col_3");
		}
		
	})
	$('.navbar-nav>li').click(function(){
		$('.navbar-nav>li').removeClass("heade_active").eq($(this).index()).addClass("heade_active")
	});
	$('.navbar-header>button').on({
		
		click:function(){
		$('.navbar-collapse').slideToggle(1000);

		}
	})
})

