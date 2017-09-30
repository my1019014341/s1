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
$(function() {

	var bg = new Array("url(img/topbg_1.jpg)", "url(img/topbg_2.jpg)", "url(img/topbg_3.jpg)", "url(img/topbg_4.jpg)", "url(img/topbg_5.jpg)", "url(img/topbg_6.jpg)", "url(img/topbg_7.jpg)", "url(img/topbg_8.jpg)", "url(img/topbg_9.jpg)");

	var lin = new Array("http://www.iqiyi.com/v_19rr7sor94.html", "http://www.iqiyi.com/kszt/jianjiaozhiye.html?src=focustext_1_20130410_7", "http://www.iqiyi.com/v_19rr8q2g38.html?src=focustext_1_20130410_4", "http://www.iqiyi.com/v_19rr8jbmeo.html?src=focustext_1_20130410_6", "http://www.iqiyi.com/dianshiju/sjll_wjt.html?src=focustext_1_20130410_5", "http://www.iqiyi.com/v_19rr91tio0.html?src=focustext_1_20130410_9", "http://www.iqiyi.com/v_19rr8t1nh0.html?src=focustext_1_20130410_10", "http://www.iqiyi.com/v_19rr8lyjs4.html?src=focustext_1_20130410_1", "http://www.iqiyi.com/v_19rr91b868.html?src=focustext_1_20130410_11");
	var sp = new Array("我们这一天", "爱奇艺尖叫之夜演唱会", "高能医少", "轩辕剑之汉之云", "神剧亮了第201期", "美味奇缘", "苦乐村官", "大话西游之爱你一万年", "囧先生");
	var str = new Array("[18集全] 美剧界清流口碑炸裂", "爱奇艺尖叫之夜演唱会（济南站），和HEBE相约19:30。", "[更新至12集] 魏大勋获透视眼入顶级医学院变学渣上演高能日常！", "[更新至34集] 焉逢暮云兄弟相认，朝希壁咚发糖！", "小精灵”黄子韬化身至尊宝，魔性来袭！", "[更新至31集] Mike毛晓彤惺惺相惜", "[更新至15集] 万喜带领乡亲脱贫致富", "[更新至14集] 黄子韬化身至尊宝与紫霞虐恋，尹正变身话痨唐僧", "[20集全] 黑色荒诞小人物喜剧");
	var flog = 0;
	$(".top_adver>ul li:eq(" + flog + ")").css("background", "#699f00");

	$(".top_adver .left_button").click(function() {
		flog--;
		if(flog == -1) {
			flog = 8;
		}
		$(".top_adver").css("background", bg[flog]);
		$(".top_adver>a").attr("href", lin[flog]);
		$(".adv_title span").text(sp[flog]);
		$(".adv_title p").text(str[flog]);
		$(".top_adver>ul li:eq(" + flog + ")").css("background", "#699f00");
		$(".top_adver>ul li:eq(" + flog + ")").siblings().css("background", "#B3B3B3");
	});
	$(".top_adver .right_button").click(function() {
		flog++;
		if(flog == 9) {
			flog = 0;
		}
		$(".top_adver").css("background", bg[flog]);
		$(".top_adver>a").attr("href", lin[flog]);
		$(".adv_title span").text(sp[flog]);
		$(".adv_title p").text(str[flog]);
		$(".top_adver>ul li:eq(" + flog + ")").css("background", "#699f00");
		$(".top_adver>ul li:eq(" + flog + ")").siblings().css("background", "#B3B3B3");
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
	$(".top_adver>ul li").mouseover(function() {
		flog = $(this).index();

		$(".top_adver").css("background", bg[flog]);
		$(".top_adver>a").attr("href", lin[flog]);
		$(".adv_title span").text(sp[flog]);
		$(".adv_title p").text(str[flog]);
		$(this).css("background", "#699f00");
		$(this).siblings().css("background", "#B3B3B3");
	})
	setInterval(function() {
		flog++;
		if(flog == 9) {
			flog = 0;
		}
		$(".top_adver").css("background", bg[flog]);
		$(".top_adver>a").attr("href", lin[flog]);
		$(".adv_title span").text(sp[flog]);
		$(".adv_title p").text(str[flog]);
		$(".top_adver>ul li:eq(" + flog + ")").css("background", "#699f00");
		$(".top_adver>ul li:eq(" + flog + ")").siblings().css("background", "#B3B3B3");
	}, 5000)
})