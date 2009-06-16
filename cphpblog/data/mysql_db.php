<?php
Class DB {
	var $query_num = 0;

	function DB($dbhost, $dbuser, $dbpw, $dbname, $pconnect = 0, $charset = 'utf-8') {
		$this->connect($dbhost, $dbuser, $dbpw, $dbname, $pconnect, $charset);
	}
	function connect($dbhost, $dbuser, $dbpw, $dbname, $pconnect = 0, $charset = 'utf-8') {
		$pconnect==0 ? @mysql_connect($dbhost, $dbuser, $dbpw) : @mysql_pconnect($dbhost, $dbuser, $dbpw);
		mysql_errno()!=0 && $this->halt("Connect($pconnect) to MySQL failed");
		if($this->server_info() > '4.1'){
			mysql_query("SET character_set_connection=" . $charset . ", character_set_results=". $charset .", character_set_client=binary");
		}
		if($this->server_info() > '5.0'){
			mysql_query("SET sql_mode=''");
		}
		if($dbname) {
			if (!@mysql_select_db($dbname)){
				$this->halt('Cannot use database');
			}
		}
	}
	function close() {
		return mysql_close();
	}
	function select_db($dbname){
		if (!@mysql_select_db($dbname)){
			$this->halt('Cannot use database');
		}
	}
	function server_info(){
		return mysql_get_server_info();
	}
	function query($SQL,$method='') {
		if($method=='U_B' && function_exists('mysql_unbuffered_query')){
			$query = mysql_unbuffered_query($SQL);
		}else{
			$query = mysql_query($SQL);
		}
		$this->query_num++;
		
		//echo $SQL.'<br>'.$this->query_num.'<br>';
		if (!$query) $this->halt('Query Error: ' . $SQL);
		return $query;
	}

	function get_one($SQL){

		$query=$this->query($SQL,'U_B');
		
		$rs =& mysql_fetch_array($query, MYSQL_ASSOC);

		return $rs;
	}

	function pw_update($SQL_1,$SQL_2,$SQL_3){
		$rt=$this->get_one($SQL_1);
		if($rt){
			$this->update($SQL_2);
		} else{
			$this->update($SQL_3);
		}
	}

	function update($SQL) {
		if(function_exists('mysql_unbuffered_query')){
			$query = mysql_unbuffered_query($SQL);
		}else{
			$query = mysql_query($SQL);
		}
		$this->query_num++;

		//echo $SQL.'<br>'.$this->query_num.'<br>';

		if (!$query)  $this->halt('Update Error: ' . $SQL);
		return $query;
	}

	function fetch_array($query, $result_type = MYSQL_ASSOC) {
		return mysql_fetch_array($query, $result_type);
	}

	function affected_rows() {
		return mysql_affected_rows();
	}

	function num_rows($query) {
		$rows = mysql_num_rows($query);
		return $rows;
	}

	function free_result($query) {
		return mysql_free_result($query);
	}

	function insert_id() {
		$id = mysql_insert_id();
		return $id;
	}

	function halt($msg='') {
		new DB_ERROR($msg);
	}
}

Class DB_ERROR {

	function DB_ERROR($msg) {

		$sqlerror = mysql_error();
		$sqlerrno = mysql_errno();

		echo"<html><head><title>Error</title><style type='text/css'>P,BODY{FONT-FAMILY:tahoma,arial,sans-serif;FONT-SIZE:11px;}A { TEXT-DECORATION: none;}a:hover{ text-decoration: underline;}TD { BORDER-RIGHT: 1px; BORDER-TOP: 0px; FONT-SIZE: 16pt; COLOR: #000000;}</style><body>\n\n";
		echo"<table style='TABLE-LAYOUT:fixed;WORD-WRAP: break-word'><tr><td>$msg";
		echo"<br><br><b>Error Happened!";
		echo"<br><br><b>MySQL Server Error</b>:<br>$sqlerror  ( $sqlerrno )";
		echo"</td></tr></table>";
		exit;
	}
}

?>