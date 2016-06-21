jQuery(document).ready(function($) {
	$(document).ready(function(){

		$('.chat_head').click(function(){

			$('.chat_body').slideToggle('slow');
		});


		$('.msg_head').click(function(){

			$('.msg_wrap').slideToggle('slow');
		});

		$(".close").click(function()
		{
			$('.msg_head').hide('fast');
			$('.msg_body').hide('fast');
			$('.msg_footer').hide('fast');
		});


		$(".user").click(function()
		{
			$('.msg_wrap').show();
			$('.msg_body').show('fast');
			$('.msg_head').show('fast');
			$('.msg_footer').show('fast');
			$('.msg_input').show('fast');

		});
		$('textarea').keypress(
	    	function(e){
	    	    if (e.keyCode == 13) {
	    	       var msg = $(this).val();
					$(this).val("");
					$("<div class='msg_b'>"+ msg + "</div>").insertBefore('.msg_insert');
					$('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
	    	    }
	    	});
		$('.msg_body').ready(function(){

	    		$('.msg_body').hide();
			$('.msg_head').hide('fast');
			$('.msg_footer').hide('fast');
			$('.msg_input').hide('fast');

		});
		$('.msg_body').ready(function(){

	    		$('.chat_body').slideToggle('slow');


		});
		if (navigator.onLine) {
  		console.log('online');
		} else {
  	console.log('offline');
	}
	})
});
