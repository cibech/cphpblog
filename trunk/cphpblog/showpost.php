<?php
require_once('global_data.php');

$POST_post_id = htmlspecialchars($_GET['pid']);

require_once('header_data.php');
require_once("template/$GLB_theme/t_header.html");
	
require_once('post_data.php');
require_once("template/$GLB_theme/t_post.html");
?>