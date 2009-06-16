<?php
$BODY_posts = array();
$BODY_post_ids = array();
$BODY_post_ids[0] = 1;
$BODY_post_ids[1] = 2;

$SQL_posts_query = $GLB_db->query("SELECT p.i_postid, p.s_posttitle, p.dt_postdate, p.c_posttime, p.tb_post, p.tn_delflag FROM tm_post AS p");
while($TMP_post = $GLB_db->fetch_array($SQL_posts_query))
{
	$BODY_posts[$TMP_post['i_postid']] = $TMP_post;
}
$GLB_db->free_result($SQL_posts_query);
?>