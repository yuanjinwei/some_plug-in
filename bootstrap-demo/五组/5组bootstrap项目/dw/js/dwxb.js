$(function(){
	var now=0;
	var now1=0;
	$(".moren").css("color","#007FFF");
	$(".moren:hover").css("color","#ffad00");
	$(".col-sm-3>ol>li").on(
		{
			click:function(){
				now=$(this).index();
				play();
			}
		}
	);
	function play(){
		$(".moren").css("color","#000");
		$(".moren").on(
		{
			click:function(){
				$(".moren").css("color","#007FFF");
			}
		}
	)
		$(".xinxibox").css("display","block");
		$(".xinxibox").hide();
		$($('.xinxibox')[now]).show();
		$('.col-sm-3>ol>li').removeClass('selected');
		$($('.col-sm-3>ol>li')[now]).addClass('selected');
	}
	//下一页
	function next(){
		if(now++==$('.xinxibox').length-1){
			now=0;
		}
		play();
	}
	//上一页
	function prev(){
		if(now--==0){
			now=$('.xinxibox').length-1;
		}
		play();
	}
		// 左键
	$(".preone").on(
	{
		click:function(){
			prev();
		}
	});
		//右键
	$(".next_one").on(
	{
		click:function(){
			next();
		}
	});
	$(".back").on(
		{
			click:function(){
				
				window.history.back();
			}
		}
	)

	//首页收缩事件
	$(".navbar-header>button").on(
		{
			click:function(){
		$(".navbar-collapse").slideToggle(800);
	}
		}
	);
	
})
