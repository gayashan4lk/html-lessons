$(function(){

	

	$('a#add').click(function(){
		var i = $('#nav li').size();
		$('<li>'+(++i)+'</li>').appendTo('ul#nav');
	});

	$('a#remove').click(function(){
		$('li:last').remove();
	})

});