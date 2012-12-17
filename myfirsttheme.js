// Execute jQuery functions only *after* jQuery JS has loaded
$(function(){
	$('#main .row .span9').click(function(){
		$(this).addClass('highlight');
	});
	$('#main .row .span4').hover(
		function(){
			4(this).addClass('highlight');
		},
		function(){
			4(this).removeClass('highlight');
		}
		
	);
	
	// Capture double-click of post 
	$('p').dblclick(function(){
		$(this).fadeOut(1000);
		$(this).slideUp(1000);
	});
});