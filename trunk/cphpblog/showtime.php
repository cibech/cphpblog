<?php
require_once('global_data.php');

$TMP_date = htmlspecialchars($_GET['date']);
$TIME_year = substr($TMP_date, 0, 4);
$TIME_month = substr($TMP_date, 4);
$TIME_month_mode = TRUE;

if(empty($TIME_month))
{
	$TIME_month_mode = FALSE;
}

require_once('header_data.php');
require_once("template/$GLB_theme/t_header.html");
	
require_once('time_data.php');
require_once("template/$GLB_theme/t_time.html");
?>