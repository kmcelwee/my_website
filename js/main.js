$(document).ready(function() {
	var blurbs = $('.outer_blurb');
	var hr = $('.hr');
	var flexes = $('.flex_container');

	$('#filter li').click(function() {
		blurbs.css({'display': 'none'});
		hr.css({'display': 'none'});
		
		$('.filter_active').toggleClass('filter_active');
		$(this).toggleClass('filter_active');
		
		var filter = $(this).attr('id');
		var tagged = $(`[tags *= "${filter}"]`);

		if (filter == 'show_all') { tagged = flexes; } 
		
		flexes.hide()
		tagged.show()
	});

	blurbs.css({'display': 'none'});
	hr.css({'display': 'none'});

	$('.box').click(function() {
		blurbs.show();
		hr.show();
		var where_to = '#' + this.id + '_flex_container';
		$('html, body').animate({scrollTop: $(where_to).offset().top - 20}, 500); //$(window).height()*.25
	});

});


