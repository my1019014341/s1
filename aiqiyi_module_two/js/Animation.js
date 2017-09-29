//********************导航*********************
$(function(){
	onscroll = function(){
		var top = $("body").scrollTop();
		
		if(top>490){
			$(".fix").fadeIn("fast");
		}else{
			$(".fix").fadeOut("fast");
		}
	}
})
//******************************************************
$(function() {
	var flog = 0;
	var str = new Array("航海王 第805集", "龙珠超 第107集", "名侦探柯南 第928集", "迪士尼公主娃娃派对", "次元二Bi治：痴汉幻想 娇羞少女清纯..", "Princess Principal 第11集", "数码宝贝宇宙 应用怪兽 第50集", "Re:CREATORS 第22集", "带着智慧型手机闯荡异世界 第11集")

	setInterval(
		function() {

			flog++;
			if(flog == 9) {
				flog = 0;
			}
			$(".adv_img li img").css("border", "3px solid rgba(0, 0, 0, 0)");
			$(".adv_img li:eq(" + flog + ") img").css("border", "3px solid #6CC900");
			$(".top_adver").css("background", "url(img/bg" + flog + ".jpg)");
			$(".adv_title span").text(str[flog]);
			$(".top_adver>a").attr("href",bghref[flog]);
		}, 5000
	)
	$(".adv_img li").mouseover(
		function() {
			var index = $(this).index();
			flog = index;
			$(".adv_img li img").css("border", "3px solid rgba(0, 0, 0, 0)");
			$(".adv_img li:eq(" + flog + ") img").css("border", "3px solid #6CC900");
			$(".top_adver").css("background", "url(img/bg" + flog + ".jpg)");
			$(".adv_title span").text(str[flog]);
			$(".top_adver>a").attr("href",bghref[flog]);
		}
	)
	$(".button_left").click(
		function() {
			flog--;
			if(flog == -1) {
				flog = 8;
			}
			$(".adv_img li img").css("border", "3px solid rgba(0, 0, 0, 0)");
			$(".adv_img li:eq(" + flog + ") img").css("border", "3px solid #6CC900");
			$(".top_adver").css("background", "url(img/bg" + flog + ".jpg)");
			$(".adv_title span").text(str[flog]);
			$(".top_adver>a").attr("href",bghref[flog]);
		}
	)
	$(".button_right").click(
		function() {
			flog++;
			if(flog == 9) {
				flog = 0;
			}
			$(".adv_img li img").css("border", "3px solid rgba(0, 0, 0, 0)");
			$(".adv_img li:eq(" + flog + ") img").css("border", "3px solid #6CC900");
			$(".top_adver").css("background", "url(img/bg" + flog + ".jpg)");
			$(".adv_title span").text(str[flog]);
			$(".top_adver>a").attr("href",bghref[flog]);
		}
	)
	
		var bghref = new Array("http://www.iqiyi.com/v_19rr8o2ajo.html","http://www.iqiyi.com/v_19rr8o1d8s.html","http://www.iqiyi.com/v_19rr8p1xww.html",
		"http://www.iqiyi.com/a_19rrhdogml.html","http://www.iqiyi.com/v_19rr919h7k.html?list=19rrlcw1xa","http://www.iqiyi.com/v_19rr8oa3y0.html",
		"http://www.iqiyi.com/v_19rr8op1ck.html","http://www.iqiyi.com/v_19rr8p01h4.html","http://www.iqiyi.com/v_19rr8mzyns.html");
//		$(".top_adver>a").attr("href",bghref[flog]);
	
})
//********************************************************
$(".top_adver").css("transition", "background 0.5s ease");
//********************************************************
$(function() {
	var date = new Date();
	
	var today = (date.getDay() - 1);
	if(today==-1){
		today=6;
	}
	
	$(".Chas_middle .week:eq(" + today + ")").show();
	$(".Chas_list li:eq(" + today + ")").children(".week_img").css({
		"display": "block",
		"background": "url(img/cartoon.png) " + today * (-40) + "px -178px no-repeat"
	});
	$(".Chas_list li:eq(" + today + ")").children("a").css({
		"margin-left": "10px",
		"color": "#5AA700"
	});
	$(".Chas_list li:eq(" + today + ")").addClass("Chas_list_hover");
	$(".Chas_list li").mouseover(
		function() {
			var flog = $(this).index();

			$(this).children(".week_img").css({
				"display": "block",
				"background": "url(img/cartoon.png) " + flog * (-40) + "px -178px no-repeat"
			});

			$(this).children("a").css({
				"margin-left": "10px",
				"color": "#5AA700"
			});

			$(this).children(".week_img").parent().siblings().children(".week_img").css("display", "none");
			$(this).children("a").parent().siblings().children("a").css({
				"margin-left": "75px",
				"color": "#000"
			});

			$(this).addClass("Chas_list_hover");
			$(this).siblings().removeClass("Chas_list_hover");
			$(".Chas_middle .week:eq(" + flog + ")").show();
			$(".Chas_middle .week:eq(" + flog + ")").siblings().hide();
		}

	)
})
$(function() {
	$(".new_China .day_list_li:eq(1) li:eq(0),.day_list_li:eq(1) li:eq(0),.new_China .day_list_li:eq(0) li:eq(0),.day_list_li:eq(0) li:eq(0)").children(".num_icon").css("background", "#FF2533");
	$(".new_China .day_list_li:eq(1) li:eq(1),.day_list_li:eq(1) li:eq(1),.new_China .day_list_li:eq(0) li:eq(1),.day_list_li:eq(0) li:eq(1)").children(".num_icon").css("background", "#FD8912");
	$(".new_China .day_list_li:eq(1) li:eq(2),.day_list_li:eq(1) li:eq(2),.new_China .day_list_li:eq(0) li:eq(2),.day_list_li:eq(0) li:eq(2)").children(".num_icon").css("background", "#FEC300");
	$(".right_list li").mouseover(function() {
		$(this).css("height", "70px");
		$(this).siblings().css("height", "35px");
		$(this).children(".over_before").hide();
		$(this).siblings().children(".over_before").show();
		$(this).children(".over_after").show();
		$(this).siblings().children(".over_after").hide();

	})
	$(".day_list").css({
		"border": "1px solid #5AA700",
		"color": "#5AA700"
	});
	$(".day_list").click(function() {
		$(this).css({
			"border": "1px solid #5AA700",
			"color": "#5AA700"
		});
		$(this).next(".day_list3").css({
			"border": "1px solid #CFCFCF",
			"color": "#555"
		});
		$(this).next().next().show();
		$(this).next().next().next().hide();
	})
	$(".day_list3").click(function() {
		$(this).css({
			"border": "1px solid #5AA700",
			"color": "#5AA700"
		});
		$(this).prev(".day_list").css({
			"border": "1px solid #CFCFCF",
			"color": "#555"
		});
		$(this).next().next().show();
		$(this).next().hide();
	})
})
//*********************************************************
$(function() {
	$(".Ani_list .img_list").css("transition", "all 2s ease");
	$(".Ani_list .img_list").hover(function() {
//		$(".Ani_list .left_button,.Ani_list .right_button").show();
		$(this).children(".left_button,.right_button").show();
	}, function() {
//		$(".Ani_list .left_button,.Ani_list .right_button").hide();
		$(this).children(".left_button,.right_button").hide();
		
	})
	var flog = 0;
	$(".Ani_list .left_button").click(function() {
		flog--;

		if(flog == -3) {
			flog = 0;
		}
		switch(flog) {
			case 0:
				$(this).parent(".img_list").css("margin-left", "0px");
				break;
			case -1:
				$(this).parent(".img_list").css("margin-left", "-1581px");
				break;
			case -2:
				$(this).parent(".img_list").css("margin-left", "-640px");
				break;
		}

	})

	$(".Ani_list .right_button").click(function() {
		flog++;

		if(flog == 3) {
			flog = 0;
		}
		switch(flog) {
			case 0:
				$(this).parent(".img_list").css("margin-left", "0px");
				break;
			case 1:
				$(this).parent(".img_list").css("margin-left", "-938px");
				break;
			case 2:
				$(this).parent(".img_list").css("margin-left", "-1581px");
				break;
		}

	})
})