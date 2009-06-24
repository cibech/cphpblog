<?php
include('global_data.php');
require_once('data/rss.php');

$channel=array(
	'atom:id'					=>	'tag:blogger.com,1999:blog-4891748495862422700',
	'astBuildDate'				=>	'Sun, 14 Jun 2009 16:35:59 +0000',
	'title'						=>	'Ci Bech\'s Blog',
	'description'				=>	'This is a description',
	'link'						=>	'http://cibech.web.fc2.com/',
	'managingEditor'			=>	'noreply@blogger.com',
	'generator'					=>	'Blogger',
	'openSearch:totalResults'	=>	'2',
	'openSearch:startIndex'		=>	'1',
	'openSearch:itemsPerPage'	=>	'25'
	);

$RSS_rss = new Rss(array('xml'=>"1.0",'rss'=>"2.0",'encoding'=>'UTF-8'));
$RSS_rss->channel($channel);

$query=$GLB_db->query("SELECT p.i_postid, p.s_posturi, p.s_posttitle, p.i_timestamp, p.dt_postdate, p.c_posttime, p.tb_post, p.s_user, u.s_user_name, cs.i_cmcount " . 
									" FROM tm_post AS p " .
									" LEFT JOIN tr_usernames AS u ON p.s_user = u.s_user AND u.tn_lang = $CONF_ui_lang " .
									" LEFT JOIN (SELECT c.i_postid, COUNT(c.i_comment_id) AS i_cmcount FROM tm_comments AS c WHERE c.tn_delflag = 0 AND c.tn_lang = $CONF_ui_lang GROUP BY c.i_postid) AS cs ON p.i_postid = cs.i_postid " . 
									" WHERE p.tn_delflag = 0 AND p.s_user = '$GLB_user' AND p.tn_lang = $CONF_ui_lang " .
									" ORDER BY p.i_timestamp DESC " .
									" LIMIT 0, $CONF_posts_perpage "
				);
while($rt=$GLB_db->fetch_array($query))
{
	list($TMP_year, $TMP_month, $TMP_day) = explode('-', $rt['dt_postdate']);
	list($TMP_hour, $TMP_minutes) = explode(':', $rt['c_posttime']);
	
	$TMP_timestamp = mktime($TMP_hour, $TMP_minutes, 0, $TMP_month, $TMP_day, $TMP_year);
	
	$item = array(
				'guid'        =>  $rt['s_posturi'],
				'pubDate'     =>  date('r',$TMP_timestamp),
				'atom:updated'=>  date('c',$TMP_timestamp),
				'title'       =>  $rt['s_posttitle'],
				'description' =>  $rt['tb_post'],
				'link'        =>  "$GLB_url_base/showpost.php?pid=$rt[i_postid]",
				'author'      =>  $rt['s_user_name']
				);
	$RSS_rss->item($item);
}
	
$RSS_rss->generate("feed/rss$CONF_ui_lang.xml");
header("Content-type: application/xml");
@readfile("feed/rss$CONF_ui_lang.xml");
exit;
?>