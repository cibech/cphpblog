<?php
$BODY_posts = array();
$BODY_post_count = 0;

$SQL_posts_query = $GLB_db->query("SELECT p.i_postid, p.s_posttitle, p.dt_postdate, p.c_posttime, p.tb_post, p.tn_delflag FROM tm_post AS p");
while($TMP_post = $GLB_db->fetch_array($SQL_posts_query))
{
	$BODY_posts[$BODY_post_count] = $TMP_post;
	$BODY_post_count = $BODY_post_count + 1;
}

echo $BODY_posts[0]['s_posttitle'];
?>