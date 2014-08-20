$(function(){
	$('a').click(function(){
		//$('#box').toggle(200);
		$('#box').toggleClass('border');
	});

	$('p').click(function(){
		$(this).toggleClass('highlight');
	});
	
});