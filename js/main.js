$(document).ready(function() {
	$('#filter li').click(function() {

		$('.filter_active').toggleClass('filter_active');
		$(this).toggleClass('filter_active');
		
		var filter = $(this).attr('id');
		var tagged = $(`[tags *= "${filter}"]`);

		if (filter == 'show_all') { tagged = $('.flex_container'); } 
		
		$.when(
			$('.flex_container').fadeOut("fast")
		).then(function() {
			tagged.delay(100).fadeIn(250);
	   		
		});
	});
});


