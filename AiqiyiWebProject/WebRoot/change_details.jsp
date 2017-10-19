<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
 	<meta charset="utf-8" />
    <base href="<%=basePath%>">
   		<link rel="stylesheet" type="text/css" href="css/personal_detail.css"/>
		<link rel="stylesheet" type="text/css" href="pargin/bootstrap-3.3.7/css/bootstrap.min.css"/>
    <title>个人信息完善</title>


  </head>
  
  <body>
   <div class="vip_show">
			<div class="min_details">
				<div class="head_img"><img src="img/headicon01-130.png" width="50px" height="50px" /> </div>
				<div class="details_show">
					<p class="aiqiyi_name">aiqiyi</p>
					<span>您尚未开通任何VIP套餐</span>
					<div>立即开通VIP</div>
				</div>
			</div>
			<div class="vip_details"><img src="img/qqq.png" width="100%" height="100%"/> </div>
		</div>
		
		<div>
			
			<form method="post" action="changeDetails">
				<h2>个人信息完善</h2>
				<p><span>昵称:</span><input type="text" name="name" /><span>填写您的昵称</span></p>
				<p><span>密码:</span><input type="password" name="pwd" /><span>填写登录密码</span> </p>
				<p><span>性别:</span><input type="text" name="sex" /><span>填写您的性别</span> </p>
				<p><span>QQ:  </span><input type="text" name="QQ" /><span>填写您的QQ账号</span> </p>
				<p><span>电话: </span> <input type="text" name="tel" /><span>填写您手机号码</span> </p>
				<button type="submit" class="btn btn-info">提交个人信息</button>
			</form>
		</div>
		<script type="text/javascript" src="js/jquery-3.2.1.min.js" ></script>
		<script>
			$("form p:even").css("background","#fafafa");
			$("form p:odd").css("background","#fff");
		</script>
  </body>
</html>
