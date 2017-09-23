$("#serve").hover(
	function() {
		$(".service").slideDown("fast")
	},
	function() {
		$(".service").slideUp("fast")
	}
)
$(".nav_bottom li").hover(
	function() {
		var index = $(this).index(this)
		$(this).css("transform", "translate(20px)")
		$(this).css("transition", "all 1s ease")
	},
	function() {
		var index = $(this).index(this)
		$(this).css("transform", "translate(0px)")
		$(this).css("transition", "all 1s ease")
	}
)
$(".middle_bg").css("background", "url(img/bg1.jpg) no-repeat -489px 23px")
$(function() {
	var img = Array("bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg", "bg7.jpg");
	var flog = 0;
	
	$(function(){
		
		setInterval(function(){
			if(flog == img.length - 1) {
			$(".middle_bg").css("background", "url(img/bg" + 1 + ".jpg) no-repeat -489px 23px")
			flog = 0;
			$(".ul li:first-child").css("background", "orange")
			$(".ul li:last-child").css("background", "white")
		} else {
			flog++;
			var i = flog + 1;
			$(".middle_bg").css("background", "url(img/bg" + i + ".jpg) no-repeat -489px 23px")
			$(".ul li:nth-of-type(" + i + ")").css("background", "orange")
			$(".ul li:nth-of-type(" + i + ")").siblings().css("background", "white")
		}
			
		},3000)	
	})
	$(".middle_bg").css("transition","all 1s ease")
	$("._right").click(function() {
		if(flog == img.length - 1) {
			$(".middle_bg").css("background", "url(img/bg" + 1 + ".jpg) no-repeat -489px 23px")
			flog = 0;
			$(".ul li:first-child").css("background", "orange")
			$(".ul li:last-child").css("background", "white")
		}
		else {
			flog++;
			var i = flog + 1;
			$(".middle_bg").css("background", "url(img/bg" + i + ".jpg) no-repeat -489px 23px")
			$(".ul li:nth-of-type(" + i + ")").css("background", "orange")
			$(".ul li:nth-of-type(" + i + ")").siblings().css("background", "white")
		}
	})
	$("._left").click(function() {
		if(flog == 0) {
			$(".middle_bg").css("background", "url(img/bg" + 7 + ".jpg) no-repeat -489px 23px")
			flog = 6;
			$(".ul li:first-child").css("background", "white")
			$(".ul li:last-child").css("background", "orange")
		} else {
			flog--;
			var i = flog + 1;
			$(".middle_bg").css("background", "url(img/bg" + i + ".jpg) no-repeat -489px 23px")
			$(".ul li:nth-of-type(" + i + ")").css("background", "orange")
			$(".ul li:nth-of-type(" + i + ")").siblings().css("background", "white")
		}
	})

})
$(function() {

	$(".right_nav li").hover(
		function() {

			var bgColor = Array("orangered", "orange", "yellow", "orchid", "pink", "#33FFFF", "plum");
			var rand = bgColor[Math.floor(Math.random() * 7)];
			$(this).css("background", rand)
		},
		function() {
			$(this).css("background", "white")
		}
	)
})
$(".gusLove li").hover(
			function(){
				$(this).children("div").show();
			},
			function(){
				$(this).children("div").hide();
			}
		)
$(".first_fruit li").hover(
	function(){
		$(this).css("transform","translate(0,-15px)")
		$(this).css("transition","all 1s ease")
	},
	function(){
		$(this).css("transform","translate(0,0)")
	}
)
$(".weekChoose_second li").hover(
	function(){
		$(this).css("transform","translate(0,-15px)");
		$(this).css("transition","all 1s ease");
	},
	function(){
		$(this).css("transform","translate(0,0)");
	}
)
$(".weekChoose_first li").hover(
	function(){
		$(this).children("img").css("transform","scale(1.3)");
		$(this).children("img").css("transition","all 1s ease");
	},
	function(){
		$(this).children("img").css("transform","scale(1)");
		
	}
)
$("._top img").hover(
	function(){
		$(this).css("transform","scale(1.1)")
		$(this).css("transition","all 1s ease")
	},
	function(){
		$(this).css("transform","scale(1)")
		$(this).css("transition","all 1s ease")
	}
)
$(".menu .left_nav li").hover(
	function(){
		$(this).siblings().css("opacity","0.5");
	},
	function(){
		$(this).siblings().css("opacity","1");
	}
)
