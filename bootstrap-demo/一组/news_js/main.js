/*
* @Author: yangtao
* @Date:   2016-01-12 13:06:31
* @Last Modified by:   yangtao
* @Last Modified time: 2017-05-14 16:09:27
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
	$('.dropdown').click(function(){
		this.css('background','#fff');
	})
})