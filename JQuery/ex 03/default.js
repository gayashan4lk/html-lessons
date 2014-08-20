$(function(){
	$('img').animate({
		'opacity':0.8
	});
	$('img').hover(function(){
		$(this).stop().animate({
			'opacity':1 
		})
	},function(){
		$(this).stop().animate({
			'opacity':0.8 
		})
	});

});