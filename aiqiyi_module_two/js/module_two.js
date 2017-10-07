$(".col-md-4 .left_title .onlyPlay").hover(
	function() {
		$(this).css("background", "#699f00");
		$(this).css("color", "#fff");
		$(".left_middle .hidden_box").slideDown("fast");

	},
	function() {
		$(this).css("background", "#fff");
		$(this).css("color", "#333");

	}

)
$(".left_middle .hidden_box").hover(
	function() {
		$(".left_middle .hidden_box").slideDown("fast");

	},
	function() {
		$(".left_middle .hidden_box").slideUp("fast");

	}
)
$(".left_middle .hidden_box li").hover(
	function() {
		$(this).css("background", "#78b500");
		$(this).children("a").css("color", "#FFFFFF");

	},
	function() {
		$(this).css("background", "none");
		$(this).children("a").css("color", "#333");

	}
)
$(function() {
	var flog = 0;

	$(".middle_top .botton_left").click(
		function() {
			if(flog == 0) {
				flog = 1;
				$(".middle_top").css("background", "url('http://pic1.qiyipic.com/common/20170916/8f895a9dafc04575bb665eccf55c6546.jpg')");
				$(".middle_top span").text("《战狼2》56亿票房背后的秘密");

			} else {
				flog = 0;
				$(".middle_top").css("background", "url('http://pic3.qiyipic.com/common/20170917/d996e5f2015c443786979f1823787e85.jpg')");
				$(".middle_top span").text("范冰冰获金鸡影后 与李晨颁奖礼撒狗粮");
			}
		}
	)
	$(".middle_top .botton_right").click(
		function() {
			if(flog == 0) {
				flog = 1;
				$(".middle_top").css("background", "url('http://pic1.qiyipic.com/common/20170916/8f895a9dafc04575bb665eccf55c6546.jpg')");
				$(".middle_top span").text("《战狼2》56亿票房背后的秘密");

			} else {
				flog = 0;
				$(".middle_top").css("background", "url('http://pic3.qiyipic.com/common/20170917/d996e5f2015c443786979f1823787e85.jpg')");
				$(".middle_top span").text("范冰冰获金鸡影后 与李晨颁奖礼撒狗粮");
			}
		}
	)
	setInterval(
		function() {
			if(flog == 0) {
				flog = 1;
				$(".middle_top").css("background", "url('http://pic1.qiyipic.com/common/20170916/8f895a9dafc04575bb665eccf55c6546.jpg')");
				$(".middle_top span").text("《战狼2》56亿票房背后的秘密");

			} else {
				flog = 0;
				$(".middle_top").css("background", "url('http://pic3.qiyipic.com/common/20170917/d996e5f2015c443786979f1823787e85.jpg')");
				$(".middle_top span").text("范冰冰获金鸡影后 与李晨颁奖礼撒狗粮");
			}
		}, 5000
	)
})