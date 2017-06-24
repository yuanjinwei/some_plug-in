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
	            	'line-height':' 42px'
	            	})
	            
	     }else{
	     	$('.footer-icon-li').css({
	            	'width':"42px",
	            	'height':"42px",
					'line-height':' 48px'
	            	})
	     }
         }
	 ie();
	 
//header ul
$(
	function(){
		$("#myul").css("display","none");
		
		$("#menu-button").click(function(){
			
			$(this).toggleClass('open');
			$("#myul").toggleClass('open');
			var mainmenu=$(this).next('ul');
			if(mainmenu.hasClass('open')){
				mainmenu.css("display","block");
//				mainmenu.addClass('myul');
			}else{
				mainmenu.css("display","none");
			}
			
		});
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!		
			$(".thumbnail section").hover(function(){
				var fig=$(this).find('figcaption');//!!!!!!!!!!!!
//				console.log(fig);
				fig.stop().slideDown('slow').css("bottom","0");

			},function(){
				var fig=$(this).find('figcaption');//!!!!!!!!!!!
				fig.stop().slideUp('slow');
			});
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	}
)
