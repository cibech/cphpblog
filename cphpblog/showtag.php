<?php
require_once('global_data.php');

//Get tag id
$TAG_tag_id = htmlspecialchars($_GET['tagid']);

//Get pagging parameter
isset($_GET['tmstp']) ? $BODY_page_timestamp = htmlspecialchars($_GET['tmstp']) : TRUE;
isset($_GET['is_next']) ? ($BODY_is_nextpage = ((htmlspecialchars($_GET['is_next']) == 1) ? TRUE : FALSE)) : TRUE;

require_once('header_data.php');
require_once("template/$GLB_theme/t_header.html");
	
require_once('tag_data.php');
require_once("template/$GLB_theme/t_tag.html");
?>