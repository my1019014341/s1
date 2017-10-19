$(function() {
	$(".nav3 li").mouseenter(function() {
		$(this).find("p").show("300");
		$(this).find(".nav3_cover").css("background", "rgba(0,0,0,0.2)")
	})
	$(".nav3 li").mouseleave(function() {
		$(this).find("p").hide("fast");
		$(this).find(".nav3_cover").css("background", "")
	})
	$(".nav4 img").mouseenter(function() {
		$(this).animate({
			"bottom": "30px"
		}, 300);
		$(this).animate({
			"bottom": "0px"
		}, 300);
		$(this).animate({
			"bottom": "8px"
		}, "fast");
		$(this).animate({
			"bottom": "0px"
		}, "fast");
	})

	$(".nav4 img").mouseleave(function() {
		$(this).stop(true);
		$(this).animate({
			"bottom": "0px"
		}, "100");
	})
	$("#nav4_left a").click(function() {
		var nav4LeftLength = $(".nav4 ul").position().left + 95;
		if(nav4LeftLength > 100) {
			return false;
		}
		nav4_Judge(nav4LeftLength);
		$(".nav4 ul").animate({
			"left": nav4LeftLength + "px"
		}, 300);

	})
	$("#nav4_right a").click(function() {
		var nav4LeftLength = $(".nav4 ul").position().left - 95;
		if(nav4LeftLength < -185) {
			return false;
		}
		nav4_Judge(nav4LeftLength);
		$(".nav4 ul").animate({
			"left": nav4LeftLength + "px"
		}, 300);

	})
})

function nav4_Judge(dom) {
	if(dom < -90) {
		$("#nav4_right a").css({
			"background-position": "-100px -1100px",
			"cursor": "default"
		});
	} else {
		$("#nav4_right a").css({
			"background-position": "-80px -1100px",
			"cursor": "pointer"
		});
	}
	if(dom > 5) {
		$("#nav4_left a").css({
			"background-position": "-40px -1100px",
			"cursor": "default"
		});
	} else {
		$("#nav4_left a").css({
			"background-position": "0px -1100px",
			"cursor": "pointer"
		});
	}
}