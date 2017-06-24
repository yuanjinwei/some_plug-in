$(function(){
	//ie显示兼容
	function ie(){
     function isIE() {
            if (!!window.ActiveXObject || "ActiveXObject" in window)
             return true;
             else
             return false;
      }
     if(isIE()==true){
            $('.footer-icon-li').css({
            	'width':"35px",
            	'height':"35px",
            	'line-height':' 42px',
            	"margin-left":'2.5px'
            	}).eq(0).css("margin-left",0)
            
     }else{
     	$('.footer-icon-li').css({
            	'width':"42px",
            	'height':"42px",
				'line-height':' 48px'
            	})
     }
  }
	 ie()
	 var   htmlObj = document.documentElement;
        htmlObj.setAttribute('data-useragent',navigator.userAgent);
        htmlObj.setAttribute('data-platform', navigator.platform );

	 //ie显示兼容完
	 
//	  导航显示与隐藏
	$('header button').click(function(){
		$('.nav').stop(true).slideToggle(400);
		anim();
	})
	//按钮动画
	function anim(){
			if($('header button>p').eq(0).hasClass('one') == false){
				$('header button>p').eq(0).addClass('one').removeClass('one1').end().eq(1).addClass('two').removeClass('two1').end().eq(2).addClass('three').removeClass('three1')
			}else{
				$('header button>p').eq(0).removeClass('one').addClass('one1').end().eq(1).removeClass('two').addClass('two1').end().eq(2).removeClass('three').addClass('three1')
			}
		}
})
