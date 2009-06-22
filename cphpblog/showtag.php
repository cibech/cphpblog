<?php
require_once('global_data.php');

$TAG_tag_id = htmlspecialchars($_GET['tagid']);

require_once('header_data.php');
require_once("template/$GLB_theme/t_header.html");
	
require_once('tag_data.php');
require_once("template/$GLB_theme/t_tag.html");
?>