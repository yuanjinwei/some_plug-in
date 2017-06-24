/*
* @Author: yangtao
* @Date:   2016-01-12 13:06:31
* @Last Modified by:   yangtao
* @Last Modified time: 2017-05-31 15:56:18
*/

'use strict';
// ready 页面加载完之后执行
// 改变轮播的时间
$(document).ready(function(){
	$('.carousel').carousel({
		interval:3000,
	});

})

$(function(){
	$('.Control>li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.owl-pagination>div').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})

// 	function banner(a,b,c){    // a是轮播图片，b是active，c是轮播图片对应按钮，d是上一页，e是下一页
// 　　　　index=0;
// 　　　　len=$(a).length-1;
// 　　　　function teb(index){
// 　　　　　　$(c).eq(index).addClass(b).siblings('').removeClass(b);
// 　　　　　　$(a).eq(index).fadeIn(300).addClass('active').siblings('').fadeOut(300).removeClass('active');
// 　　　　};
// 　　　　$(c).click(function(){
// 　　　　　　index=$(this).index();
// 　　　　　　teb(index);
// 　　　　});
// 　　　　function timeRun(){
// 　　　　　　time=setInterval(function(){
// 　　　　　　　　index++;
// 　　　　　　　　if(index>len){
// 　　　　　　　　　　index=0;
// 　　　　　　　　};
// 　　　　　　　　teb(index);
// 　　　　　　},3000);
// 　　　　};
// 　　　　timeRun();
// 　　};
// 　　banner('.owl-wrapper>div','active','.owl-pagination>div');
})