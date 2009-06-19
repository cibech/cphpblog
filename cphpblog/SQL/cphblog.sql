-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.0.67-community-nt


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema cphpblog
--

CREATE DATABASE IF NOT EXISTS cphpblog;
USE cphpblog;

--
-- Definition of table `tm_comments`
--

DROP TABLE IF EXISTS `tm_comments`;
CREATE TABLE `tm_comments` (
  `i_postid` int(10) unsigned NOT NULL COMMENT 'Post id of the comment',
  `i_comment_id` int(10) unsigned NOT NULL auto_increment COMMENT 'Comment id',
  `s_user` varchar(20) default NULL COMMENT 'User of the comment',
  `dt_postdate` date NOT NULL COMMENT 'Date of the comment',
  `c_posttime` char(5) NOT NULL default '18:00' COMMENT 'Time of the Post',
  `t_comment` text NOT NULL COMMENT 'Content of comment',
  `tn_isreply` tinyint(1) unsigned NOT NULL default '0' COMMENT 'Is reply to other comment',
  `i_repid` int(10) unsigned default NULL COMMENT 'Comment id of the reply comment',
  `tn_delflag` tinyint(1) unsigned NOT NULL default '0' COMMENT 'Delete Flag',
  `tn_lang` tinyint(1) unsigned NOT NULL default '0' COMMENT 'Language Type',
  `tn_isowner_only` tinyint(1) unsigned NOT NULL default '0' COMMENT 'Is comment only visible to the post owner',
  `s_ip` varchar(24) default NULL COMMENT 'IP Addr of the commenter',
  PRIMARY KEY  USING BTREE (`i_comment_id`),
  KEY `INDEX_COMMENT_PID` (`i_postid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='Comments of posts';

--
-- Dumping data for table `tm_comments`
--

/*!40000 ALTER TABLE `tm_comments` DISABLE KEYS */;
INSERT INTO `tm_comments` (`i_postid`,`i_comment_id`,`s_user`,`dt_postdate`,`c_posttime`,`t_comment`,`tn_isreply`,`i_repid`,`tn_delflag`,`tn_lang`,`tn_isowner_only`,`s_ip`) VALUES 
 (1,1,'cibech','2009-06-14','15:33','これはコメントですよ',0,NULL,0,2,0,NULL),
 (1,2,'cibech','2009-06-14','15:34','这是中文评论',0,NULL,0,1,0,NULL),
 (1,3,'cibech','2009-06-14','15:34','This is English comment',0,NULL,0,0,0,NULL),
 (1,4,'ANONYMOUS','2009-06-15','15:34','これはコメントですよ2',0,NULL,0,2,0,NULL),
 (1,5,'ANONYMOUS','2009-06-15','15:34','这是中文评论2',0,NULL,0,1,0,NULL),
 (1,6,'ANONYMOUS','2009-06-15','15:34','This is English comment2',0,NULL,0,0,0,NULL);
/*!40000 ALTER TABLE `tm_comments` ENABLE KEYS */;


--
-- Definition of table `tm_post`
--

DROP TABLE IF EXISTS `tm_post`;
CREATE TABLE `tm_post` (
  `i_postid` int(10) unsigned NOT NULL default '0' COMMENT 'Post ID',
  `s_posturi` varchar(40) NOT NULL COMMENT 'Post URI',
  `s_posttitle` varchar(50) NOT NULL COMMENT 'Post title',
  `dt_postdate` date NOT NULL COMMENT 'Post date',
  `c_posttime` char(5) NOT NULL default '18:00' COMMENT 'Post time',
  `tb_post` mediumtext COMMENT 'Post content',
  `tn_delflag` tinyint(1) unsigned NOT NULL default '0' COMMENT 'Delete flag',
  `s_user` varchar(20) default NULL COMMENT 'Username of the post',
  `tn_lang` tinyint(1) unsigned NOT NULL default '0' COMMENT 'Language Type',
  PRIMARY KEY  USING BTREE (`i_postid`,`tn_lang`),
  KEY `USER` (`s_user`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='Post of the blog';

--
-- Dumping data for table `tm_post`
--

/*!40000 ALTER TABLE `tm_post` DISABLE KEYS */;
INSERT INTO `tm_post` (`i_postid`,`s_posturi`,`s_posttitle`,`dt_postdate`,`c_posttime`,`tb_post`,`tn_delflag`,`s_user`,`tn_lang`) VALUES 
 (1,'200906027433','Test1','2009-06-02','16:22','With great courage, Iranians have been rising up against the tyranny of their 30-year-old Islamic Republic. This is a weak moment for Iran\'s terror-based regime, and democracies such as the U.S. should seize the chance to shake it further--and support the protesters in the process--by turning up the heat.',0,'cibech',0),
 (2,'200906027577','テスト2','2010-06-02','08:02','単体ヒ素およびほとんどのヒ素化合物は、人体に非常に有害である。飲み込んだ際の急性症状は、消化管の刺激によって、吐き気、嘔吐、下痢、激しい腹痛などがみられ、場合によってショック状態から死に至る。慢性症状は、剥離性の皮膚炎や過度の色素沈着、骨髄障害、末梢性神経炎、黄疸、腎不全など。慢性ヒ素中毒による皮膚病変としては、ボーエン病が有名である。単体ヒ素及びヒ素化合物は、毒物及び劇物取締法により医薬用外毒物に指定されている。日中戦争中、旧日本軍では嘔吐性のくしゃみ剤ジフェニルシアノアルシンが多く用いられたが、これは砒素を含む毒ガスである。\r\n\r\nヒ素およびヒ素化合物は WHO の下部機関 IRAC より発癌性がある〔Type1〕と勧告されている。\r\n\r\n一方でヒ素化合物は人体内にごく微量が存在しており、生存に必要な微量必須元素であると考えられている[2][3]。ただしこれは、一部の無毒の有機ヒ素化合物の形でのことである。低毒性の、あるいは生体内で無毒化される有機ヒ素化合物にはメチルアルソン酸やジメチルアルシン酸などがあり、カキ、クルマエビなどの魚介類やヒジキなどの海草類に多く含まれる。さらにエビには高度に代謝されたアルセノベタインとして高濃度存在している。人体に必要な量はごく少なく自然に摂取されると考えられ、また少量の摂取でも毒性が発現するため、サプリメントとして積極的に摂る必要はない。\r\n\r\n亜ヒ酸を含む砒石は日本では古くから「銀の毒」、「石見銀山ねずみ捕り」などと呼ばれ殺鼠剤や暗殺などに用いられていた。',0,'cibech',2),
 (3,'200906027553','テスト3','2009-06-02','08:02','宮崎県の高千穂町の山あい土呂久では、亜ヒ酸製造が行われていた。この地区の住民に現れた慢性砒素中毒症は、公害病に認定された。症状としては、暴露後数十年して、皮膚の雨だれ様の色素沈着や白斑、手掌、足底の角化、ボーエン病、およびそれに続発する皮膚癌、呼吸器系の肺癌、泌尿器系の癌がある。発生当時は、砒素を焼く煙がＶ字型の谷に低く垂れ込め、河川や空気を汚染したものと考えられた。上に記した症状は、特に広範な皮膚症状は、環境による慢性砒素中毒を考えるべき重要な症状である。この症状が重要であり、長年月経過すれば、病変、皮膚、毛髪、爪などには、砒素を検出しない。\r\n\r\n上流に天然の砒素化合物鉱床がある河川はヒ素で汚染されているため、高濃度の場合、流域の水を飲むことは服毒するに等しい自殺行為である。低濃度であっても蓄積するので、長期飲用は中毒を発症する。地熱発電の水も砒素を含むので、川に流されず、また、地下に戻される。慢性砒素中毒は、例えば井戸の汚染などに続発して、単発的に発生することもある。このような河川は中東など世界に若干存在する。砒素中毒で最も有名なのは台湾の例であり、足の黒化、皮膚癌が見られた。汚染が深刻な国バングラデシュでは、皮膚症状、呼吸器症状、内臓疾患をもつ患者が増えている。ガンで亡くなるケースも報告されている。中国奥地にもみられ、日本の皮膚科医が調査している。',0,'cibech',2),
 (2,'200906027569','Test2','2009-07-02','17:22','So where is the leader of the free world? President Obama has picked out a place for himself among the spectator seats. From there, speaking of and to Iran, he comments that \"The world is watching.\" But while he has \"deep concerns,\" especially about the violence he\'s been observing on television, he sees no gain in \"meddling in Iranian elections.\"\r\n\r\nA cynic might infer that Obama is simply waiting for the protesters to be cleared out of the way so he can carry on with his dreams of extending a hand to cut deals with the dissent-crushing, terror-drunk, uranium-loving godfathers of Tehran. More generously, one might wonder if Obama really believes Iran\'s people have the best chance of defanging their own despots if unarmed protesters and armed state security forces are left to hash out among themselves who\'s in charge.',0,'cibech',0),
 (3,'200906027630','Test3','2009-08-03','08:02','Any depiction or recreation of real world locations, entities, businesses, or organizations is not intended to be or imply any sponsorship or endorsement of this game by such party or parties. Produced under license of Ferrari Spa. FERRARI',0,'cibech',0),
 (1,'200906027631','测试一','2009-06-03','06:33','伊朗总统选举争议引发的街头抗争17日进入第5天。败选的前总理米尔·侯赛因·穆萨维支持者不顾政府禁令，17日晚继续在首都德黑兰等地举行示威活动。同一天，伊朗政府抗议美国“干涉”伊朗国内事务，美国国务院对此予以否认。 “无声示威”哀悼死伤者穆萨维17日通过个人网站，呼吁支持者把18日当作“哀悼日”，向几天前死于街头冲突的死伤民众及其家人表示哀悼之情。',0,'cibech',1),
 (2,'200906027647','测试二','2009-06-02','08:02','其中，允许“经批准，通过以聘代评的方式取得中级及以上专业技术职务任职资格的，提供单位的聘书”也可以；在激励条件中只要符合条件的就不受职称这一条的限制。实施细则中为适应部分未实行专业技术职务或职业资格制度的企业中就业、创业人员的实际情况，设定了以薪酬、纳税、或创造就业岗位的实际水平，替代申办条件中级专业技术职务和职业资格的要求，即薪酬及纳税或解决本市就业贡献达到一定标准的就业、创业人员可不受职称（职业资格)限制。激励条件中还注明，“按个人在本市直接投资（或投资份额）计算，最近连续三个纳税年度内累计缴纳总额及每年最低缴纳额达到本市规定标准的，或者连续3年聘用本市员工人数达到规定标准的”，这只是对一部分可能不符合以职称等为衡量标准的一种补充，人才是多样的，在上海投资又缴纳一定的税收和创造就业岗位也是人才，它只是对少数人，谈不上花300万元买了一个户口，这是对其贡献的一种认定方法。其中，连续3年平均每年聘用本市员工100人及以上，标准有些高，但与连续三个纳税年度平均每年纳税额在100万元及以上是两者取一，就好多了。体现了“不惟学历、不惟职称、不惟资历、不惟身份，海纳百川聚人才”。',0,'cibech',1),
 (3,'200906027634','测试三','2009-08-02','08:02','据韩联社报道，劳拉·凌的姐姐丽莎·凌17日上午做客ABC广播节目表示：“朝鲜当局于上周宣判她们12年劳改后，再也没有听到任何消息，感到很担心。” 美国媒体报道称，2名女记者的家属通过声明表示：“对朝鲜当局公开细节表示感谢。无论她们承认的嫌疑是什么，我们都在此道歉。真心希望朝鲜当局拿出同情心，将尤娜·李和劳拉·凌送回家人',0,'cibech',1),
 (1,'200906027636','テスト1','1997-07-02','08:02','1955年の森永ヒ素ミルク中毒事件では粉ミルクにヒ素が混入したことが原因で、多数の死者を出した。この場合は急性砒素中毒である。\r\n\r\n2004年には英国食品規格庁がヒジキに無機ヒ素が多く含まれるため食用にしないよう英国民に勧告した。これに対し、日本の厚生労働省はヒジキに含まれるヒ素は極めて微量であるため、一般的な範囲では食用にしても問題はないという見解を出している[4]。\r\n\r\nまた、土壌汚染対策法において、ヒ素およびその化合物は第2種特定有害物質に定められている。',0,'cibech',2);
/*!40000 ALTER TABLE `tm_post` ENABLE KEYS */;


--
-- Definition of table `tm_tags`
--

DROP TABLE IF EXISTS `tm_tags`;
CREATE TABLE `tm_tags` (
  `i_postid` int(10) unsigned NOT NULL COMMENT 'Post id from post',
  `i_tagid` int(10) unsigned NOT NULL default '0' COMMENT 'Tag id',
  `tn_delflag` tinyint(1) unsigned NOT NULL default '0' COMMENT 'Delete Flag',
  PRIMARY KEY  USING BTREE (`i_postid`,`i_tagid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Post tags';

--
-- Dumping data for table `tm_tags`
--

/*!40000 ALTER TABLE `tm_tags` DISABLE KEYS */;
INSERT INTO `tm_tags` (`i_postid`,`i_tagid`,`tn_delflag`) VALUES 
 (1,1,0),
 (2,2,0),
 (3,3,0),
 (1,2,0),
 (1,3,1);
/*!40000 ALTER TABLE `tm_tags` ENABLE KEYS */;


--
-- Definition of table `tr_tag`
--

DROP TABLE IF EXISTS `tr_tag`;
CREATE TABLE `tr_tag` (
  `i_tagid` int(10) unsigned NOT NULL default '0' COMMENT 'Tag Id',
  `s_tagname` varchar(20) NOT NULL COMMENT 'Tag Name',
  `tn_delflag` tinyint(1) unsigned NOT NULL default '0' COMMENT 'Delete Flag',
  `tn_lang` tinyint(1) unsigned NOT NULL default '0' COMMENT 'Language Type',
  `s_user` varchar(20) NOT NULL COMMENT 'Tag Owner',
  PRIMARY KEY  USING BTREE (`i_tagid`,`tn_lang`),
  KEY `INDEX_TAG_USER` (`s_user`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='Tag List';

--
-- Dumping data for table `tr_tag`
--

/*!40000 ALTER TABLE `tr_tag` DISABLE KEYS */;
INSERT INTO `tr_tag` (`i_tagid`,`s_tagname`,`tn_delflag`,`tn_lang`,`s_user`) VALUES 
 (1,'动漫',0,1,'cibech'),
 (2,'杂事',0,1,'cibech'),
 (3,'计算机与网络',0,1,'cibech'),
 (1,'Anime&Comic',0,0,'cibech'),
 (2,'Every Litter Thing',0,0,'cibech'),
 (3,'Computer&Network',0,0,'cibech'),
 (1,'アニコミ',0,2,'cibech'),
 (2,'日記',0,2,'cibech'),
 (3,'コンピューター',0,2,'cibech');
/*!40000 ALTER TABLE `tr_tag` ENABLE KEYS */;


--
-- Definition of table `tr_user`
--

DROP TABLE IF EXISTS `tr_user`;
CREATE TABLE `tr_user` (
  `i_uid` int(10) unsigned NOT NULL auto_increment COMMENT 'User Unique ID',
  `s_user` varchar(20) NOT NULL COMMENT 'User Name',
  `tn_is_male` tinyint(1) unsigned default NULL COMMENT 'User Sex',
  `s_user_email` varchar(40) default NULL COMMENT 'User Email',
  `s_pass_hash` char(40) NOT NULL COMMENT 'User Pass Hash',
  `tn_delflag` tinyint(1) unsigned NOT NULL default '0' COMMENT 'Delete Flag',
  PRIMARY KEY  (`i_uid`),
  UNIQUE KEY `UNIQUE_USER` (`s_user`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Users of the blog';

--
-- Dumping data for table `tr_user`
--

/*!40000 ALTER TABLE `tr_user` DISABLE KEYS */;
INSERT INTO `tr_user` (`i_uid`,`s_user`,`tn_is_male`,`s_user_email`,`s_pass_hash`,`tn_delflag`) VALUES 
 (1,'cibech',1,NULL,'cibech@live.com',0);
/*!40000 ALTER TABLE `tr_user` ENABLE KEYS */;


--
-- Definition of table `tr_usernames`
--

DROP TABLE IF EXISTS `tr_usernames`;
CREATE TABLE `tr_usernames` (
  `s_user` varchar(20) NOT NULL COMMENT 'Username',
  `s_user_name` varchar(40) NOT NULL COMMENT 'Screenname',
  `tn_lang` tinyint(1) unsigned NOT NULL COMMENT 'Language Type',
  PRIMARY KEY  (`s_user`,`tn_lang`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='The Screenname of the user';

--
-- Dumping data for table `tr_usernames`
--

/*!40000 ALTER TABLE `tr_usernames` DISABLE KEYS */;
INSERT INTO `tr_usernames` (`s_user`,`s_user_name`,`tn_lang`) VALUES 
 ('cibech','Ci Bech',0),
 ('cibech','塞北',1),
 ('cibech','シーベッチ',2);
/*!40000 ALTER TABLE `tr_usernames` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
