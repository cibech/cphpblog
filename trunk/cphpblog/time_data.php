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
//Toggle Date
$POST_toggle_year = '';
$POST_toggle_month = '';
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

//Only paging for year mode
if(! $TIME_month_mode)
{
	//Query the edge of the paging
	$SQL_edge_query = $GLB_db->query(	"SELECT max(p.i_timestamp) AS TOP_EDGE, min(p.i_timestamp) AS BOTTOM_EDGE " . 
										" FROM tm_post AS p " .
										" WHERE p.tn_delflag = 0 AND p.s_user = '$GLB_user' AND p.tn_lang = $CONF_ui_lang "
									);

	$TMP_edge = $GLB_db->fetch_array($SQL_edge_query);
	$BODY_top_edge = $TMP_edge['TOP_EDGE'];
	$BODY_bottom_edge = $TMP_edge['BOTTOM_EDGE'];
}

//Query the posts of the current page
if($TIME_month_mode)
{
	$SQL_time_query = $GLB_db->query(	"SELECT p.i_postid, p.s_posturi, p.s_posttitle, p.dt_postdate, p.c_posttime, p.tb_post, p.s_user, u.s_user_name, cs.i_cmcount " . 
										" FROM tm_post AS p " .
										" LEFT JOIN tr_usernames AS u ON p.s_user = u.s_user AND u.tn_lang = $CONF_ui_lang " .
										" LEFT JOIN (SELECT c.i_postid, COUNT(c.i_comment_id) AS i_cmcount FROM tm_comments AS c WHERE c.tn_delflag = 0 AND c.tn_lang = $CONF_ui_lang GROUP BY c.i_postid) AS cs ON p.i_postid = cs.i_postid " . 
										" WHERE p.tn_delflag = 0 AND p.s_user = '$GLB_user' AND year(dt_postdate)= $TIME_year AND month(dt_postdate) = $TIME_month AND p.tn_lang = $CONF_ui_lang " .
										" ORDER BY p.i_timestamp DESC "
									);
}
else
{
	$SQL_time_query = $GLB_db->query(	"SELECT p.i_postid, p.s_posturi, p.s_posttitle, p.i_timestamp, p.dt_postdate, p.c_posttime, p.tb_post, p.s_user, u.s_user_name, cs.i_cmcount " . 
										" FROM tm_post AS p " .
										" LEFT JOIN tr_usernames AS u ON p.s_user = u.s_user AND u.tn_lang = $CONF_ui_lang " .
										" LEFT JOIN (SELECT c.i_postid, COUNT(c.i_comment_id) AS i_cmcount FROM tm_comments AS c WHERE c.tn_delflag = 0 AND c.tn_lang = $CONF_ui_lang GROUP BY c.i_postid) AS cs ON p.i_postid = cs.i_postid " . 
										" WHERE p.tn_delflag = 0 AND p.s_user = '$GLB_user' AND year(dt_postdate)= $TIME_year AND p.tn_lang = $CONF_ui_lang " .
										" ORDER BY p.i_timestamp DESC " .
										" LIMIT 0, $CONF_year_perpage "
									);
}

while($TMP_post = $GLB_db->fetch_array($SQL_time_query))
{
	list($TMP_year, $TMP_month, $TMP_day) = explode('-', $TMP_post['dt_postdate']);
	list($TMP_hour, $TMP_minutes) = explode(':', $TMP_post['c_posttime']);
	
	empty($POST_toggle_year) ? $POST_toggle_year = $TMP_year : TRUE;
	empty($POST_toggle_month) ? $POST_toggle_month = $TMP_month : TRUE;
	
	$TMP_timestamp = mktime($TMP_hour, $TMP_minutes, 0, $TMP_month, $TMP_day, $TMP_year);
	
	//These vars count from 1
	$TMP_dofweek = date('w', $TMP_timestamp) + 1;
	$TMP_month = date('n', $TMP_timestamp);
	$TMP_day = date('j', $TMP_timestamp);
	
	$TMP_post['dt_postdate'] = $GLB_date->get_full_date($TMP_year, $TMP_month, $TMP_day, $TMP_dofweek);
	
	//Only paging for year mode
	if(! $TIME_month_mode)
	{
		//Set timestamp for paging
		$BODY_timestamp_top == -1 ? $BODY_timestamp_top = $TMP_post['i_timestamp'] : TRUE;
		$BODY_timestamp_bottom = $TMP_post['i_timestamp'];
	}
	
	//Count for nothing means 0 comment
	isset($TMP_post['i_cmcount']) ? TRUE : $TMP_post['i_cmcount'] = 0;

	$BODY_posts[$TMP_post['i_postid']] = $TMP_post;
	
	//Initialize the tags array
	$BODY_tags[$TMP_post['i_postid']] = array();
	$BODY_pid_list .= ',' . $TMP_post['i_postid'];
}
$GLB_db->free_result($SQL_time_query);

//Get paging control for year mode
if(! $TIME_month_mode)
{
	//Set the pager control
	if($BODY_timestamp_top == $BODY_top_edge)
	{
		$BODY_isnot_top = FALSE;
	}

	if($BODY_timestamp_bottom == $BODY_bottom_edge)
	{
		$BODY_isnot_bottom = FALSE;
	}
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
											" ORDER BY t.i_timestamp DESC "
								);

$BODY_title_count = array();
$TIME_month_array = array();	//For month paging, we need this array
$TIME_walk_key = -1;
$TIME_walk_current_key = -1;
$TMP_walk_date = '000000';
while($TMP_title_total = $GLB_db->fetch_array($SQL_titles_total_query))
{
	list($TMP_year, $TMP_month, $TMP_day) = explode('-', $TMP_title_total['dt_postdate']);
	$BODY_title_total[$TMP_year][$TMP_month][] = $TMP_title_total;
	$BODY_title_count[$TMP_year][$TMP_month][] = 1;			//For the count of title
	
	//Only need month walk for month mode
	if($TIME_month_mode)
	{
		if($TMP_walk_date != $TMP_year . $TMP_month)
		{
			$TMP_walk_date = $TMP_year . $TMP_month;
			$TIME_month_array[++$TIME_walk_key] = $TMP_walk_date;
		}
	}
}

if($TIME_month_mode)
{
	//Get value of the previous month and next month
	$TIME_walk_current_key = array_search($TIME_req_date, $TIME_month_array);
	//The sort is DESC, so you must decrease key while get the next
	$BODY_next_yearmonth = ( ($TIME_walk_current_key-1) < 0 ? -1 : $TIME_month_array[$TIME_walk_current_key-1] );
	$BODY_prev_yearmonth = ( ($TIME_walk_current_key+1) > $TIME_walk_key ? -1 : $TIME_month_array[$TIME_walk_current_key+1] );
}

//For small memory usage, do not need free now to save time, automatic release at the end of script excution
//$GLB_db->free_result($SQL_tags_query);

?>