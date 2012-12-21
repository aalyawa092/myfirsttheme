// Execute jQuery functions only *after* jQuery JS has loaded
$(function(){
//	$('#main .row .span9').click(function(){
//		$(this).addClass('highlight');
//	});
//	$('#main .row .span4').hover(
//		function(){
//			4(this).addClass('highlight');
//		},
//		function(){
//			4(this).removeClass('highlight');
//		}
		
//	);
	$('#primary-nav').attr('data-spy','affix');
	$('#primary-nav').attr('data-offset-top','220');
	
	// Auto-hide alerts
	$('.alert').delay(2000).fadeOut();
	
	// Capture double-click of post 
//	$('p').dblclick(function(){
//		$(this).fadeOut(1000);
//		$(this).slideUp(1000);
//	});
	
//	$(document).keyup(function(e){
//		switch(e.which){
//		case 39:
//			window.location = 'http://www.google.com';
//			break;
//		case 20:
//		$('input[name=s]').val('');
//			break;
//		}
//	});
});