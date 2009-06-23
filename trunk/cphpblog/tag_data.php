<?php

//Array of post title, time, content, user
$BODY_posts = array();
//Array of post tags
$BODY_tags = array();
//Tags total count
$BODY_tags_total = array();
//Tags title count
$BODY_title_total = array();
//List of post id
$BODY_pid_list = '';
//Request tag name
$BODY_tag_name = '';
//Time stamp for pager
$BODY_timestamp_top = -1;
$BODY_timestamp_bottom = -1;
//Is empty flag
$BODY_is_empty = TRUE;
//pager control
$BODY_top_edge = -1;
$BODY_bottom_edge = -1;
$BODY_isnot_top = TRUE;
$BODY_isnot_bottom = TRUE;

//Set up SQL
isset($BODY_page_timestamp) ? ($SQL_page_condition = ($BODY_is_nextpage ? " AND p.i_timestamp < $BODY_page_timestamp " : " AND p.i_timestamp > $BODY_page_timestamp " )) : $SQL_page_condition = '';

//Query the edge of the paging
$SQL_edge_query = $GLB_db->query(	"SELECT max(p.i_timestamp) AS TOP_EDGE, min(p.i_timestamp) AS BOTTOM_EDGE " . 
									" FROM tm_post AS p " .
									" RIGHT JOIN tm_tags AS t ON t.tn_delflag = 0 AND p.i_postid = t.i_postid AND t.i_tagid = $TAG_tag_id " .
									" WHERE p.tn_delflag = 0 AND p.s_user = '$GLB_user' AND p.tn_lang = $CONF_ui_lang "
								);

$TMP_edge = $GLB_db->fetch_array($SQL_edge_query);
$BODY_top_edge = $TMP_edge['TOP_EDGE'];
$BODY_bottom_edge = $TMP_edge['BOTTOM_EDGE'];

//Get the requested tag data
$SQL_tag_query = $GLB_db->query(	" SELECT tg.s_tagname, p.i_postid, p.s_posturi, p.s_posttitle, p.i_timestamp, p.dt_postdate, p.c_posttime, p.tb_post, p.s_user, u.s_user_name, cs.i_cmcount " .
									" FROM tm_post AS p " .
									" RIGHT JOIN tm_tags AS t ON t.tn_delflag = 0 AND p.i_postid = t.i_postid AND t.i_tagid = $TAG_tag_id " .
									" LEFT JOIN tr_tag AS tg ON t.i_tagid = tg.i_tagid AND tg.tn_lang = $CONF_ui_lang " .
									" LEFT JOIN tr_usernames AS u ON p.s_user = u.s_user AND u.tn_lang = $CONF_ui_lang " .
									" LEFT JOIN (SELECT c.i_postid, COUNT(c.i_comment_id) AS i_cmcount FROM tm_comments AS c WHERE c.tn_delflag = 0 AND c.tn_lang = $CONF_ui_lang GROUP BY c.i_postid) AS cs ON p.i_postid = cs.i_postid " .
									" WHERE p.tn_delflag = 0 AND p.s_user = '$GLB_user' AND p.tn_lang = $CONF_ui_lang $SQL_page_condition " .
									" ORDER BY p.i_timestamp DESC " .
									" LIMIT 0, $CONF_tags_perpage "
								);

while($TMP_tag = $GLB_db->fetch_array($SQL_tag_query))
{
	//Data returned, We got at least one record
	$BODY_is_empty = FALSE;
	
	list($TMP_year, $TMP_month, $TMP_day) = explode('-', $TMP_tag['dt_postdate']);
	list($TMP_hour, $TMP_minutes) = explode(':', $TMP_tag['c_posttime']);
	
	$TMP_timestamp = mktime($TMP_hour, $TMP_minutes, 0, $TMP_month, $TMP_day, $TMP_year);
	
	//These vars count from 1
	$TMP_dofweek = date('w', $TMP_timestamp) + 1;
	$TMP_month = date('n', $TMP_timestamp);
	$TMP_day = date('j', $TMP_timestamp);
	
	$TMP_tag['dt_postdate'] = $GLB_date->get_full_date($TMP_year, $TMP_month, $TMP_day, $TMP_dofweek);
	
	//Set timestamp for paging
	$BODY_timestamp_top == -1 ? $BODY_timestamp_top = $TMP_tag['i_timestamp'] : TRUE;
	$BODY_timestamp_bottom = $TMP_tag['i_timestamp'];
	
	//Count for nothing means 0 comment
	isset($TMP_tag['i_cmcount']) ? TRUE : $TMP_tag['i_cmcount'] = 0;

	$BODY_posts[$TMP_tag['i_postid']] = $TMP_tag;
	
	//Initialize the tags array
	$BODY_tags[$TMP_tag['i_postid']] = array();
	$BODY_pid_list .= ',' . $TMP_tag['i_postid'];
	$BODY_tag_name = $TMP_tag['s_tagname'];	//$TMP_tag will be null at last, so place code inside
}
$GLB_db->free_result($SQL_tag_query);

//Set the pager control
if($BODY_timestamp_top == $BODY_top_edge)
{
	$BODY_isnot_top = FALSE;
}

if($BODY_timestamp_bottom == $BODY_bottom_edge)
{
	$BODY_isnot_bottom = FALSE;
}

//Query the tags of current page post
$BODY_pid_list = substr($BODY_pid_list, 1);
$SQL_tags_query = $GLB_db->query(	"SELECT t.i_postid, t.i_tagid, r.s_tagname " .
									" FROM tm_tags t LEFT JOIN tr_tag r ON t.i_tagid = r.i_tagid AND r.tn_lang = $CONF_ui_lang " .
									" WHERE t.i_postid in ($BODY_pid_list) " .
									" AND t.tn_delflag = 0 " .
									" ORDER BY t.i_postid "
								);

while($TMP_tags = $GLB_db->fetch_array($SQL_tags_query))
{
	$BODY_tags[$TMP_tags['i_postid']][$TMP_tags['i_tagid']] = $TMP_tags['s_tagname'];
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
	$BODY_tags_total[] = $TMP_tags_total;
}

//Query all titles and numbers
$SQL_titles_total_query = $GLB_db->query(	"SELECT t.dt_postdate, t.i_postid, t.s_posturi, t.s_posttitle FROM tm_post AS t " .
											" WHERE t.tn_delflag = 0 AND t.s_user = '$GLB_user' AND t.tn_lang = $CONF_ui_lang " .
											" ORDER BY t.dt_postdate DESC, t.c_posttime DESC"
								);

$BODY_title_count = array();
while($TMP_title_total = $GLB_db->fetch_array($SQL_titles_total_query))
{
	list($TMP_year, $TMP_month, $TMP_day) = explode('-', $TMP_title_total['dt_postdate']);
	$BODY_title_total[$TMP_year][$TMP_month][] = $TMP_title_total;
	$BODY_title_count[$TMP_year][$TMP_month][] = 1;			//For the count of title
}

?>
	
