$(function(){
	//初始悬浮事件
	$('.tu-boder i').css({'visibility':'hidden','z-index':'2'});
	$('#goto-top').css('display','none');
	//当浏览器拉伸时，，隐藏nav
	$(window).resize(function(){
if(document.body.clientWidth>992){
		$('body').css({'height':'100%','overflow':'auto'});
		$('#hidden').animate({
			right:-300
		},400);		
		$('#hidden').css('display','none');
		$('body>.page .page_inner').css({'opacity':'1'});
}
});
//gototop的隐藏
$(window).scroll(function(){
		if($(window).scrollTop()<=500){
			$('#goto-top').css('display','none');
		}else{
			$('#goto-top').css('display','block');
		}
	})

//dropdown
$('.dropdown').mouseenter(function(){
	$('.dropdown>ol').css({'visibility':'visiable','z-index':'1001'})
});
$('.dropdown').mouseleave(function(){
	$('.dropdown>ol').css({'visibility':'none','z-index':'1'})
})
	//点击button时。。
	$(".navbar-header>button").on(
		{
			click:function(){
//		$(".navbar-collapse").slideToggle(800);
			$(this).find('button').css({'display':'none'});
//			$('body').attr({'class':'body'});
			$('body').css({'height':'1090px','overflow':'hidden'});
			$('body>.page .page_inner').css({'opacity':'0.4'});
		$('#hidden').css({'display':'block','z-index':'1000'});
		$('#hidden').animate({
			right:0
		},400)
//结束
	}
		}
	);
	//点击关闭时
	$('#hidden>a').click(function hidden(){
		$('body').css({'height':'100%','overflow':'auto'});
		$('#hidden').animate({
			right:-300
		},400);		
		$('#hidden').css('display','none');
		$('body>.page .page_inner').css({'opacity':'1'});
	});
	
	$('.tu-boder').mouseenter(function(){
//		console.log(111);
			$(this).find('.fh5co-project-item').stop().css({"box-shadow":"3px 2px 2px #aaa","top":"-5px",
			"-moz-box-shadow":"3px 2px 2px #aaa",
			"-webkit-box-shadow":"3px 2px 2px #aaa",
			"box-shadow":"3px 2px 2px #aaa"});
			$(this).find('figure img').css({"transform":"scale(1.1)","overflow":"hidden"});
//			$(this).find('figure').css({"opacity":"0.6"});
			$(this).find('.overlay').css({'visibility':'visible'});
			$(this).find('i').css({'visibility':'visible','z-index':'100'});
		})
	$('.tu-boder').mouseleave(function(){
//		console.log(111);
			$(this).find('.fh5co-project-item').stop().css({"box-shadow":"0 0 0","top":"0"});
			$(this).find('figure img').css({"transform":"scale(1)","overflow":"hidden"});
//			$(this).find('figure').css({"opacity":"1"});
			$(this).find('i').css({'visibility':'hidden','z-index':'2'});
		})
	
})

//下拉菜单
$('.dropd').hover(function(){
	$('.dropd-m').css({'display':'block','z-index':'1005'});
});
$('.dropd').mouseleave(function(){
	$('.dropd-m').css({'display':'none','z-index':'0'});
})