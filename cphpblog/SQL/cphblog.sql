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
  `c_posttime` char(4) NOT NULL COMMENT 'Post time',
  `tb_post` mediumtext COMMENT 'Post content',
  `tn_delflag` tinyint(3) unsigned NOT NULL default '0' COMMENT 'Delete flag',
  PRIMARY KEY  (`i_postid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Post of the blog';

--
-- Dumping data for table `tm_post`
--

/*!40000 ALTER TABLE `tm_post` DISABLE KEYS */;
INSERT INTO `tm_post` (`i_postid`,`s_posturi`,`s_posttitle`,`dt_postdate`,`c_posttime`,`tb_post`,`tn_delflag`) VALUES 
 (1,'200906027433','实验性质的标题','2009-06-02','1622','我希望我能看到一片文章哦',0),
 (2,'200906027569','这是第二篇','2009-06-02','1722','嗯，这是我的第二篇文章',0);
/*!40000 ALTER TABLE `tm_post` ENABLE KEYS */;


--
-- Definition of table `tm_tags`
--

DROP TABLE IF EXISTS `tm_tags`;
CREATE TABLE `tm_tags` (
  `i_postid` int(10) unsigned NOT NULL COMMENT 'Post id from post',
  `c_tagid` char(4) NOT NULL COMMENT 'Tag id',
  `tn_delflag` tinyint(3) unsigned NOT NULL default '0' COMMENT 'Delete Flag',
  PRIMARY KEY  USING BTREE (`i_postid`,`c_tagid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Post tags';

--
-- Dumping data for table `tm_tags`
--

/*!40000 ALTER TABLE `tm_tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `tm_tags` ENABLE KEYS */;


--
-- Definition of table `tr_tag`
--

DROP TABLE IF EXISTS `tr_tag`;
CREATE TABLE `tr_tag` (
  `c_tagid` char(4) NOT NULL COMMENT 'Tag Id',
  `s_tagname` varchar(20) NOT NULL COMMENT 'Tag Name',
  `tn_delflag` tinyint(3) unsigned NOT NULL default '0' COMMENT 'Delete Flag',
  PRIMARY KEY  (`c_tagid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Tag List';

--
-- Dumping data for table `tr_tag`
--

/*!40000 ALTER TABLE `tr_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_tag` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
