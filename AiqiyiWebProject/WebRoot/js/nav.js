$(function() {
			onscroll = function() {
				var top = $("body").scrollTop();

				if(top > 490) {
					$(".fix").fadeIn("fast");
				} else {
					$(".fix").fadeOut("fast");
				}
			}
	}	)