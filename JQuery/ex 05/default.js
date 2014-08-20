$(function(){
	$('a').click(function(){
		$('<div id="info" />').load('info.html #movies',
		function(){
			$(this).appendTo('#container');
		});
	});
	
});