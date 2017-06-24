/*
* @Author: lamco
* @Date:   2017-05-06 15:30:32
* @Last Modified by:   lamco
* @Last Modified time: 2017-05-14 15:06:16
*/

'use strict';
$(document).ready(function() {
	$(".carousel").carousel({
		interval:3000,
	});
});

$(document).ready(function() {
	 $(".er_a").mouseover(function(){
	 	$(".er_img").css("display","block");
	 })
	 $(".er_a").mouseout(function(){
	 	$(".er_img").css("display","none");
	 })
});
$(document).ready(function() {
	 $(".lists").mouseover(function(){
	 	$(".lists>.dropdown-menu").css("display","block");
	 })
	 $(".lists").mouseout(function(){
	 	$(".lists>.dropdown-menu").css("display","none");
	 })
});
$(document).ready(function() {
	 $(".listi").mouseover(function(){
	 	$(".listi>.dropdown-menu").css("display","block");
	 })
	 $(".listi").mouseout(function(){
	 	$(".listi>.dropdown-menu").css("display","none");
	 })
});