$(document).ready(function() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.blurb').css({'min-width': '0px'});
	}

	// $('#lgbt').hover(function() { console.log('hi'); $('#lgbt_container').hide();})
	// $('#tony_container').hover(function() { console.log('hi1');$('#tony_container').hide(); })
	// // $('.blurb').fadeOut(0);

	$('.box').click(function() {
		// change the blurb sidebar
		var blurb = '#' + $(this).attr('id') + '_text';
		
		$.when(
			$('#box_about').fadeOut('fast')
		).then(function() {
			$.when($('#box_about').html($(blurb).html())).then(function() {
				$('#box_about').fadeIn('fast');	
			})
					
		});

		// open the sidebar
		$('#project_boxes').css({
			'width': '45%'
		});
		$('#box_about').css({
			'width': '55%',
		});

		var find_color = '#' + $(this).attr('id') + '_container';
		var border = $(find_color).css("border-left-color");
		$('.blurb').css({
			'border-left-color': border,
		});
	})



	$('#filter li').click(function() {

		$('.filter_active').toggleClass('filter_active');
		$(this).toggleClass('filter_active');
		
		var filter = $(this).attr('id');
		var tagged = $(`[tags *= "${filter}"]`);

		if (filter == 'show_all') { tagged = $('.box'); } 
		$.when(
			$('.box').fadeOut("fast")
		).then(function() {
			$('#project_boxes').css({'width': '100%'});
			$('#box_about').css({'width': '0%'});
			tagged.delay(100).fadeIn(250);
	   		
		});
	});


});


