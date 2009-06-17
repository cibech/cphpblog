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
-- Definition of table `tm_post`
--

DROP TABLE IF EXISTS `tm_post`;
CREATE TABLE `tm_post` (
  `i_postid` int(10) unsigned NOT NULL auto_increment COMMENT 'Post ID',
  `s_posturi` varchar(40) NOT NULL COMMENT 'Post URI',
  `s_posttitle` varchar(50) NOT NULL COMMENT 'Post title',
  `dt_postdate` date NOT NULL COMMENT 'Post date',
  `c_posttime` char(5) NOT NULL default '18:00' COMMENT 'Post time',
  `tb_post` mediumtext COMMENT 'Post content',
  `tn_delflag` tinyint(1) unsigned NOT NULL default '0' COMMENT 'Delete flag',
  `s_user` varchar(20) default NULL COMMENT 'Username of the post',
  `tn_lang` tinyint(3) unsigned NOT NULL default '0' COMMENT 'Language Type',
  PRIMARY KEY  (`i_postid`),
  KEY `USER` (`s_user`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='Post of the blog';

--
-- Dumping data for table `tm_post`
--

/*!40000 ALTER TABLE `tm_post` DISABLE KEYS */;
INSERT INTO `tm_post` (`i_postid`,`s_posturi`,`s_posttitle`,`dt_postdate`,`c_posttime`,`tb_post`,`tn_delflag`,`s_user`,`tn_lang`) VALUES 
 (1,'200906027433','实验性质的标题','2009-06-02','16:22','■「セレブからの招待」に注意を\r\n<br/><br/>\r\n新型インフルエンザに海外セレブ…。誰もが注目するニュースに関する情報提供や著名人の動画や情報を見られると装い、コンピューターウイルスに感染させる手口が広がっている。メールが送られてくるほか、ウェブサイトからも感染する恐れがあり、専門家は警戒を求めている。（森本昌彦）\r\n<br/><br/>\r\n◆実在組織かたり\r\n<br/><br/>\r\n　「豚インフルエンザの感染は拡大を続けている。（中略）自分の身を守るために、豚インフルエンザに関する基礎知識を身につけましょう」\r\n\r\n　新型インフルエンザに関連して、こんな内容のメールが出回った。差出人は国立感染症研究所とされ、「ブタインフルエンザに関する知識」とのファイルが添付されていた。\r\n\r\n　いかにも本物のように見せかけているが、同研究所ではメールでこうした注意を呼びかけておらず、まったくの偽物だった。研究所のホームページでは、添付ファイルを開くとウイルスに感染してパソコンのシステムが破壊されるなどの恐れがあるとして、注意を呼びかけている。\r\n\r\n　独立行政法人「情報処理推進機構（ＩＰＡ）」によると、新型インフルエンザの情報提供を装った偽のメールは２件確認されている。１件は国立感染症研究所をかたり、もう１件は架空の組織名を名乗っていた。いずれもウイルスに感染させようとする悪質なメールだ。\r\n\r\n　検索サイトから悪質なウェブサイトに誘導する手口もある。ＩＰＡによると、豚を意味する「ｓｗｉｎｅ」という英単語を検索サイトで打ち込み、画面に出てくる検索結果の上位に悪質なウェブサイトを表示。サイトに入った利用者をウイルス感染の脅威にさらすという仕組みだ。\r\n\r\n　何らかの方法で検索結果の上位に表れるように操作されており、ＩＰＡは、検索結果の上位に表示されるサイトなら安全という利用者の心理を突いた手口とみている。\r\n<br/><br/>\r\n◆興味でつい…\r\n<br/><br/>\r\n　ウイルス感染の恐れがあるメールやウェブサイトでは、新型インフルエンザ以外にもさまざまな話題が使われている。\r\n\r\n　ウイルス対策ソフトなどを販売する「エフセキュア」（横浜市）によると、最近は海外セレブを利用したものが多い。セレブが差出人であることを装った偽メールや、セレブの動画を見るためと称して悪質なプログラムをダウンロードさせようとするサイトもあるという。\r\n\r\n　頻繁に使われているのは、ブリトニー・スピアーズさんやパリス・ヒルトンさんら。セレブ以外にも、オバマ米大統領や北京五輪が利用されたこともあるという。\r\n\r\n　同社のテクノロジー＆サービス部長の八木沼与志勝さんは「興味を持っている話題であれば、（不審なファイルなどでも）ついダブルクリックしてしまう。その情報を見たいという人間の心理を突いた手口だ」と指摘している。\r\n<br/><br/>\r\n■ウイルス対策は怠らずに\r\n<br/><br/>\r\n　ウイルスなどの被害に遭わないためにはどうすればいいのか。エフセキュアの八木沼さんは「悪質かもしれないウェブサイトやファイルを開く前に『大丈夫か』と考え、疑いの目を持ってほしい。気づかないこともあるため、ＯＳ（基本ソフト）やほかのアプリケーション、ウイルス対策ソフトを常に最新の状態にしておくことが必要だ」と話す。\r\n\r\n　ただ、どのウェブサイトが危険かを判断するのは難しい。ＩＰＡは、利用者からアクセスしたいウェブサイトのＵＲＬをメールで受け付け、その危険性を判断するサービスを実施している。判断に迷った際にはそうしたサービスを使うのも一つの手だろう。',0,'cibech',1),
 (2,'200906027569','这是第二篇','2009-06-02','17:22','イラン大統領選に伴う混乱を受けて同国当局が情報統制を強める中、米国務省がソーシャル・ネットワーキング・サービス（SNS）の「トゥイッター」に対し、イラン国民の情報伝達手段を確保するため、整備のためのサービス停止を遅らせるよう要請していたことが16日、明らかになった。\r\n<p></p>\r\nトゥイッターはSNSの簡易版サービス。個人利用者が短文のメッセージを投稿したり、登録した別の会員のメッセージを閲覧したりでき、手軽さが受けて急速に世界中に広まった。今回のイラン大統領選でも、若者を中心に抗議デモの情報交換などに幅広く活用されている。',0,'cibech',1),
 (3,'200906027630','瑞穂財団は経済の危機です','2009-06-03','08:02','郵便不正を巡る厚生労働省の偽公文書作成事件で、再逮捕された自称障害者団体「凛(りん)の会」（解散）元会長・倉沢邦夫被告（７３）が大阪地検特捜部の調べに対し、障害者団体証明書が発行されるよう口添えを頼んだ国会議員が、目の前で当時の同省障害保健福祉部長（５７）（退職）に電話で依頼したと供述していることがわかった。',0,'cibech',1);
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
  `tn_lang` tinyint(3) unsigned NOT NULL default '0' COMMENT 'Language Type',
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
 (1,'アニメ・コミック',0,2,'cibech'),
 (2,'日記',0,2,'cibech'),
 (3,'コンピューター・ネット-ワーキング',0,2,'cibech');
/*!40000 ALTER TABLE `tr_tag` ENABLE KEYS */;


--
-- Definition of table `tr_user`
--

DROP TABLE IF EXISTS `tr_user`;
CREATE TABLE `tr_user` (
  `i_uid` int(10) unsigned NOT NULL auto_increment COMMENT 'User Unique ID',
  `s_user` varchar(20) NOT NULL COMMENT 'User Name',
  `s_user_name` varchar(60) default NULL COMMENT 'User Full Name',
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
INSERT INTO `tr_user` (`i_uid`,`s_user`,`s_user_name`,`tn_is_male`,`s_user_email`,`s_pass_hash`,`tn_delflag`) VALUES 
 (1,'cibech','Ci Bech',1,NULL,'cibech@live.com',0);
/*!40000 ALTER TABLE `tr_user` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
