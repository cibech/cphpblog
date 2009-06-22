<?php

$POST_post = array();
$POST_tags = array();
$POST_tags_total = array();
$POST_title_total = array();
$POST_title_count = array();
$POST_tags_html = '';

//Get the request post data
$SQL_post_query = $GLB_db->query(	"SELECT p.i_postid, p.s_posturi, p.s_posttitle, p.dt_postdate, p.c_posttime, p.tb_post, p.s_user, u.s_user_name, cs.i_cmcount " .
									 " FROM tm_post AS p " .
									 " LEFT JOIN tr_usernames AS u ON p.s_user = u.s_user AND u.tn_lang = $CONF_ui_lang " .
									 " LEFT JOIN (SELECT c.i_postid, COUNT(c.i_comment_id) AS i_cmcount FROM tm_comments AS c WHERE c.tn_delflag = 0 AND c.tn_lang = $CONF_ui_lang GROUP BY c.i_postid) AS cs ON p.i_postid = cs.i_postid " .
									 " WHERE p.tn_delflag = 0 AND p.tn_lang = $CONF_ui_lang AND p.i_postid = $POST_post_id"
								);

$POST_post = $GLB_db->fetch_array($SQL_post_query);

isset($POST_post['i_cmcount']) ? TRUE : $POST_post['i_cmcount'] = 0;
list($TMP_year, $TMP_month, $TMP_day) = explode('-', $POST_post['dt_postdate']);
list($TMP_hour, $TMP_minutes) = explode(':', $POST_post['c_posttime']);

$POST_toggle_year = $TMP_year;
$POST_toggle_month = $TMP_month;

$TMP_timestamp = mktime($TMP_hour, $TMP_minutes, 0, $TMP_month, $TMP_day, $TMP_year);

//These vars count from 1 and without heading 0
$TMP_dofweek = date('w', $TMP_timestamp) + 1;
$TMP_month = date('n', $TMP_timestamp);
$TMP_day = date('j', $TMP_timestamp);

$POST_post['dt_postdate'] = $GLB_date->get_full_date($TMP_year, $TMP_month, $TMP_day, $TMP_dofweek);

isset($POST_post['i_cmcount']) ? TRUE : $POST_post['i_cmcount'] = 0;

//Get tags of request post
$SQL_tag_query = $GLB_db->query(	"SELECT t.i_tagid, r.s_tagname " .
									" FROM tm_tags t LEFT JOIN tr_tag r ON t.i_tagid = r.i_tagid AND r.tn_lang = $CONF_ui_lang " .
									" WHERE t.i_postid = $POST_post_id " .
									" AND t.tn_delflag = 0 "
								);

while($TMP_tags = $GLB_db->fetch_array($SQL_tag_query))
{
	$POST_tags[$TMP_tags['i_tagid']] = $TMP_tags['s_tagname'];
	$POST_tags_html .= "&nbsp;<a href='$GLB_root_url/showtag.php?tagid=$TMP_tags[i_tagid]' rel='tag'>$TMP_tags[s_tagname]</a>&nbsp;";
}

//Query all tags and numbers
$SQL_tags_total_query = $GLB_db->query(	"SELECT ts.i_tagid, ts.i_tgcount, t.s_tagname FROM (SELECT tg.i_tagid, COUNT(tg.i_postid) AS i_tgcount " .
										" FROM tm_tags AS tg WHERE tg.tn_delflag = 0 AND tg.i_postid IN (SELECT p.i_postid FROM tm_post AS p WHERE p.tn_delflag = 0 AND p.s_user = '$GLB_user' AND p.tn_lang = $CONF_ui_lang) GROUP BY tg.i_tagid) AS ts " .
										" LEFT JOIN tr_tag AS t ON ts.i_tagid = t.i_tagid AND t.tn_lang = $CONF_ui_lang " .
										" WHERE t.tn_delflag = 0 "
								);

while($TMP_tags_total = $GLB_db->fetch_array($SQL_tags_total_query))
{
	isset($TMP_tags_total['i_tgcount']) ? TRUE : $TMP_tags_total['i_tgcount'] = 0;
	$POST_tags_total[] = $TMP_tags_total;
}

//Query all titles and numbers
$SQL_titles_total_query = $GLB_db->query(	"SELECT t.dt_postdate, t.i_postid, t.s_posturi, t.s_posttitle FROM tm_post AS t " .
											" WHERE t.tn_delflag = 0 AND t.s_user = '$GLB_user' AND t.tn_lang = $CONF_ui_lang " .
											" ORDER BY t.dt_postdate DESC, t.c_posttime DESC"
								);

$POST_title_count = array();
while($TMP_title_total = $GLB_db->fetch_array($SQL_titles_total_query))
{
	list($TMP_year, $TMP_month, $TMP_day) = explode('-', $TMP_title_total['dt_postdate']);
	$POST_title_total[$TMP_year][$TMP_month][] = $TMP_title_total;
	$POST_title_count[$TMP_year][$TMP_month][] = 1;			//For the count of title
}

//Query all comments
$SQL_comments_total_query = $GLB_db->query(	"SELECT c.i_comment_id, c.s_user, u.s_user_name, c.dt_postdate, c.c_posttime, c.t_comment, c.tn_isreply, c.i_repid, c.tn_isowner_only " .
											" FROM tm_comments AS c LEFT JOIN tr_usernames AS u ON c.s_user = u.s_user AND u.tn_lang = $CONF_ui_lang " .
											" WHERE c.tn_delflag = 0 AND c.i_postid = $POST_post_id AND c.tn_lang = $CONF_ui_lang " .
											" ORDER BY c.dt_postdate ASC, c.c_posttime ASC"
								);

$POST_comments_total = array();
while($TMP_comments_total = $GLB_db->fetch_array($SQL_comments_total_query))
{
	$TMP_comments_total['s_user'] == UD_NONAME ? $TMP_comments_total['s_user_name'] = $BODY_str_noname : TRUE;
	
	$POST_comments_total[] = $TMP_comments_total;
}

?>