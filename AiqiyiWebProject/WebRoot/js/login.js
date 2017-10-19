/*
 * 登陆开与关
 */
function closeLogin() {
	document.getElementById("login_background").style.visibility = "hidden";

}

function openLogin() {
	document.getElementById("login_background").style.visibility = "visible";
	saoma();
}

function openZhuce() {
	document.getElementById("login_background").style.visibility = "visible";
	zhuce();
}
/*
 * 鼠标事件
 */
function changeToRight() {
	document.getElementById("login_middle_right").style.animationName = "toright1";
	document.getElementById("login_middle_right").style.animationDuration = "0.4s";
	document.getElementById("login_middle_left").style.animationName = "toright2 ";
	document.getElementById("login_middle_left").style.animationDelay = "0.4s";
	document.getElementById("login_middle_left").style.animationDuration = "0.2s";

}

function changeToleft() {
	document.getElementById("login_middle_right").style.animationName = "toleft1";
	document.getElementById("login_middle_right").style.animationDuration = "0.7s";
	document.getElementById("login_middle_left").style.animationName = "toleft2";
	document.getElementById("login_middle_left").style.animationDelay = "0s";
	document.getElementById("login_middle_left").style.animationDuration = "1s";

}

/*
 * 登陆内部界面切换
 */

//手机扫码登陆

function saoma() {
	$(".login_middle").children().hide();
	$(".login_middle_1").show();
	$("#login_bottom_char a").hide();
	$("#login_other").show();
	$("#login_zhanghao").show();

}
$("#login_saoma1,#login_saoma2").click(function() {
	saoma();
})
//其他方式登陆
$("#login_other").click(function() {
	$(".login_middle").children().hide();
	$(".login_middle_2").show();
	$("#login_bottom_char a").hide();
	$("#login_zhanghao").show();
	$("#login_saoma2").show();
	$("#login_zhuce").show();
})
//账号密码登陆

$("#login_zhanghao").click(function() {
	$(".login_middle").children().hide();
	$(".login_middle_3").show();
	$("#login_bottom_char a").hide();
	$("#login_saoma1").show();
	$("#login_other").show();
	$("#login_zhuce").show();
})
//注册
function zhuce() {
	$(".login_middle").children().hide();
	$(".login_middle_4").show();
	$("#login_bottom_char a").hide();
	$("#login_saoma2").show();
	$("#login_zhanghao").show();
	$("#login_zhuce").hide();
}
$("#login_zhuce").click(function() {
	zhuce()
});

//注册的输入框效果
//输入弹出
$(".login_middle_3_input").focus(function() {
	$(this).next().css({
		"margin-bottom": "30px",
		"font-size": "12px"
	})
	$(this).parent().css("border-color", "#5AA700");
	$(this).parent().parent().css("border-color", "#5AA700");

})

$(".login_middle_3_input").blur(function() {
	if($(this).val() == "") {
		$(this).next().css({
			"margin-bottom": "0",
			"font-size": "16px"
		})
		$(this).parent().css("border-color", "#DDD");
		$(this).parent().parent().css("border-color", "#DDD");
	}
})

$(".login_middle_3 p").click(function() {
	$(this).prev().focus();
})
$(".login_middle_4 p").click(function() {
	$(this).prev().focus();
})
//密码框改变
$("#login_middle_3_middle_change").click(function() {
	if($("#login_middle_3_password").attr("type") == "password") {
		$("#login_middle_3_password").attr("type", "text");
		$("#login_middle_3_middle_change").css("background", "url(img/login/QQ图片20170923161602.png)")
	} else {
		$("#login_middle_3_password").attr("type", "password");
		$("#login_middle_3_middle_change").css("background", "url(img/login/QQ图片20170923161555.png)")
	}

})
//密码框变色
function submitColorChange(dom) {
	if($(dom).val() !== "") {
		$(dom).parent().parent().parent().find(":submit").css("background", "#5AA700");
	} else {
		$(dom).parent().parent().parent().find(":submit").css("background", "#BCDD98");
	}

}
/*
 * 正则部分
 */
$("form").submit(function() {
	//区分注册和登陆
	if($("#login_middle_3_middle:hidden").length > 0) {
		//注册
		//手机号判断
		var phone = $(".login_middle_4 .login_middle_3_input").val().trim();
		if(phone == "") {
			$(".login_middle_4 .login_middle_3_input").next().next().text("手机号不能为空");
			return false;
		}
		if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(phone)) {
			$(".login_middle_4 .login_middle_3_input").next().next().text("请输入正确的手机号");
			return false;
		}
	} else {
		//登陆
		//账号判断
		var user = $(".login_middle_3 .login_middle_3_input[type=text]").val().trim();
		if(user == "") {
			$(".login_middle_3 .login_middle_3_input[type=text]").next().next().text("账号不能为空");
			return false;
		}
		if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(user) && !/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(user)) {
			$(".login_middle_3 .login_middle_3_input[type=text]").next().next().text("请输入正确的账号");
			return false;
		}
		//密码框判断
		var pwd = $("#login_middle_3_password").val().trim();
		if(pwd == "") {
			$("#login_middle_3_password").next().next().text("密码不能为空");
			return false;
		}
		if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,12}$/.test(pwd)) {
			$("#login_middle_3_password").next().next().text("密码必须为6到12位的数字字母组合");
			return false;
		}

	}
})
/*单独判断
 * 
 */
//手机号
function mobile() {
	var phone = $(".login_middle_4 .login_middle_3_input").val().trim();
	if(phone == "") {
		$(".login_middle_4 .login_middle_3_input").next().next().text("手机号不能为空");
		return false;
	}
	if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(phone)) {
		$(".login_middle_4 .login_middle_3_input").next().next().text("请输入正确的手机号");
		return false;
	}
	$(".login_middle_4 .login_middle_3_input").next().next().text("");
}
//账号
function username() {
	var user = $(".login_middle_3 .login_middle_3_input[type=text]").val().trim();
	if(user == "") {
		$(".login_middle_3 .login_middle_3_input[type=text]").next().next().text("账号不能为空");
		return false;
	}
	if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(user) && !/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(user)) {
		$(".login_middle_3 .login_middle_3_input[type=text]").next().next().text("请输入正确的账号");
		return false;
	}
	$(".login_middle_3 .login_middle_3_input[type=text]").next().next().text("");
}
//密码
function onpassword() {
		var pwd = $("#login_middle_3_password").val().trim();
		if(pwd == "") {
			$("#login_middle_3_password").next().next().text("密码不能为空");
			return false;
		}
		if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,12}$/.test(pwd)) {
			$("#login_middle_3_password").next().next().text("密码必须为6到12位的数字字母组合");
			return false;
		}
		$("#login_middle_3_password").next().next().text("");
}