<?php
/**************************************************
//  This File INCLUDE DEFINED VAR, GLOBAL CONF, 
//	UI STRING, MYSQL CLASS, DATEUI CLASS, PHYBASE,
//	THEME VAR, USER, FULLURL, URI, DB INSTANCE,
//	DATE INSTANCE
//	THIS FILE SHOULD BE INCLUDE BY ANYOTHER PHP FILE
***************************************************/

//For this is DEPRECATED in PHP6, disable this featrue
set_magic_quotes_runtime(FALSE);

require_once('define.php');
require_once('conf/global_conf.php');

require_once('ui.php');
require_once('data/mysql_db.php');
require_once('data/date_ui.php');

$GLB_phy_base = us_getdirname(__FILE__);
$GLB_theme = $CONF_theme;

$GLB_user = 'cibech';

//Return as /cpphblog , if at the top of uri, return nothing.
$GLB_root_url = substr($_SERVER['SCRIPT_NAME'], 0, strrpos($_SERVER['SCRIPT_NAME'],'/'));
//Return as http://localhost/cppblog , if the root, return http://localhost
$GLB_url_base = $CONF_protocol . $_SERVER['HTTP_HOST'] . $CONF_port . $GLB_root_url;

$GLB_db = new DB($CONF_dbhost, $CONF_dbuser, $CONF_dbpass, $CONF_dbname, $CONF_dbpconnect, $CONF_charset);
$GLB_date = new UCDATE($CONF_ui_lang);
	
//For security reason, unset the database virables
unset($CONF_dbhost, $CONF_dbuser, $CONF_dbpass, $CONF_dbname);

//Case some file may be placed under the ROOT dir, So remove the slash from the tail of the path
function us_getdirname($file_phy_fullpath){
	if(strpos($file_phy_fullpath,'\\')!==false){
		return substr($file_phy_fullpath,0,strrpos($file_phy_fullpath,'\\'));
	}elseif(strpos($file_phy_fullpath,'/')!==false){
		return substr($file_phy_fullpath,0,strrpos($file_phy_fullpath,'/'));
	}else{
		return '/';
	}
}
?>