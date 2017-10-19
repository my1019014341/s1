<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <meta charset="UTF-8">
    <title>爱奇艺</title>
		<link rel="stylesheet" type="text/css" href="plugin/css/bootstrap.min.css" />
		<link rel="stylesheet" href="css/shouye.css" />
		<link rel="stylesheet" href="css/utils.css" />
		<link rel="stylesheet" href="css/login.css" />
		<link rel="stylesheet" href="css/module_two.css" />
		<link rel="stylesheet" type="text/css" href="css/zs.css" />
		<link rel="stylesheet" href="css/footer.css" />

  </head>
  
  <body>
   
		<div id="login_background">
			<div id="login">
				<div class="login_top">
					<div class="login_top_img"></div>
					<span>手机扫码登陆</span>
					<button type="button" class="glyphicon glyphicon-remove" onclick="closeLogin()"></button>
				</div>
				<div class="login_middle">
					<div class="login_middle_1">
						<div id="login_middle_right">
							<div id="login_middle_right_top">
								打开
								<a href="">· 爱奇艺手机APP</a>
								<p>扫描二维码登陆</p>
							</div>
							<div id="login_middle_right_bottom" onmouseenter="changeToRight()" onmouseleave="changeToleft()">
								<img src="img/login/QQ图片20170920084103.png" />
							</div>
						</div>
						<div id="login_middle_left">
							<img src="img/login/QQ图片20170920084459.png" />
						</div>
					</div>
					<div class="login_middle_2">
						<div class="login_middle_2_top">其他方式登陆</div>
						<div class="login_middle_2_middle">
							<ul class="login_middle_2_ul">
								<li>
									<a href="https://graph.qq.com/oauth/show?which=Login&display=pc&response_type=code&client_id=100234077&redirect_uri=https://passport.yhd.com/qq/callback.do&scope=get_user_info&state=09b0987bb35356c95a4ccc16e594266b" target="_blank"><img src="img/login/QQ.png" /></a>
								</li>
								<li>
									<a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxbdc5610cc59c1631&redirect_uri=https%3A%2F%2Fpassport.yhd.com%2Fwechat%2Fcallback.do&response_type=code&scope=snsapi_login&state=aa687158acbbd5c3b79520fb221ad69d#wechat_redirect " target="_blank "><img src="img/login/微信.png" /></a>
								</li>
								<li>
									<a href="https://api.weibo.com/oauth2/authorize?client_id=2794712645&redirect_uri=https%3A%2F%2Fpassport.yhd.com%2Fsina%2Fcallback.do&state=700263a5269043f958c03c09bd961730&display=default&response_type=code " target="_blank "><img src="img/login/新浪微博.png" /></a>
								</li>
								<li>
									<a href="https://openapi.baidu.com/oauth/2.0/authorize?client_id=kYGyYj9HePPBbpKqGvpZgpMS&scope=basic&response_type=code&state=50ad213f8b5e5c426465a7d9354d1fc0&redirect_uri=https%3A%2F%2Fpassport.yhd.com%2Fbaidu%2Fcallback.do" target="_blank"><img src="img/login/百度.png" /></a>
								</li>
							</ul>
							<ul class="login_middle_2_ul">
								<li>
									<a href="http://t.qq.com/" target="_blank"><img src="img/login/腾讯微博.png" /></a>
								</li>
								<li>
									<a href="http://graph.renren.com/oauth/grant?client_id=34dbd204cebc423baeeed4bcbf0f1af9&redirect_uri=https%3A%2F%2Fpassport.yhd.com%2Frenren%2Fcallback.do&response_type=code&display=page&state=80aa63bec6e915cdbbb2167ba7a7969a&secure=true&origin=00000&x_renew=true" target="_blank"><img src="img/login/人人网.png" /> </a>
								</li>
							</ul>
						</div>
						<div class="login_middle_2_bottom">
							<a href="http://www.iqiyi.com/iframe/smslogin?from_url=http%3A%2F%2Fwww.iqiyi.com%2F" target="_blank">短信登陆</a>
						</div>
					</div>
					<div class="login_middle_3">
						<form method="post" action="login">
							<div class="login_middle_3_top">
								<div class="login_middle_3_top_left">
									<select>
										<option selected="selected">中国大陆</option>
										<option>美国/加拉大</option>
										<option>德国</option>
										<option>法国</option>
									</select>
								</div>
								<div class="login_middle_3_top_right">
									
										<input class="login_middle_3_input" type="text" oninput="username()" name='tel' />
										<p>请输入手机号或邮箱</p><span style="color: red;"></span>
									
									
								</div>
							</div>
							<div id="login_middle_3_middle">
								<input type="password" class="login_middle_3_input" name='pwd' id="login_middle_3_password" oninput="onpassword();submitColorChange(this)" />
								<p>请输入密码</p><span style="color: red;"></span>
								<div id="login_middle_3_middle_change"></div>
								<div class="login_middle_3_forget">
									<a href="javascript:;">忘记密码</a>
									<div class="login_middle_3_hidden">
										<span>忘记密码了?</span><br />
										<a href="http://passport.iqiyi.com/pages/secure/password/find_pwd_index.action" target="_blank">找回密码</a><br />
										<a href="http://127.0.0.1:8020/my_aiqiyi/login.html?__hbt=1506310118628" target="_blank">短信登陆</a>
									</div>
								</div>
							</div>
							<div id="login_middle_3_bottom">
								<input type="submit" value="登陆" />
							</div>
						</form>

					</div>
					<div class="login_middle_4">
						<form method="post" action="register">
							<div class="login_middle_3_top">
								<div class="login_middle_3_top_left">
									<select>
										<option selected="selected">中国大陆</option>
										<option>美国/加拉大</option>
										<option>德国</option>
										<option>法国</option>
									</select>
								</div>
								<div class="login_middle_3_top_right">
									<input class="login_middle_3_input" type="text" oninput="mobile();submitColorChange(this)" name = "tel"/>
									<p>请输入手机号</p><span style="color: red;"></span>
								</div>
							</div>
							<div id="login_middle_4_bottom">
								<span>点击注册即表示您同意</span>
								<a href="http://www.iqiyi.com/user/register/protocol.html" target="_blank">
									<<爱奇艺 用户服务协议>></爱奇艺>
								</a>
								<input type="submit" value="注册"  />
							</div>
						</form>
					</div>
				</div>
				<div class="login_bottom">
					<a href="javascript:;" id="login_zhuce">注册</a>
					<div id="login_bottom_char">
						<a id="login_zhanghao">账号密码登陆</a>
						<a id="login_saoma1">手机扫码登陆</a>
						<span>|</span>
						<a id="login_other" href="javascript:;">其他登陆</a>
						<a id="login_saoma2" href="javascript:;">手机扫码登陆</a>

					</div>

				</div>
			</div>
		</div>
		<!--导入登陆***********************************************************************************************************-->
		
		<div class="nav1_container"><div class="a">
			<div class="b">
				<div class="c">
					<img src="img/a.png" />
				</div>
				<div class="d">
					<input class="d1" type="search" placeholder="那年花开月正圆">
					<input class="d2" type="image" src="img/c.png">
				</div>
				<div class="e">
					<ul>
						<li>
							<a href="javascript:;" id="login_start" onclick="openLogin()">登陆</a>
						</li>
						<li>
							<a href="javascript:;" id="login_start" onclick="openZhuce()">注册</a>
						</li>
						<li>开通VIP</li>
						<li>
							<div class="cc">上传</div>

							<div class="wenjian">
								<ul class="ul">
									<li>上传视频</li>
									<li>视频制作</li>
									<li>我的空间</li>
									<li>视频管理</li>
									<li>播放数据</li>
									<li>申请分成</li>
								</ul>
							</div>
						</li>
						<li>
							<div class="shangchuan">下载客户端
								<ul class="shangchuan1">
									<div>
										<div class="picture"></div>
										<div class="biao">
											<li>签到免广告，送VIP</li>
										</div>
									</div>
									<div>
										<div class="picture1"></div>
										<div class="biao">
											<li>5倍流畅度，不卡顿</li>
										</div>
									</div>
									<div>
										<div class="picture2"></div>
										<div class="biao">
											<li>1080P免费畅享</li>
										</div>
									</div>
									<div>
										<div class="picture3"></div>
										<div class="biao">
											<li>搜不到视频，送VIP</li>
										</div>
									</div>
									<div class="picture4">立即体验</div>
								</ul>
							</div>
						</li>
						<li>消息</li>
						<li>播放记录</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="f">
			<div class="f1">
				<ul>

					<li class="f11">轩辕剑：焉逢暮云兄弟相认</li>
					<li class="f11">新木乃伊:阿汤哥唤醒暗黑力量</li>
					<li class="f11">高能医少:魏大勋智斗魔鬼教授</li>
					<li class="f11">何所冬暖：贾乃亮甜宠王子文</li>
					<li class="f11">美味奇缘:Mike毛晓彤一吻定情</li>
					<li class="f11">嗨到你红了:陈汉典自曝不要脸</li>
					<li class="f11">新歌声：肖凯晔慵懒台风获赞</li>
					<li class="f11">无证之罪：严良骆闻双雄对决</li>
					<li class="f11">男子甜点俱乐部:张杰康永看戏</li>
					<li class="f11">梦想改造家：三居爆改变一居</li>
				</ul>
			</div>
		</div>
		<div class="m">
			<div class="m1">
				<div class="m11">
					<ul>
						<li>
							<a href="">娱乐</a>
						</li>
						<li>
							<a href="">体育</a>
						</li>
						<li>
							<a href="">资讯</a>
						</li>
					</ul>
				</div>
				<div class="m11">
					<ul>
						<li>
							<a href="http://127.0.0.1:8020/aiqiyi/zhongshuai/Film.html"target="_blank">电影</a>
						</li>
						<li>
							<a href="">片花</a>
						</li>
						<li>
							<a href="">网络电影</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="http://127.0.0.1:8020/aiqiyi/aiqiyi_teleplay/teleplay.html" target="_blank">电视剧</a>
						</li>
						<li>
							<a href="">综艺</a>
						</li>
						<li>
							<a href="">脱口秀</a>
						</li>
					</ul>
				</div>

				<div class="m11">
					<ul>
						<li>
							<a href="http://127.0.0.1:8020/aiqiyi/aiqiyi_module_two/Animation.html" target="_blank">动漫</a>
						</li>
						<li>
							<a href="">儿童</a>
						</li>
						<li>
							<a href="">教育</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="http://127.0.0.1:8020/aiqiyi/my_aiqiyi/life.html" target="_blank">生活</a>
						</li>
						<li>
							<a href="">母婴</a>
						</li>
						<li>
							<a href="">健康</a>
						</li>
					</ul>
				</div>
				<div class="m11">
					<ul>
						<li>
							<a href="http://127.0.0.1:8020/aiqiyi/aqy(2)/music.html"target="_blank">音乐</a>
						</li>
						<li>
							<a href="">时尚</a>
						</li>
						<li>
							<a href="">旅游</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="">搞笑</a>
						</li>
						<li>
							<a href="">原创</a>
						</li>
						<li>
							<a href="">拍客</a>
						</li>
					</ul>
				</div>
				<div class="m11">
					<ul>
						<li>
							<a href="">财经</a>
						</li>
						<li>
							<a href="">科技</a>
						</li>
						<li>
							<a href="">汽车</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="">军事</a>
						</li>
						<li>
							<a href="">公益</a>
						</li>
						<li>
							<a href="">纪录片</a>
						</li>
					</ul>
				</div>
				<div class="m11">
					<ul>
						<li>
							<a class="m111" href="">风云榜</a>
						</li>
						<li>
							<a class="m111" href="http://127.0.0.1:8020/aiqiyi/zhongshuai/playvideo.html" target="_blank">全网影视</a>
						</li>
						<li>
							<a class="m111" href="http://127.0.0.1:8020/aiqiyi/aiqiyi_search/search.html" target="_blank">全网搜索</a>
						</li>
					</ul>
					<ul>
						<li>
							<a class="m112" href="">奇秀直播</a>
						</li>
						<li>
							<a class="m112" href="">直播中心</a>
						</li>
						<li>
							<a class="m112" href="">应用商店</a>
						</li>
					</ul>
				</div>
				<div class="m11">
					<ul>
						<li>
							<a href="">商城</a>
						</li>
						<li>
							<a href="">游戏视频</a>
						</li>
						<li>
							<a href="">游戏中心</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="">大头</a>
						</li>
						<li>
							<a href="">爱奇艺号</a>
						</li>
						<li>
							<a href="">VR</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="">文学</a>
						</li>
						<li>
							<a href="">漫画</a>
						</li>
						<li>
							<a href="">个人中心</a>
						</li>
					</ul>
				</div>
				<div class="m25"><img src="img/vip-star7070.png" /></div>
			</div>
		</div>
		<div class="a " id="fix">
			<div class="b">
				<div class="c">
					<img src="img/a.png" />
				</div>
				<div class="d">
					<input class="d1" type="search" placeholder="那年花开月正圆">
					<input class="d2" type="image" src="img/c.png">
				</div>
				<div class="e">
					<ul>
						<li>登录</li>
						<li>注册</li>
						<li>开通VIP</li>
						<li>上传</li>
						<li>下载客户端</li>
						<li>消息</li>
						<li>播放记录</li>
					</ul>
				</div>
			</div>
		</div>
		</div>
		<!--模块二****************************************************************************-->
		<div class="container">
			<div class="row row_box">
				<div class="col-md-4 col_box">
					<div class="left_title">
						<h2><a href="http://www.iqiyi.com/news/">今日焦点</a><span><a href="http://www.iqiyi.com/news/">更多></a></span></h2>
						<div class="onlyPlay"><span class="glyphicon glyphicon-star-empty"></span> 独播</div>
					</div>
					<div class="left_middle">

						<div class="hidden_box">
							<ul>
								<li>
									<a href="#">无证之罪</a>
								</li>
								<li>
									<a href="#">中国有嘻哈</a>
								</li>
								<li>
									<a href="#">中国新歌声2</a>
								</li>
								<li>
									<a href="#">鬼吹灯</a>
								</li>
								<li>
									<a href="#">轩辕剑之汉之云</a>
								</li>
							</ul>
						</div>
						<span><a href="#">《第五空间》第二集：隐秘的威胁</a></span>
						<ul>
							<li>
								<div></div>
								<a href="">新疆阿克苏地区发生5.7级地震 多趟旅客列车暂停</a>
							</li>
							<li>
								<div></div>
								<a href="">油价迎第7次上调</a>
								<a href="">国家司法考试参考人数创新高</a>
							</li>
							<li>
								<div></div>
								<a href="">男子为补身每天偷牛奶</a>
								<a href="">小伙玩手游眼睛长满结石</a>
							</li>
							<li>
								<div></div>
								<a href="">女子共享单车上贴山寨二维码 老人跟着撕了一路</a>
							</li>
							<li>
								<div></div>
								<a href="">男子银行卡里剩2毛 歹徒抢劫2百元心软退回一半</a>
							</li>
							<li>
								<div></div>
								<a href="">喜迎十九大 </a>
								<a href="">平安中国微电影微视频比赛获奖作品</a>
							</li>
						</ul>
					</div>
					<div class="img_list">
						<div>
							<a href="#"><img src="http://pic4.qiyipic.com/image/20170917/cb/55/v_113468833_m_601_m1_180_101.jpg" /> </a>
							<a href="">花样多！新生军训头顶可乐</a>
						</div>
						<div>
							<a href="#"><img src="http://m.qiyipic.com/common/lego/20170916/0acb8ab5f1ca449a9da8841312bbfb93.gif" /> </a>
							<a href="">花样多！新生军训头顶可乐</a>
						</div>
					</div>
				</div>
				<div class="col-md-4 col_box">
					<div class="middle_top">
						<div class="title_box"></div>
						<div class="title_icon"></div>
						<span>范冰冰获金鸡影后 与李晨颁奖礼撒狗粮</span>
						<div class="botton_left"></div>
						<div class="botton_right"></div>
					</div>
					<div class="middle_bottom">
						<ul>
							<li>
								<div></div>
								<a href=""> 邓超范冰冰获金鸡男女主《我不是潘金莲》大赢</a>
							</li>
							<li>
								<div></div>
								<a href="">独家:薛之谦风波后首露面</a>
								<a href="">佟大为曝邓超英语差</a>
							</li>
							<li>
								<div></div>
								<a href="">揭成家班恩怨内幕</a>
								<a href="">王祖蓝包影院祝贺李晨范冰冰</a>
							</li>
							<li>
								<div></div>
								<a href="">PG One真心话记录</a>
								<a href=""> 吴亦凡候选全球百大最美面孔</a>
							</li>

							<li>
								<div></div>
								<a href="">秋冬换季水库面膜65元 </a>
								<a href="">澳洲奥芝曼绵羊油38元抢</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-4 col_box">
					<div class="img_list">
						<div>
							<a href="#"><img src="http://pic2.qiyipic.com/common/lego/20170917/53f1bf59e9674dc6bcf8d319146c6245.jpg" /> </a>
							<a href="">郭沁周深《大鱼》似仙境</a>
						</div>
						<div>
							<a href="#"><img src="http://pic3.qiyipic.com/common/lego/20170917/9ef3adfd807041988695f0fa788b79a1.jpg" /> </a>
							<a href="">Naomi想男友甜蜜大笑</a>
						</div>
					</div>
					<div class="img_list">
						<div>
							<a href="#"><img src="http://pic0.qiyipic.com/common/lego/20170917/0795e044236046a9ac5d9f80a01802c4.jpg" /> </a>
							<a href="">王嘉尔揭露练习生时期辛酸</a>
						</div>
						<div>
							<a href="#"><img src="http://pic0.qiyipic.com/common/lego/20170917/4259eabbb212474592e657138cc48cb1.jpg" /> </a>
							<a href="">带你看北京马拉松跑男天团</a>
						</div>
					</div>
					<div class="img_list">
						<div>
							<a href="#"><img src="http://pic0.qiyipic.com/common/lego/20170917/fd43dff7b0874ce9bcc6f9ab7e727d62.jpg" /> </a>
							<a href="">黄国伦被质疑蹭嘉宾人气</a>
						</div>
						<div>
							<a href="#"><img src="http://pic3.qiyipic.com/common/lego/20170917/c68d537337334ee5b2653d23b036c123.jpg" /> </a>
							<a href="">热血原声迎英雄归来</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="one_div">
			<div class="nav_div">
				<h3>
				<a href="#" title="自制综艺">			
					<span>自制综艺</span>
					<span>中国有嘻哈<em>></em></span>									
				</a>
				</h3>
				<ul>
					<li>
						<a href="#" target="_blank" title="天使之路">天使之路</a>
					</li>
					<li>
						<a href="#" target="_blank" title="男子甜点俱乐部">男子甜点俱乐部</a>
					</li>
					<li>
						<a href="#" target="_blank" title="了不起的孩子2">了不起的孩子2</a>
					</li>
				</ul>
			</div>
			<div class="sub_div">
				<ul>
					<li>
						<a href="#" target="_blank"><img src="img/30a7f8de3e7d4c0db0cd59c5d2012e95.jpg" /></a>
						<p>
							<a href="#" target="_blank"><span>中国有嘻哈</span></a>
							<a href="#" target="_blank">盘点回顾：你每天都在说的嘻哈神句</a>
						</p>
					</li>
					<li>
						<a href="#" target="_blank"><img src="img/abd90baf98274ce8875209e21d3b3e08.jpg" /></a>
						<p>
							<a href="#" target="_blank"><span>天使之路</span></a>
							<a href="#" target="_blank">花絮：揭秘！维密超模都被他拍过</a>
						</p>
					</li>
					<li>
						<a href="#" target="_blank"><img src="img/6abe507a2f8b41faa5c67c6f7ea1408b.jpg" /></a>
						<p>
							<a href="#" target="_blank"><span>男子甜点</span></a>
							<a href="#" target="_blank">【第2期】张杰湿衣显胸肌竟被疑P图</a>
						</p>
					</li>
					<li>
						<a href="#" target="_blank"><img src="img/4e8054b0a9444badb5fec7ff2cefe772.jpg" /></a>
						<p>
							<a href="#" target="_blank"><span>卡拉偶客</span></a>
							<a href="#" target="_blank">第6期：常石磊挑战无止境高音 王自健认怂</a>
						</p>
					</li>
					<li>
						<a href="#" target="_blank"><img src="img/f80fa1b0ebe64620a30446ff5df3c4f6.jpg" /></a>
						<p>
							<a href="#" target="_blank"><span>了不起的孩子</span></a>
							<a href="#" target="_blank">捉急！谢依霖竟不知秦始皇是谁</a>
						</p>
					</li>
					<li>
						<a href="#" target="_blank"><img src="img/67c39faea0d4483cb41de8b29e776d30.jpg" /></a>
						<p>
							<a href="#" target="_blank"><span>无与伦比2</span></a>
							<a href="#" target="_blank">魏大勋大赞李易峰蒋劲夫走戏认真</a>
						</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="two_div">
			<div class="baby_div">
				<div class="baby_div_title">
					<h3>
				<a href="#" title="母婴">			
					<span>母婴</span>
					<span>更多<em>></em></span>									
				</a>
				</h3>
					<ul>
						<li>
							<a href="#" target="_blank" title="孕期">孕期</a>
						</li>
						<li>
							<a href="#" target="_blank" title="早教益智">早教益智</a>
						</li>
						<li>
							<a href="#" target="_blank" title="趣味玩具">趣味玩具</a>
						</li>
					</ul>
				</div>
				<div class="baby_div_img">
					<ul>
						<li>
							<a href="#" target="_blank" title="孩子乱发脾气竟是因为这个"><img alt="孩子乱发脾气竟是因为这个" src="img/d08620dfa1ef435d9c3f8b3819815ecd.jpg" /></a>
							<p>
								<a href="#" target="_blank" title="孩子乱发脾气竟是因为这个">孩子乱发脾气竟是因为这个</a>
							</p>
						</li>
						<li>
							<a href="#" target="_blank" title="这样做让宝宝远离上火"><img alt="这样做让宝宝远离上火" src="img/cc20aeeafedb4c24a7cd6a6751b35d81.jpg" /></a>
							<p>
								<a href="#" target="_blank" title="这样做让宝宝远离上火">这样做让宝宝远离上火</a>
							</p>
						</li>
					</ul>

				</div>
			</div>
			<div class="baby_div">
				<div class="baby_div_title">
					<h3>
				<a href="#" title="母婴">			
					<span>生活</span>
					<span>更多<em>></em></span>									
				</a>
				</h3>
					<ul>
						<li>
							<a href="#" target="_blank" title="懒人季">懒人季</a>
						</li>
						<li>
							<a href="#" target="_blank" title="悦活汇">悦活汇</a>
						</li>
						<li>
							<a href="#" target="_blank" title="食客分享">食客分享</a>
						</li>
					</ul>
				</div>
				<div class="baby_div_img">
					<ul>
						<li>

							<a href="#" target="_blank" title="去海边吃烧烤的日食记"><img alt="去海边吃烧烤的日食记" src="img/v_113501371_m_601_180_101.jpg" /></a>
							<p>
								<a href="#" target="_blank" title="去海边吃烧烤的日食记">去海边吃烧烤的日食记</a>
							</p>
						</li>
						<li>

							<a href="#" target="_blank" title="breaking基础教学"><img alt="breaking基础教学" src="img/v_113500655_m_601_180_101.jpg" /></a>
							<p>
								<a href="#" target="_blank" title="breaking基础教学">breaking基础教学</a>
							</p>
						</li>
					</ul>

				</div>
			</div>
			<div class="baby_div">
				<div class="baby_div_title">
					<h3>
				<a href="#" title="母婴">			
					<span>健康</span>
					<span>更多<em>></em></span>									
				</a>
				</h3>
					<ul>
						<li>
							<a href="#" target="_blank" title="医疗卫生">医疗卫生</a>
						</li>
						<li>
							<a href="#" target="_blank" title="健康保健">健康保健</a>
						</li>
					</ul>
				</div>
				<div class="baby_div_img">
					<ul>
						<li>
							<a href="#" target="_blank" title="你的另一半真的适合你吗"><img alt="你的另一半真的适合你吗" src="img/v_113499249_m_601_m1_180_101.jpg" /></a>
							<p>
								<a href="#" target="_blank" title="你的另一半真的适合你吗">你的另一半真的适合你吗</a>
							</p>
						</li>
						<li>
							<a href="#" target="_blank" title="这样暖宫真是不要命！"><img alt="这样暖宫真是不要命" src="img/v_113499592_m_601_m1_180_101.jpg" /></a>
							<p>
								<a href="#" target="_blank" title="这样暖宫真是不要命！">这样暖宫真是不要命！</a>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<footer>
			<div class="footer_top">
				<div class="footer_half">
					<div class="footer_half_top">
						<a class="footer_half_a" href="http://www.iqiyi.com/common/hzzq.html"><span class="footer_half_name">合作伙伴</span><span class="footer_more">更多<span class="glyphicon glyphicon-chevron-right"></span></span>
						</a>
					</div>
					<ul class="clearfix">
						<li>
							<a href="http://www.wandafilm.com/" title="万达电影网" target="_blank">万达电影网</a>
						</li>

						<li>
							<a href="http://www.hbstars.com/Default.shtml" title="华谊兄弟" target="_blank">华谊兄弟</a>
						</li>

						<li>
							<a href="http://www.ixingmei.com/" title="星美" target="_blank">星美</a>
						</li>

						<li>
							<a href="http://www.ewang.com/" title="光线影业" target="_blank">光线影业</a>
						</li>

						<li>
							<a href="http://www.m1905.com/" title="电影网" target="_blank">电影网</a>
						</li>

						<li>
							<a href="http://www.huacemedia.com/" title="华策影视" target="_blank">华策影视</a>
						</li>

						<li>
							<a href="http://v.baidu.com" title="百度视频" target="_blank">百度视频</a>
						</li>

						<li>
							<a href="http://baike.baidu.com/" title="百度百科" target="_blank">百度百科</a>
						</li>

						<li>
							<a href="http://weibo.com/p/1002065512188486/home?from=page_100206&amp;mod=TAB#place" title="微博视频台" target="_blank">微博视频台</a>
						</li>

						<li>
							<a href="http://tieba.baidu.com" title="百度贴吧" target="_blank">百度贴吧</a>
						</li>

						<li>
							<a href="http://www.cnr.cn/" title="央广网" target="_blank">央广网</a>
						</li>

						<li>
							<a href="http://www.hao123.com/" title="hao123" target="_blank">hao123</a>
						</li>

						<li>
							<a href="http://iqiyi.tmall.com" title="爱奇艺天猫店" target="_blank">爱奇艺天猫店</a>
						</li>

					</ul>

				</div>

				<div class="footer_half">
					<div class="footer_half_top">
						<a class="footer_half_a" href="http://www.iqiyi.com/common/news.html"><span class="footer_half_name">爱奇艺动态</span><span class="footer_more">更多<span class="glyphicon glyphicon-chevron-right"></span></span>
						</a>
					</div>
					<ul class="clearfix dongtai">

						<li>
							<a href="http://www.iqiyi.com/common/20170914/f86c446faa73752f.html" title="汪峰演唱会引领直播技术攀巅峰" target="_blank">汪峰演唱会引领直播技术攀巅峰</a>
						</li>

						<li>
							<a href="http://www.iqiyi.com/common/20170911/ad039274f6f23142.html" title="吴亦凡成“首席会员非凡体验官”" target="_blank">吴亦凡成“首席会员非凡体验官”</a>
						</li>

						<li>
							<a href="http://www.iqiyi.com/common/20170911/d93f1a73e4a8b01b.html" title="爱奇艺引领青年娱乐消费品牌" target="_blank">爱奇艺引领青年娱乐消费品牌</a>
						</li>

						<li>
							<a href="http://www.iqiyi.com/common/20170822/78a0164b17b4adb6.html" title="尖叫之夜演唱会打通自有头部IP" target="_blank">尖叫之夜演唱会打通自有头部IP</a>
						</li>

						<li>
							<a href="http://www.iqiyi.com/common/20170815/fd90f7d5c0b6e83f.html" title="爱奇艺率先公布播放量计算标准" target="_blank">爱奇艺率先公布播放量计算标准</a>
						</li>

						<li>
							<a href="http://www.iqiyi.com/common/20170814/de36fe150ad1847b.html" title="《嘻哈》创最快破2亿播放纪录" target="_blank">《嘻哈》创最快破2亿播放纪录</a>
						</li>

					</ul>
				</div>
			</div>
			<hr/>
			<div class="footer_middle">
				<ul class="clearfix">
					<li>
						<a href="javascript:void(0); " title="京网文[2015]0652-282号-1 ">京网文[2015]0652-282号-1</a>
					</li>

					<li>
						<a href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1660527705 " target="_blank " title="中国互联网诚信联盟 ">
							<img src="http://www.qiyipic.com/common/fix/trust.png " alt="中国互联网诚信联盟 ">中国互联网诚信联盟</a>
					</li>

					<li>

						<a href="javascript:void() " target="_blank " title="出版物经营许可证 ">出版物经营许可证 </a>
					</li>

					<li>
						<a href="http://www.iqiyi.com/common/infoWebSpread.html " title="信息网络传播视听节目许可证 0110544号 " target="_blank ">信息网络传播视听节目许可证 0110544号</a>

					</li>

					<li>
						<a href="javascript:void(0); " title="广播电视节目制作经营许可证 (京)字第1938号 ">广播电视节目制作经营许可证 (京)字第1938号</a>
					</li>
				</ul>
				<ul class="clearfix">
					<li>
						<a href="http://www.miibeian.gov.cn/ " target="_blank " title="京ICP证110636号 ">京ICP证110636号</a>
					</li>
					<li>
						<a href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202012091700001 " target="_blank " title=" 经营性网站备案信息 ">
							<img src="http://www.qiyipic.com/common/fix/records.png " alt=" 经营性网站备案信息 "> 经营性网站备案信息
						</a>
					</li>
					<li>
						<span style="position: relative;top:6px">京公网安备 11010802010263号</span>
					</li>
					<li>
						<a href="javascript:void(0); " title="增值电信业务经营许可证 B2-20120273 ">增值电信业务经营许可证 B2-20120273</a>
					</li>
					<li>
						<a href="javascript:void(0); " title="互联网药品信息服务资格证书 (京)-经营性-2013-0012 ">互联网药品信息服务资格证书 (京)-经营性-2013-0012</a>
					</li>
				</ul>
				<ul class="clearfix ">
					<li>
						<div class="mb10 ">
							<a href="http://www.iqiyi.com/common/webMdicalAgree.html " title="互联网医疗保健信息服务审核同意书 京卫计网审[2015]第0627号 " target="_blank ">互联网医疗保健信息服务审核同意书 京卫计网审[2015]第0627号</a>
						</div>
					</li>
				</ul>
			</div>
			<div class="footer_bottom">
				<div class="footer_bottom_top">
					<a href="http://www.iqiyi.com/common/aboutus.html" title="公司介绍" target="_blank">公司介绍</a>
					|
					<a href="http://www.iqiyi.com/common/news.html" title="新闻动态" target="_blank">新闻动态</a>
					|
					<a href="http://www.iqiyi.com/common/contactus.html" title="联系方式" target="_blank">联系方式</a>
					|

					<a href="http://zhaopin.iqiyi.com" title="招聘英才" target="_blank">招聘英才</a>
					|

					<a href="http://labs.iqiyi.com" title="爱奇艺实验室" target="_blank">爱奇艺实验室</a>
					|

					<a href="http://open.iqiyi.com/" title="开放平台" target="_blank">开放平台</a>
					|

					<a href="http://www.iqiyi.com/common/wangdahz.html" title="爱奇艺内容合作标准" target="_blank">爱奇艺内容合作标准</a>
					|

					<a href="http://mp.iqiyi.com/" title="爱奇艺号" target="_blank">爱奇艺号</a>
					|

					<a href="https://security.iqiyi.com/" title="安全应急响应中心" rseat="安全应急响应中心" target="_blank">安全应急响应中心</a>
					|

					<a href="http://help.iqiyi.com/" title="帮助中心" target="_blank">帮助中心</a>
					|
					<a href="http://www.iqiyi.com/common/copyright.html?entry=iqiyi" title="侵权投诉" target="_blank">侵权投诉</a>
				</div>
				<div class="footer_bottom_middle">
					<a title="中国互联网举报中心" target="_blank" href="http://www.12377.cn"><img alt="中国互联网举报中心" src="http://pic4.qiyipic.com/common/20160115/c116ab2233db4db2902f339a76e56d21.png"><span style="color:#666;">中国互联网举报中心</span></a>
					<a title="网络举报APP下载" target="_blank" href="http://www.12377.cn/node_548446.htm"><span class="ml30" style="color:#666;">网络举报APP下载</span></a>
					<a title="网上有害信息举报专区" target="_blank" href="http://report.12377.cn:13225/toreportinputNormal_anis.do"><span class="ml30" style="color:#666;">网上有害信息举报专区</span></a>
					<a title="网上暴恐有害信息举报" target="_blank" href="http://jubao.12377.cn:13225/reportform.do"><span class="ml30" style="color:#666;">网上暴恐有害信息举报</span></a>
					<a title="儿童色情信息举报专区" target="_blank" href="mailto:jubao365@qiyi.com"><span class="ml30" style="color:#666;">儿童色情信息举报专区</span></a>
					<span class="ml30">违法和不良信息举报电话：400-923-7171</span><span class="ml30 mr30">举报邮箱：<a href="mailto:jubao365@qiyi.com" style="color:#666;">jubao365@qiyi.com</a></span>
				</div>
				<div class="footer_bottom_bottom">
					<a href="http://www.iqiyi.com/common/announce.html" target="_blank" title="反盗版和反盗链权利声明">反盗版和反盗链权利声明</a>&nbsp;&nbsp;&nbsp; Copyright &copy;2017
					<a href="http://www.iqiyi.com/" title="爱奇艺">爱奇艺</a> <span> All Rights Reserved</span>
				</div>
			</div>
			<script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>
			<script type="application/javascript" src="plugin/js/bootstrap.min.js"></script>
			<script src="js/login.js"></script>
			<script src="js/module_two.js"></script>
			<script>
				$(function() {
					onscroll = function() {
						var top = $("body").scrollTop();
						
						if(top > 490) {
							$("#fix").fadeIn("fast");
						} else {
							$("#fix").fadeOut("fast");
						}
					}
				})

				$(".shangchuan").hover(function() {
					$(".shangchuan1").show();

				}, function() {
					$(".shangchuan1").hide();
				});
				$(".cc").click(function() {
					$(".wenjian").slideToggle();
				});
				$(".wenjian").dblclick(function() {
					$(".cc").click();
				});
				$(function() {
					$(".f1 li").mouseover(function() {
						var index = $(this).index();
						var bgimg = new Array("//pic1.qiyipic.com/common/lego/20170925/c89919ab5f304aa28cdbb4af876bfb67.webp?",
							"//pic2.qiyipic.com/common/lego/20170926/1393766f90094b1a885a8a7587105fb3.webp?",
							"//pic3.qiyipic.com/common/lego/20170925/d3fc45a7fb9344838f3b62212653e032.webp?", "//pic3.qiyipic.com/common/lego/20170911/6cda7113dfb647b88eded03afb224ad2.webp?src=focustat_0_20130527_4",
							"//pic3.qiyipic.com/common/lego/20170922/a0c437c1fef3430dac453dd2afd4626e.webp?src=focustat_0_20130527_5", "//pic0.qiyipic.com/common/lego/20170926/26fc5bc2780a40ac9c8b52b3040766c7.webp?src=focustat_0_20130527_6",
							"//pic0.qiyipic.com/common/lego/20170924/debf4fe12a9246bcad1c893906c8f606.webp?src=focustat_0_20130527_7", "//pic0.qiyipic.com/common/lego/20170921/dc101793d2b34b53be3d18e83bd0a8f6.webp?src=focustat_0_20130527_8",
							"//pic1.qiyipic.com/common/lego/20170926/18f5e6da3b4a41abb81eca7e7ed9846a.webp?src=focustat_0_20130527_9", "//pic0.qiyipic.com/common/lego/20170926/673b0200f7154af794d477242ae55f52.webp?src=focustat_0_20130527_10");
						$(".f").css("background", "url('" + bgimg[index] + "')");
						$(this).css("background-color", "#63b504");
						$(this).siblings().css("color", "white");
						$(this).siblings().css("background", "none");
					})
				})
			</script>

  </body>
</html>
