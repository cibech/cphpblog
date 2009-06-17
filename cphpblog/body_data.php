<?php

//Array of post title, time, content, user
$BODY_posts = array();
//Array of post tags
$BODY_tags = array();
//List of post id
$BODY_pid_list = '';

$SQL_posts_query = $GLB_db->query(	"SELECT p.i_postid, p.s_posturi, p.s_posttitle, p.dt_postdate, p.c_posttime, p.tb_post, p.s_user, u.s_user_name " . 
									" FROM cphpblog.tm_post AS p LEFT JOIN cphpblog.tr_user AS u ON p.s_user = u.s_user " . 
									" WHERE p.tn_delflag = 0 AND p.s_user = '$GLB_user'"
								);

while($TMP_post = $GLB_db->fetch_array($SQL_posts_query))
{
	list($TMP_year, $TMP_month, $TMP_day) = explode('-', $TMP_post['dt_postdate']);
	list($TMP_hour, $TMP_minutes) = explode(':', $TMP_post['c_posttime']);
	
	$TMP_timestamp = mktime($TMP_hour, $TMP_minutes, 0, $TMP_month, $TMP_day, $TMP_year);
	
	$TMP_dofweek = date('w', $TMP_timestamp);
	$TMP_month = date('n', $TMP_timestamp);
	$TMP_day = date('j', $TMP_timestamp);
	
	$TMP_post['dt_postdate'] = us_get_full_date($TMP_year, $TMP_month, $TMP_day, $TMP_dofweek, $CONF_ui_lang);

	$BODY_posts[$TMP_post['i_postid']] = $TMP_post;
	
	//Initialize the tags array
	$BODY_tags[$TMP_post['i_postid']] = array();
	$BODY_pid_list .= ',' . $TMP_post['i_postid'];
}
$GLB_db->free_result($SQL_posts_query);

$BODY_pid_list = substr($BODY_pid_list, 1);
$SQL_tags_query = $GLB_db->query(	"SELECT t.i_postid, t.i_tagid, r.s_tagname " .
									" FROM tm_tags t LEFT JOIN tr_tag r ON t.i_tagid = r.i_tagid " .
									" WHERE t.i_postid in ($BODY_pid_list) " .
									" AND t.tn_delflag = 0 " .
									" AND r.tn_lang = $CONF_ui_lang " .
									" ORDER BY t.i_postid "
								);

while($TMP_tags = $GLB_db->fetch_array($SQL_tags_query))
{
	$BODY_tags[$TMP_tags['i_postid']][$TMP_tags['i_tagid']] = $TMP_tags['s_tagname'];
}
//$GLB_db->free_result($SQL_tags_query);

?>