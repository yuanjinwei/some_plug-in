$(document).ready(function(){
	$('.carousel').carousel({
	  interval: 5000
	});
	$(document).off('click.bs.dropdown.data-api');
	dropdownOpen();//调用
	/**
	 * 鼠标划过就展开子菜单，免得需要点击才能展开
	 */
	function dropdownOpen() {
	
		var $dropdownLi = $('.dropdown-menu');
	
		$dropdownLi.mouseover(function() {
			$(this).addClass('open');
		}).mouseout(function() {
			$(this).removeClass('open');
		});
	}
})
				