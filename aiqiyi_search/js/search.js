//********************导航*********************
$(function() {
	onscroll = function() {
		var top = $("body").scrollTop();

		if(top > 490) {
			$(".fix").fadeIn("fast");
		} else {
			$(".fix").fadeOut("fast");
		}
	}
})
$(function() {

	var bg = new Array("url(img/d1-1.jpg)", "url(img/d1-2.jpg)", "url(img/d1-3.jpg)", "url(img/d1-4.jpg)", "url(img/d1-5.jpg)", "url(img/d1-6.jpg)", "url(img/d1-7.jpg)", "url(img/d1-8.jpg)", "url(img/d1-9.jpg)", "url(img/d1-10.jpg)");
	var sp = new Array("黑白迷宫", "醉玲珑 [56集全]", "中餐厅 ", "大话西游之爱你一万年 [更新至1..", "龙珠超 ", "亲爱的王子大人 [更新至20170101集]", "无证之罪 [更新至10集]", "轩辕剑之汉之云 [更新至34集]", "美味奇缘 [更新至33集]", "白夜追凶 [更新至20170830集]");
	var str = new Array("陈小春任达华再战江湖", "刘诗诗陈伟霆古装权谋", "答谢晚宴接连遇意外状况", "黄子韬演绎精分至尊宝", "新的敌人即将来袭", "张予曦谢佳见高甜萌爱", "首部社会派推理悬疑剧", "兄弟同心 剑出凌云", "Mike毛晓彤惺惺相惜", "中国首部硬汉派悬疑罪案剧");
	var flog = 0;
	$(".bottom_title li:eq(" + flog + ")").css("background", "#699f00");

	$(".top_adver .left_button").click(function() {
		flog--;
		if(flog == -1) {
			flog = 9;
		}
		$(".adver").css("background", bg[flog]);

		$(".adv_title span").text(sp[flog]);
		$(".adv_title p").text(str[flog]);
		$(".bottom_title li:eq(" + flog + ")").css("background", "#699f00");
		$(".bottom_title li:eq(" + flog + ")").siblings().css("background", "#B3B3B3");
	});
	$(".top_adver .right_button").click(function() {
		flog++;
		if(flog == 10) {
			flog = 0;
		}
		$(".adver").css("background", bg[flog]);

		$(".adv_title a:eq(0)").text(sp[flog]);
		$(".adv_title a:eq(1)").text(str[flog]);
		$(".bottom_title li:eq(" + flog + ")").css("background", "#699f00");
		$(".bottom_title li:eq(" + flog + ")").siblings().css("background", "#B3B3B3");
	});
	$(".top_adver .left_button").hover(function() {
		$(this).css("background", "url(img/site-focus-btnLeft_hover.png)");
	}, function() {
		$(this).css("background", "url(img/site-focus-btnLeft.png)");
	});
	$(".top_adver .right_button").hover(function() {
		$(this).css("background", "url(img/site-focus-btnRight_hover.png)");
	}, function() {
		$(this).css("background", "url(img/site-focus-btnRight.png)");
	});
	$(".bottom_title>ul li").mouseover(function() {
		flog = $(this).index();

		$(".adver").css("background", bg[flog]);
		$(".adv_title a:eq(0)").text(sp[flog]);
		$(".adv_title a:eq(1)").text(str[flog]);
		$(this).css("background", "#699f00");
		$(this).siblings().css("background", "#B3B3B3");
	})
	setInterval(function() {
		flog++;
		if(flog == 10) {
			flog = 0;
		}
		$(".adver").css("background", bg[flog]);
		$(".adv_title a:eq(0)").text(sp[flog]);
		$(".adv_title a:eq(1)").text(str[flog]);
		$(".bottom_title li:eq(" + flog + ")").css("background", "#699f00");
		$(".bottom_title li:eq(" + flog + ")").siblings().css("background", "#B3B3B3");
	}, 5000)

	$(".search_list ul:eq(0) li:lt(3) div").css("background", "#699f00");
	$(".search_list ul:eq(0) li:eq(2) a:eq(0)").css("color", "#fff");
	$(".search_list ul:eq(0) li:eq(1) a:eq(0)").css("color", "#fff");
	$(".search_list ul:eq(0) li:eq(0) a:eq(0)").css("color", "#fff");

	$(".search_list ul:eq(1) li:lt(3) div").css("background", "#699f00");
	$(".search_list ul:eq(1) li:eq(2) a:eq(0)").css("color", "#fff");
	$(".search_list ul:eq(1) li:eq(1) a:eq(0)").css("color", "#fff");
	$(".search_list ul:eq(1) li:eq(0) a:eq(0)").css("color", "#fff");

	$(".search_list ul:eq(2) li:lt(3) div").css("background", "#699f00");
	$(".search_list ul:eq(2) li:eq(2) a:eq(0)").css("color", "#fff");
	$(".search_list ul:eq(2) li:eq(1) a:eq(0)").css("color", "#fff");
	$(".search_list ul:eq(2) li:eq(0) a:eq(0)").css("color", "#fff");

	$(".search_list ul:eq(3) li:lt(3) div").css("background", "#699f00");
	$(".search_list ul:eq(3) li:eq(2) a:eq(0)").css("color", "#fff");
	$(".search_list ul:eq(3) li:eq(1) a:eq(0)").css("color", "#fff");
	$(".search_list ul:eq(3) li:eq(0) a:eq(0)").css("color", "#fff");

	$(".search_list ul:eq(4) li:lt(3) div").css("background", "#699f00");
	$(".search_list ul:eq(4) li:eq(2) a:eq(0)").css("color", "#fff");
	$(".search_list ul:eq(4) li:eq(1) a:eq(0)").css("color", "#fff");
	$(".search_list ul:eq(4) li:eq(0) a:eq(0)").css("color", "#fff");
	$(".top_title li").mouseover(function() {
		var index = $(this).index();
		$(this).css("background", "url(img/s_cur_Bg.png) -5px 0 no-repeat");
		$(this).siblings().css("background", "none");
		$(this).children("a").css("color", "#699f00");
		$(this).siblings().children("a").css("color", "#999");
		$(".search_list ul:eq(" + index + ")").show();
		$(".search_list ul:eq(" + index + ")").siblings().hide();
	})

})
//***************************今日热点****************************
$(".hot .rec_title li").mouseover(function() {
	$(this).children("a").css({
		"border-bottom": "2px solid #699f00",
		"color": "#699f00"
	});
	$(this).siblings().children("a").css({
		"border-bottom": "2px solid #fff",
		"color": "#333"
	});
})
$(".hot .rec_title li").mouseover(function() {
	var index = $(this).index();
	if(index == 0) {
		$(".hot_content").show();
		$(".today_hot .beauty").hide();
	} else {
		$(".hot_content").hide();
		$(".today_hot .beauty").show();
	}
})
//*****************************电影****************************
$(".Animation_content .rank_list_box li:lt(3) div").css({
	"background": "#fe7012",
	"color": "#fff"
});
$(".Fun_content .rank_list_box li:lt(3) div").css({
	"background": "#fe7012",
	"color": "#fff"
});
$(".music .rank_list_box li:lt(3) div").css({
	"background": "#fe7012",
	"color": "#fff"
});
$("#list1 li:lt(3) .list_icon,#tel_list1 li:lt(3) .list_icon").css({
	"background": "#fe7012",
	"color": "#fff"
});
$("#list2 li:lt(3) .list_icon,#tel_list2 li:lt(3) .list_icon").css({
	"background": "#fe7012",
	"color": "#fff"
});
$("#list3 li:lt(3) .list_icon,#tel_list3 li:lt(3) .list_icon").css({
	"background": "#fe7012",
	"color": "#fff"
});
$("#list4 li:lt(3) .list_icon,#tel_list4 li:lt(3) .list_icon").css({
	"background": "#fe7012",
	"color": "#fff"
});
$(".movie .left_content .rec_title li").mouseover(function() {
	$(this).children("a").css({
		"border-bottom": "2px solid #699f00",
		"color": "#699f00"
	});
	$(this).siblings().children("a").css({
		"border-bottom": "2px solid #fff",
		"color": "#333"
	});
	var index = $(this).index() + 1;
	$("#movie" + index).show();
	$("#movie" + index).siblings().hide();
})
$(".teleplay_content .left_content .rec_title li").mouseover(function() {
	$(this).children("a").css({
		"border-bottom": "2px solid #699f00",
		"color": "#699f00"
	});
	$(this).siblings().children("a").css({
		"border-bottom": "2px solid #fff",
		"color": "#333"
	});
	var index = $(this).index() + 1;
	$("#tel" + index).show();
	$("#tel" + index).siblings().hide();
})
$(".Animation_content .left_content .rec_title li").mouseover(function() {
	$(this).children("a").css({
		"border-bottom": "2px solid #699f00",
		"color": "#699f00"
	});
	$(this).siblings().children("a").css({
		"border-bottom": "2px solid #fff",
		"color": "#333"
	});
	var index = $(this).index() + 1;
	$("#Ani" + index).show();
	$("#Ani" + index).siblings().hide();
})
$(".movie .right_concent>.rec_title li").mouseover(function() {
	$(this).children("a").css({
		"border-bottom": "2px solid #699f00",
		"color": "#699f00"
	});
	$(this).siblings().children("a").css({
		"border-bottom": "2px solid #fff",
		"color": "#333"
	});
	var index = $(this).index() + 1;
	$("#list" + index).show();
	$("#list" + index).siblings().hide();
})
$(".teleplay_content .right_concent>.rec_title li").mouseover(function() {
	$(this).children("a").css({
		"border-bottom": "2px solid #699f00",
		"color": "#699f00"
	});
	$(this).siblings().children("a").css({
		"border-bottom": "2px solid #fff",
		"color": "#333"
	});
	var index = $(this).index() + 1;
	$("#tel_list" + index).show();
	$("#tel_list" + index).siblings().hide();
})
var listNum = 1;
$(".left_list_button").click(function() {
	listNum--;
	if(listNum == 0) {
		listNum = 3;
	}
	$("#movie_list" + listNum).show();
	$("#movie_list" + listNum).siblings().hide();
})
$(".right_list_button").click(function() {
	listNum++;
	if(listNum == 4) {
		listNum = 1;
	}
	$("#movie_list" + listNum).show();
	$("#movie_list" + listNum).siblings().hide();
})

//************************cookie***********************

$(function() {
	var his_cookie = $.cookie("HIS_COOKIE");
	if(his_cookie != null) { //如果cookie中有值，绑定到历史上
		var his = his_cookie.split(",");
		var html = '';
		for(var i = 0; i < his.length; i++) {
			html += '<li><a href="">'+his[i]+'</a> </li>';
		}
		$(".cookie ul").html(html);
	}
	$(".a .d .d1").focus(function() {
		$(".cookie").show();
	});

	$(".a .d .d1").blur(function() {
		$(".cookie").hide();
	});

	//点击搜索
	$(".a .d .d2").click(function() {
		var searchText = $(this).prev().val().trim();
		//追加cookie数据
		if(his_cookie != null) {
			his_cookie = searchText + "," + his_cookie;
		} else {
			his_cookie = searchText;
		}
		//设置cookie数据
		if(searchText.length > 1) {
			$.cookie("HIS_COOKIE", his_cookie);
		}
	});
});
