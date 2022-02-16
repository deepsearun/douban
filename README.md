# douban
基于Node.js+Express+Cheerio实现的豆瓣API

## 基础
config.js配置账号cookie，可使用PM2等管理线上项目，本地测试需安装Node.js环境

```
npm i 或 yarn
```
命令行输入 `node index` 启动项目，默认监听端口6501

## 搜索电影
http://127.0.0.1:6501/search/:keyword/:pageNo

http://127.0.0.1:6501/search/奇迹/1

```
{"code":200,"msg":"获取成功","data":{"total":630,"pageNo":0,"pageNum":20,"more":true,"list":[{"id":"35312437","link":"https://movie.douban.com/subject/35312437/","name":"奇迹·笨小孩","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2842327103.jpg","originalName":"奇迹·笨小孩","rate":"7.4","main":"文牧野/易烊千玺","year":"2022","content":"二十岁的景浩（易烊千玺 饰）独自带着年幼的妹妹来到深圳生活，兄妹俩生活温馨却拮据。为了妹妹高昂的手术费，机缘巧合之下，景浩得到一个机会，本以为美好生活即将来临..."},{"id":"4832288","link":"https://movie.douban.com/subject/4832288/","name":"奇迹","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p1172845476.jpg","originalName":"奇跡","rate":"8.8","main":"是枝裕和/前田航基","year":"2011","content":"一段破败的婚姻，让两个尚未成年的好兄弟天各一边。哥哥航一（前田航基 饰）随母亲大迫希美（大塚寧々 饰）回到位于鹿儿岛的外婆家，弟弟龙之介（前田旺志郎 饰）则和追..."},{"id":"35093796","link":"https://movie.douban.com/subject/35093796/","name":"奇迹","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2677276852.jpg","originalName":"기적","rate":"7.6","main":"李章焄/朴正民","year":"2021","content":"一部以真实故事为基础的虚构电影。以20世纪80年代为背景，讲述了在一个连路都很难找到的庆尚北道的乡下，和姐姐“宝京”一起生活的数学天才高中生“俊京”（朴正民 饰）..."},{"id":"1293941","link":"https://movie.douban.com/subject/1293941/","name":"奇迹","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2204669705.jpg","originalName":"奇蹟","rate":"8.0","main":"成龙/成龙","year":"1989","content":"青年郭振华（成龙 饰）赴港谋求发展，路见不平之下卷入两派黑帮争斗，却阴差阳错做了帮派大哥，郭振华反思此一段奇遇，发觉是街边卖花的玫瑰夫人（归亚蕾 饰）将好运带..."},{"id":"25733490","link":"https://movie.douban.com/subject/25733490/","name":"奇迹","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2204889585.jpg","originalName":"Lemeraviglie","rate":"7.5","main":"阿莉切·罗尔瓦赫尔/阿尔芭·罗尔瓦赫尔","year":"2014","content":"影片讲述了一对夫妻带着四个女儿，在靠近海边的独立小农庄里，依靠养蜂过着自给自足的独立生活，远离城市和社会人群。然而有一天，一个德国少年犯在重新融入社会 计划下..."},{"id":"26946413","link":"https://movie.douban.com/subject/26946413/","name":"奇迹","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2406546338.jpg","originalName":"더미라클","rate":"6.7","main":"金智星","year":"2016","content":"该剧讲述了一对双胞胎姐妹，妹妹是当红女子组合成员，姐姐却因为肥胖的身形遭到学校同学排挤。在偶然的情况下双胞胎姐妹遭遇灵魂互换的故事。非常不同的两个人，丰富多..."},{"id":"1305492","link":"https://movie.douban.com/subject/1305492/","name":"奇迹","image":"https://img1.doubanio.com/f/movie/b6dc761f5e4cf04032faa969826986efbecd54bb/pics/movie/movie_default_small.png","originalName":"Miracoli,storiepercorti","rate":"0.0","main":"马里奥·马尔托内/索尼娅·贝加马斯科","year":"1994","content":""},{"id":"26787574","link":"https://movie.douban.com/subject/26787574/","name":"奇迹男孩","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2507709428.jpg","originalName":"Wonder","rate":"8.6","main":"斯蒂芬·卓博斯基/雅各布·特伦布莱","year":"2017","content":"奥吉（雅各布·特瑞布雷 Jacob Tremblay 饰）是一个10岁的男孩，除了头戴一个巨大的太空头盔外，他和其他的同年龄孩子别无二致。头盔下隐藏了奥吉因为各种手术而伤痕累..."},{"id":"30345272","link":"https://movie.douban.com/subject/30345272/","name":"奇迹","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2543804282.jpg","originalName":"Ilmiracolo","rate":"0.0","main":"圭多·卡普里诺","year":"2018","content":"Rome, de nos jours. Lors d'une descente dans la planque d’un chef mafieux, des policiers font une troublante découverte : une statuette de la Vierge pleura..."},{"id":"1300171","link":"https://movie.douban.com/subject/1300171/","name":"奇迹","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2538563495.jpg","originalName":"TheMiracle","rate":"0.0","main":"尼尔·乔丹/J.G.Devlin","year":"1991","content":"The two teenagers Jimmy and Rose spend their vacation at the small Irish sea-resort Bray. Out of boredom they observe other people and imagine wild stories a..."},{"id":"1300374","link":"https://movie.douban.com/subject/1300374/","name":"绿里奇迹","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p767586451.jpg","originalName":"TheGreenMile","rate":"8.9","main":"弗兰克·德拉邦特/汤姆·汉克斯","year":"1999","content":"狱监保罗（汤姆•汉克斯 Tom Hanks 饰）这天迎来了一位不平凡的杀人犯――约翰•考夫利（迈克•克拉克•邓肯 Michael Clarke Duncan 饰）。约翰因杀了两名幼女..."},{"id":"26809007","link":"https://movie.douban.com/subject/26809007/","name":"奇迹，那天如此重要","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2397621888.jpg","originalName":"キセキあの日のソビト","rate":"7.7","main":"兼重淳/松坂桃李","year":"2017","content":"仁（松坂桃李 饰）和秀（菅田将晖 饰）出生于医生世家，他们的父亲是一位德高望重的医生，希望两个儿子长大后能够继承自己的事业。然而，叛逆桀骜的仁却并没有那份医者..."},{"id":"2156072","link":"https://movie.douban.com/subject/2156072/","name":"奇迹","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2540593583.jpg","originalName":"Chamatkar","rate":"0.0","main":"阿素托史·哥瓦力克","year":"1992","content":"Sunder是一个农村的教师，被朋友骗到了孟买，行李被骗走，身上的钱也都被偷走。走投无路时，在坟墓里遇到了鬼魂先生Marco，他讲出了20年前被杀害的事情，并求Sunder帮助..."},{"id":"26259677","link":"https://movie.douban.com/subject/26259677/","name":"垫底辣妹","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2329080834.jpg","originalName":"ビリギャル","rate":"8.3","main":"土井裕泰/有村架纯","year":"2015","content":"长相甜美的高中女孩工藤沙耶加（有村架纯 饰）在家并不受父亲待见，父亲一心要把弟弟培养成棒球手，而疏于对女儿们的呵护。沙耶加所在的高中有内部升学的制度，因此她终..."},{"id":"21876334","link":"https://movie.douban.com/subject/21876334/","name":"奇迹","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2185750988.jpg","originalName":"Miraculum","rate":"5.5","main":"丹尼尔·格洛/泽维尔·多兰","year":"2014","content":"Sometimes, we're just waiting for a miracle. A nurse who is a Jehovah's Witness, grows fond of the miracle survivor of a plane crash. Two sexagenarians, a ba..."},{"id":"1303578","link":"https://movie.douban.com/subject/1303578/","name":"米兰的奇迹","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2357372952.jpg","originalName":"MiracoloaMilano","rate":"7.9","main":"维托里奥·德西卡/埃玛·格拉马蒂卡","year":"1951","content":"托托（法朗西斯哥·克丽萨诺 Francesco Golisano 饰）在很小的时候就遭到了父母的抛弃，幸运的是，他遇见了善良的老婆婆罗洛塔（埃玛·克瑞姆悌克 Emma Gramatica 饰）..."},{"id":"2140558","link":"https://movie.douban.com/subject/2140558/","name":"圣安娜奇迹","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p1971557343.jpg","originalName":"MiracleatSt.Anna","rate":"7.5","main":"斯派克·李/德里克·卢克","year":"2008","content":"1983年，纽约曼哈顿。退伍士兵赫克特·耐隆（拉兹·阿隆索 Laz Alonso饰）在一家邮局工作。某日他突然掏枪击杀了一名陌生的顾客，随后警方在他家中发现了一尊桃花女神的..."},{"id":"2244426","link":"https://movie.douban.com/subject/2244426/","name":"雷霆沙赞！","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2551249211.jpg","originalName":"Shazam!","rate":"6.2","main":"大卫·F·桑德伯格/扎克瑞·莱维","year":"2019","content":"因儿时与母亲失散，少年比利（亚瑟·安其 Asher Angel 饰）辗转多个家庭，却执着地要回到妈妈身边。当他再度栖身一个由养子养女的大家庭时，却阴差阳错来到某个未知的领..."},{"id":"1300549","link":"https://movie.douban.com/subject/1300549/","name":"闪电奇迹","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p703773083.jpg","originalName":"Powder","rate":"8.1","main":"维克多·萨尔瓦/玛丽·斯汀伯根","year":"1995","content":"Jeremy（又称Powder）的母亲在去医院的路上，不幸被雷电击中。在生下全身无毛像一个白化病人一样的Powder（肖恩·派特里克·弗兰纳里 Sean Patrick Flanery 饰）后她来..."},{"id":"30291583","link":"https://movie.douban.com/subject/30291583/","name":"我们由奇迹构成","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2536589132.jpg","originalName":"僕らは奇跡でできている","rate":"8.9","main":"河野圭太/高桥一生","year":"2018","content":"相河一辉（高桥一生饰）在大学教授研究动物行为的“动物行为学”，半年前刚开始讲师的生活，但是他太喜欢各种生物，沉迷于研究，甚至不遵守大学的规则，每天都在职场挨..."}]}}
```

## 搜索标签

常用标签：热门，最新，动作... https://movie.douban.com/

排序：recommend,time,rank

http://127.0.0.1:6501/search_tag/:type/:sort/:tag/:pageNo/:pageNum

http://127.0.0.1:6501/search_tag/tv/recommend/热门/1/1

```
{"code":200,"msg":"获取成功","data":{"pageNo":1,"pageNum":"1","type":"tv","tag":"热门","sort":"recommend","list":[{"id":"35207856","name":"人世间","episodes_info":"更新至32集","rate":"8.1","url":"https://movie.douban.com/subject/35207856/","image":"https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2867957830.jpg","is_new":false}]}}
```

## 正在上映

http://127.0.0.1:6501/now_playing

```
{"code":200,"msg":"获取成功","data":[{"id":"26710112","name":"十年一品温如言","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2867299847.jpg","rate":"2.7","release":"2022","region":"中国大陆","director":"赵非","actors":"丁禹兮 / 任敏 / 李泽锋"},{"id":"35352389","name":"好想去你的世界爱你","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2867146164.jpg","rate":"","release":"2022","region":"中国大陆","director":"孙琳","actors":"周依然 / 施柏宇 / 祁圣翰"},{"id":"35172695","name":"不要忘记我爱你","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2868255579.jpg","rate":"","release":"2022","region":"中国大陆","director":"黄真真","actors":"古力娜扎 / 刘以豪 / 张歆艺"},{"id":"35312437","name":"奇迹·笨小孩","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2842327103.jpg","rate":"7.4","release":"2022","region":"中国大陆","director":"文牧野","actors":"易烊千玺 / 田雨 / 陈哈琳"},{"id":"35505100","name":"这个杀手不太冷静","image":"https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2814949620.jpg","rate":"6.5","release":"2022","region":"中国大陆","director":"邢文雄","actors":"马丽 / 魏翔 / 陈明昊"},{"id":"35215390","name":"狙击手","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2738601191.jpg","rate":"7.7","release":"2022","region":"中国大陆","director":"张艺谋","actors":"陈永胜 / 章宇 / 张译"},{"id":"35613853","name":"长津湖之水门桥","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2846021991.jpg","rate":"7.2","release":"2022","region":"中国大陆","director":"徐克","actors":"吴京 / 易烊千玺 / 朱亚文"},{"id":"35337517","name":"四海","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2867433563.jpg","rate":"5.5","release":"2022","region":"中国大陆","director":"韩寒","actors":"刘昊然 / 刘浩存 / 沈腾"},{"id":"35608160","name":"喜羊羊与灰太狼之筐出未来","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2797468943.jpg","rate":"6.9","release":"2022","region":"中国大陆","director":"黄伟明","actors":"祖晴 / 张琳 / 邓玉婷"},{"id":"35377026","name":"熊出没·重返地球","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2856825681.jpg","rate":"6.6","release":"2022","region":"中国大陆","director":"林汇达","actors":"张秉君 / 张伟 / 谭笑"},{"id":"35144311","name":"雄狮少年","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2702755317.jpg","rate":"8.3","release":"2021","region":"中国大陆","director":"孙海鹏","actors":"大昕 / 大雄 / 郭皓"},{"id":"35444998","name":"李茂扮太子","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2812626447.jpg","rate":"4.3","release":"2022","region":"中国大陆","director":"高可","actors":"马丽 / 常远 / 艾伦"},{"id":"32579501","name":"反贪风暴5：最终章 G風暴","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2686021044.jpg","rate":"4.9","release":"2021","region":"中国香港","director":"林德禄","actors":"古天乐 / 张智霖 / 郑嘉颖"},{"id":"35068653","name":"误杀2","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2770857575.jpg","rate":"5.8","release":"2021","region":"中国大陆","director":"戴墨","actors":"肖央 / 任达华 / 文咏珊"},{"id":"35683855","name":"带你去见我妈","image":"https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2831589600.jpg","rate":"7.6","release":"2022","region":"中国大陆","director":"蓝鸿春","actors":"郑润奇 / 钟少贤 / 卢珊"},{"id":"34948441","name":"小虎墩大英雄","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2866356724.jpg","rate":"","release":"2022","region":"中国大陆","director":"曾靖雄","actors":"张健儒 / 沈念慈 / 梁达伟"},{"id":"35045591","name":"汪汪队立大功大电影 Paw Patrol: The Movie","image":"https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2808318200.jpg","rate":"7.2","release":"2021","region":"美国","director":"卡尔·布伦克尔","actors":"伊恩·阿米蒂奇 / 马尔赛·马丁 / 罗恩·帕尔多"},{"id":"35398246","name":"我的体育老师","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2635457613.jpg","rate":"","release":"2022","region":"中国大陆","director":"周勇","actors":"孙嘉麟 / 魏璐 / 侯天来"},{"id":"35448988","name":"向着明亮那方","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2831434654.jpg","rate":"7.5","release":"2021","region":"中国大陆","director":"兰茜雅","actors":"朱悦嘉 / 王诗懿 / 于小芙"},{"id":"35636558","name":"跨过鸭绿江","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2772730001.jpg","rate":"","release":"2021","region":"中国大陆","director":"董亚春","actors":"丁勇岱 / 唐国强 / 孙维民"},{"id":"1464526","name":"横空出世","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p672536444.jpg","rate":"9.4","release":"1999","region":"中国大陆","director":"陈国星","actors":"李雪健 / 李幼斌 / 高明"},{"id":"3737287","name":"袁隆平","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2650578179.jpg","rate":"9.1","release":"2009","region":"中国大陆","director":"史凤和","actors":"果靖霖 / 徐筠 / 袁隆平"}]}
```

## 即将上映

http://127.0.0.1:6501/coming_soon

```
{"code":200,"msg":"获取成功","data":[{"id":"35655931","name":"密案1922","category":"悬疑 / 惊悚","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2739091163.jpg","release_date":"02月18日","region":"中国大陆"},{"id":"27203644","name":"尼罗河上的惨案","category":"剧情 / 犯罪 / 悬疑","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2854856216.jpg","release_date":"02月19日","region":"美国"},{"id":"35517371","name":"我们的冬奥","category":"剧情 / 动画","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2828682728.jpg","release_date":"02月19日","region":"中国大陆"},{"id":"32579254","name":"只属于我们的一天","category":"剧情 / 爱情","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2867952345.jpg","release_date":"02月22日","region":"中国香港"},{"id":"27089612","name":"纽约的一个雨天","category":"喜剧 / 爱情","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2856549164.jpg","release_date":"02月25日","region":"美国"},{"id":"35131346","name":"隐入尘烟","category":"剧情","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2856727438.jpg","release_date":"02月25日","region":"中国大陆"},{"id":"35657302","name":"你是我的一束光","category":"爱情 / 音乐","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2868301608.jpg","release_date":"02月25日","region":"中国大陆"},{"id":"30289148","name":"热汤","category":"剧情 / 爱情 / 悬疑","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2868354253.jpg","release_date":"03月04日","region":"中国大陆"},{"id":"35461822","name":"人间世","category":"纪录片","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2764924182.jpg","release_date":"03月04日","region":"中国大陆"},{"id":"35390245","name":"卧鼠藏虫","category":"喜剧","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2829062662.jpg","release_date":"03月04日","region":"中国大陆"},{"id":"34808495","name":"安魂","category":"剧情","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2868064622.jpg","release_date":"03月04日","region":"中国大陆"},{"id":"34890921","name":"柳浪闻莺","category":"剧情 / 爱情","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2866386772.jpg","release_date":"03月08日","region":"中国大陆"},{"id":"35148918","name":"如果有一天我将会离开你","category":"剧情","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2772553573.jpg","release_date":"03月14日","region":"中国大陆"},{"id":"35401290","name":"回廊亭","category":"爱情 / 犯罪 / 悬疑","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2805307464.jpg","release_date":"03月18日","region":"中国大陆"},{"id":"30329081","name":"“炼”爱","category":"爱情 / 纪录片","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2649833311.jpg","release_date":"03月18日","region":"中国大陆"},{"id":"35611476","name":"让这首歌作证","category":"剧情 / 战争","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2741797159.jpg","release_date":"03月18日","region":"中国大陆"},{"id":"34833903","name":"野夏天","category":"剧情 / 运动","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2712283413.jpg","release_date":"03月25日","region":"中国大陆"},{"id":"6424756","name":"新蝙蝠侠","category":"剧情 / 动作 / 科幻","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2868248785.jpg","release_date":"03月","region":"美国"},{"id":"34909343","name":"元首偷走了粉兔子","category":"剧情 / 历史","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2576212449.jpg","release_date":"03月","region":"德国"},{"id":"35460157","name":"人生大事","category":"剧情 / 家庭","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2757028084.jpg","release_date":"04月02日","region":"中国大陆"},{"id":"35355164","name":"最后的真相","category":"剧情","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2734230374.jpg","release_date":"04月02日","region":"中国大陆"},{"id":"30359440","name":"被害人","category":"剧情 / 犯罪 / 悬疑","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2793285193.jpg","release_date":"04月02日","region":"中国大陆"},{"id":"35131347","name":"一周的朋友","category":"剧情","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2867959443.jpg","release_date":"04月02日","region":"中国大陆"}]}
```

## 海报+剧照

http://127.0.0.1:6501/photos/:id/:pageNo

http://127.0.0.1:6501/photos/26733371/1

```
{"code":200,"msg":"获取成功","data":[{"id":"2408540029","detail":"https://movie.douban.com/photos/photo/2408540029","s":"https://img1.doubanio.com/view/photo/s/public/p2408540029.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2408540029.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2408540029.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2408540029.jpg","prop":"1600x800"},{"id":"2395556000","detail":"https://movie.douban.com/photos/photo/2395556000","s":"https://img1.doubanio.com/view/photo/s/public/p2395556000.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2395556000.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2395556000.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2395556000.jpg","prop":"799x1280"},{"id":"2397635794","detail":"https://movie.douban.com/photos/photo/2397635794","s":"https://img1.doubanio.com/view/photo/s/public/p2397635794.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2397635794.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2397635794.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2397635794.jpg","prop":"980x653"},{"id":"2397635681","detail":"https://movie.douban.com/photos/photo/2397635681","s":"https://img1.doubanio.com/view/photo/s/public/p2397635681.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2397635681.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2397635681.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2397635681.jpg","prop":"980x635"},{"id":"2395563577","detail":"https://movie.douban.com/photos/photo/2395563577","s":"https://img1.doubanio.com/view/photo/s/public/p2395563577.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2395563577.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2395563577.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2395563577.jpg","prop":"1280x720"},{"id":"2395560769","detail":"https://movie.douban.com/photos/photo/2395560769","s":"https://img1.doubanio.com/view/photo/s/public/p2395560769.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2395560769.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2395560769.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2395560769.jpg","prop":"1152x719"},{"id":"2395556026","detail":"https://movie.douban.com/photos/photo/2395556026","s":"https://img1.doubanio.com/view/photo/s/public/p2395556026.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2395556026.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2395556026.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2395556026.jpg","prop":"799x1280"},{"id":"2397636720","detail":"https://movie.douban.com/photos/photo/2397636720","s":"https://img1.doubanio.com/view/photo/s/public/p2397636720.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2397636720.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2397636720.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2397636720.jpg","prop":"980x551"},{"id":"2405468161","detail":"https://movie.douban.com/photos/photo/2405468161","s":"https://img1.doubanio.com/view/photo/s/public/p2405468161.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2405468161.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2405468161.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2405468161.jpg","prop":"976x549"},{"id":"2396092011","detail":"https://movie.douban.com/photos/photo/2396092011","s":"https://img1.doubanio.com/view/photo/s/public/p2396092011.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2396092011.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2396092011.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2396092011.jpg","prop":"1777x999"},{"id":"2396092028","detail":"https://movie.douban.com/photos/photo/2396092028","s":"https://img1.doubanio.com/view/photo/s/public/p2396092028.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2396092028.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2396092028.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2396092028.jpg","prop":"1280x720"},{"id":"2397636733","detail":"https://movie.douban.com/photos/photo/2397636733","s":"https://img1.doubanio.com/view/photo/s/public/p2397636733.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2397636733.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2397636733.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2397636733.jpg","prop":"980x490"},{"id":"2424419665","detail":"https://movie.douban.com/photos/photo/2424419665","s":"https://img1.doubanio.com/view/photo/s/public/p2424419665.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2424419665.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2424419665.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2424419665.jpg","prop":"1920x1080"},{"id":"2395563931","detail":"https://movie.douban.com/photos/photo/2395563931","s":"https://img1.doubanio.com/view/photo/s/public/p2395563931.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2395563931.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2395563931.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2395563931.jpg","prop":"1263x696"},{"id":"2413393454","detail":"https://movie.douban.com/photos/photo/2413393454","s":"https://img1.doubanio.com/view/photo/s/public/p2413393454.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2413393454.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2413393454.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2413393454.jpg","prop":"1280x720"},{"id":"2402284484","detail":"https://movie.douban.com/photos/photo/2402284484","s":"https://img1.doubanio.com/view/photo/s/public/p2402284484.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2402284484.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2402284484.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2402284484.jpg","prop":"2180x1227"},{"id":"2408540123","detail":"https://movie.douban.com/photos/photo/2408540123","s":"https://img1.doubanio.com/view/photo/s/public/p2408540123.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2408540123.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2408540123.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2408540123.jpg","prop":"1200x800"},{"id":"2408540112","detail":"https://movie.douban.com/photos/photo/2408540112","s":"https://img1.doubanio.com/view/photo/s/public/p2408540112.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2408540112.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2408540112.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2408540112.jpg","prop":"1500x937"},{"id":"2395560552","detail":"https://movie.douban.com/photos/photo/2395560552","s":"https://img1.doubanio.com/view/photo/s/public/p2395560552.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2395560552.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2395560552.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2395560552.jpg","prop":"799x1280"},{"id":"2396092023","detail":"https://movie.douban.com/photos/photo/2396092023","s":"https://img1.doubanio.com/view/photo/s/public/p2396092023.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2396092023.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2396092023.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2396092023.jpg","prop":"1347x748"},{"id":"2395555984","detail":"https://movie.douban.com/photos/photo/2395555984","s":"https://img1.doubanio.com/view/photo/s/public/p2395555984.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2395555984.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2395555984.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2395555984.jpg","prop":"799x1280"},{"id":"2403495884","detail":"https://movie.douban.com/photos/photo/2403495884","s":"https://img1.doubanio.com/view/photo/s/public/p2403495884.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2403495884.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2403495884.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2403495884.jpg","prop":"630x445"},{"id":"2395560599","detail":"https://movie.douban.com/photos/photo/2395560599","s":"https://img1.doubanio.com/view/photo/s/public/p2395560599.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2395560599.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2395560599.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2395560599.jpg","prop":"720x450"},{"id":"2395563293","detail":"https://movie.douban.com/photos/photo/2395563293","s":"https://img1.doubanio.com/view/photo/s/public/p2395563293.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2395563293.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2395563293.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2395563293.jpg","prop":"1300x732"},{"id":"2405468163","detail":"https://movie.douban.com/photos/photo/2405468163","s":"https://img1.doubanio.com/view/photo/s/public/p2405468163.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2405468163.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2405468163.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2405468163.jpg","prop":"976x549"},{"id":"2397635707","detail":"https://movie.douban.com/photos/photo/2397635707","s":"https://img1.doubanio.com/view/photo/s/public/p2397635707.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2397635707.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2397635707.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2397635707.jpg","prop":"980x504"},{"id":"2397635778","detail":"https://movie.douban.com/photos/photo/2397635778","s":"https://img1.doubanio.com/view/photo/s/public/p2397635778.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2397635778.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2397635778.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2397635778.jpg","prop":"980x551"},{"id":"2401231081","detail":"https://movie.douban.com/photos/photo/2401231081","s":"https://img1.doubanio.com/view/photo/s/public/p2401231081.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2401231081.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2401231081.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2401231081.jpg","prop":"1920x1080"},{"id":"2405468229","detail":"https://movie.douban.com/photos/photo/2405468229","s":"https://img1.doubanio.com/view/photo/s/public/p2405468229.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2405468229.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2405468229.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2405468229.jpg","prop":"976x549"},{"id":"2405468219","detail":"https://movie.douban.com/photos/photo/2405468219","s":"https://img1.doubanio.com/view/photo/s/public/p2405468219.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2405468219.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2405468219.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2405468219.jpg","prop":"976x549"},{"id":"2410512421","detail":"https://movie.douban.com/photos/photo/2410512421","s":"https://img1.doubanio.com/view/photo/s/public/p2410512421.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2410512421.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2410512421.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2410512421.jpg","prop":"1600x2400"},{"id":"2396072830","detail":"https://movie.douban.com/photos/photo/2396072830","s":"https://img1.doubanio.com/view/photo/s/public/p2396072830.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2396072830.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2396072830.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2396072830.jpg","prop":"666x1000"},{"id":"2388405542","detail":"https://movie.douban.com/photos/photo/2388405542","s":"https://img1.doubanio.com/view/photo/s/public/p2388405542.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2388405542.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2388405542.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2388405542.jpg","prop":"1000x563"},{"id":"2388408983","detail":"https://movie.douban.com/photos/photo/2388408983","s":"https://img1.doubanio.com/view/photo/s/public/p2388408983.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2388408983.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2388408983.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2388408983.jpg","prop":"2626x3462"},{"id":"2423678801","detail":"https://movie.douban.com/photos/photo/2423678801","s":"https://img1.doubanio.com/view/photo/s/public/p2423678801.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2423678801.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2423678801.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2423678801.jpg","prop":"596x749"},{"id":"2388408967","detail":"https://movie.douban.com/photos/photo/2388408967","s":"https://img1.doubanio.com/view/photo/s/public/p2388408967.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2388408967.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2388408967.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2388408967.jpg","prop":"906x1200"},{"id":"2579782907","detail":"https://movie.douban.com/photos/photo/2579782907","s":"https://img1.doubanio.com/view/photo/s/public/p2579782907.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2579782907.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2579782907.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2579782907.jpg","prop":"1200x1200"},{"id":"2462142525","detail":"https://movie.douban.com/photos/photo/2462142525","s":"https://img1.doubanio.com/view/photo/s/public/p2462142525.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2462142525.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2462142525.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2462142525.jpg","prop":"1500x462"},{"id":"2667958776","detail":"https://movie.douban.com/photos/photo/2667958776","s":"https://img1.doubanio.com/view/photo/s/public/p2667958776.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2667958776.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2667958776.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2667958776.jpg","prop":"493x693"},{"id":"2667958679","detail":"https://movie.douban.com/photos/photo/2667958679","s":"https://img1.doubanio.com/view/photo/s/public/p2667958679.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2667958679.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2667958679.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2667958679.jpg","prop":"746x1052"},{"id":"2667958677","detail":"https://movie.douban.com/photos/photo/2667958677","s":"https://img1.doubanio.com/view/photo/s/public/p2667958677.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2667958677.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2667958677.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2667958677.jpg","prop":"1179x1500"},{"id":"2667958676","detail":"https://movie.douban.com/photos/photo/2667958676","s":"https://img1.doubanio.com/view/photo/s/public/p2667958676.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2667958676.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2667958676.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2667958676.jpg","prop":"850x1057"},{"id":"2667958333","detail":"https://movie.douban.com/photos/photo/2667958333","s":"https://img1.doubanio.com/view/photo/s/public/p2667958333.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2667958333.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2667958333.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2667958333.jpg","prop":"1094x1368"},{"id":"2667958171","detail":"https://movie.douban.com/photos/photo/2667958171","s":"https://img1.doubanio.com/view/photo/s/public/p2667958171.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2667958171.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2667958171.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2667958171.jpg","prop":"988x1260"},{"id":"2546793182","detail":"https://movie.douban.com/photos/photo/2546793182","s":"https://img1.doubanio.com/view/photo/s/public/p2546793182.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2546793182.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2546793182.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2546793182.jpg","prop":"795x1000"},{"id":"2462142488","detail":"https://movie.douban.com/photos/photo/2462142488","s":"https://img1.doubanio.com/view/photo/s/public/p2462142488.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2462142488.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2462142488.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2462142488.jpg","prop":"450x550"},{"id":"2462142475","detail":"https://movie.douban.com/photos/photo/2462142475","s":"https://img1.doubanio.com/view/photo/s/public/p2462142475.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2462142475.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2462142475.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2462142475.jpg","prop":"771x1197"},{"id":"2462142471","detail":"https://movie.douban.com/photos/photo/2462142471","s":"https://img1.doubanio.com/view/photo/s/public/p2462142471.jpg","m":"https://img1.doubanio.com/view/photo/m/public/p2462142471.jpg","l":"https://img1.doubanio.com/view/photo/l/public/p2462142471.jpg","b":"https://img1.doubanio.com/view/photo/b/public/p2462142471.jpg","prop":"1588x2019"}]}
```

## 影片详情

http://127.0.0.1:6501/subject/:id

http://127.0.0.1:6501/subject/26733371

```
{"code":200,"msg":"获取成功","data":{"name":"地球脉动 第二季","fullName":"地球脉动 第二季 Planet Earth Season 2","otherName":["行星地球第二季","我们的地球第二季","地球无限第二季","PlanetEarthII","OnePlanetSeason2"],"image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p2410512421.jpg","language":["英语"],"year":"2016","releaseDate":["2016-11-06(英国)"],"region":["英国"],"genre":["纪录片"],"rating":"9.8","actors":"大卫·爱登堡","main_actors":[{"id":"1385960","name":"伊丽莎白·怀特","image":"https://img9.doubanio.com/view/celebrity/raw/public/p1513818347.76.jpg","role":"导演"},{"id":"1385961","name":"贾斯汀·安德森","image":"https://img9.doubanio.com/view/celebrity/raw/public/p1513818437.04.jpg","role":"导演"},{"id":"1045102","name":"大卫·爱登堡","image":"https://img2.doubanio.com/view/celebrity/raw/public/p8613.jpg","role":"配 自己"},{"id":"1383323","name":"迈克尔·冈顿","image":"https://img1.doubanio.com/view/celebrity/raw/public/p1509178921.39.jpg","role":"执行制片人"},{"id":"1028224","name":"乔治·芬顿","image":"https://img3.doubanio.com/view/celebrity/raw/public/p17180.jpg","role":"音乐"},{"id":"1054386","name":"汉斯·季默","image":"https://img9.doubanio.com/view/celebrity/raw/public/p1409639480.04.jpg","role":"音乐"}],"writers":"","directors":"伊丽莎白·怀特/贾斯汀·安德森/艾玛·纳珀/艾德·查尔斯/查登·亨特/弗雷迪·德瓦斯","desc":"曾经惊艳世人的纪录片《地球脉动》，再次由来自BBC的制作团队倾力奉献出最新的第二季。在这一季里，观众们将继续见证地球各个角落动物、植物平凡而精彩的生命瞬间。本季总共六集，分为岛屿、山脉、丛林、沙漠、草原和城市，树懒、巨蜥、狐猴、海鬣蜥、帽带企鹅、雪豹、金雕、蜘蛛猴、美洲豹……大自然的神奇之手创造的万千生物以其各自的习性自幼生活在生身土地之上。他们顺应着严苛的自然环境，顽强追逐着明日的朝阳。然而人类肆无忌惮的活动则侵蚀着其他生物的生存环境。\n                                    <br />\n                                　　它们渺小而伟大，通过BBC的镜头，生命的光辉得以放大，闪耀在地球的每一个角落。","duration":"50分钟","IMDB":"tt5491994","recommend":[{"id":"26979545","name":"蓝色星球2","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2544388666.jpg"},{"id":"6886533","name":"冰冻星球","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2608459824.jpg"},{"id":"5950117","name":"人类星球","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2191161346.jpg"},{"id":"4135259","name":"生命","image":"https://img2.doubanio.com/view/photo/l_ratio_poster/public/p1506777651.jpg"},{"id":"30374707","name":"我们的星球","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2551395076.jpg"},{"id":"20488575","name":"非洲","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2085683729.jpg"},{"id":"26576692","name":"猎捕","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2643008879.jpg"},{"id":"33387353","name":"七个世界，一个星球","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2572676219.jpg"},{"id":"26694967","name":"航拍中国 第一季","image":"https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2453950384.jpg"},{"id":"27182707","name":"王朝 第一季","image":"https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2537688397.jpg"}]}}
```
