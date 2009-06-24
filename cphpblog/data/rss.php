<?php

class Rss{

	var $rssHeader;
	var $rssChannel;
	var $rssItem;

	function Rss($Rss=array('xml'=>"1.0",'rss'=>"2.0",'encoding'=>"utf8")){

		$this->rssHeader  = "<?xml version=\"$Rss[xml]\" encoding=\"$Rss[encoding]\"?>";
		$this->rssHeader .= "<rss xmlns:atom=\"http://www.w3.org/2005/Atom\" xmlns:openSearch=\"http://a9.com/-/spec/opensearchrss/1.0/\" xmlns:georss=\"http://www.georss.org/georss\" version=\"$Rss[rss]\">";
	}

	function channel($channel){

		$this->rssChannel  = "<channel>";
		foreach($channel as $key => $value){
			$this->rssChannel .= "<$key>$value</$key>";
		}
	}

	function item($item){

		$this->rssItem .= "<item>";

		foreach($item as $key => $value){
			$this->rssItem .="<$key>$value</$key>";
		}
		$this->rssItem .= "</item>";
	}

	function generate($rss_path){
		
		$all = $this->rssHeader;
		$all .= $this->rssChannel;
		$all .= $this->rssItem;
		$all .= "</channel></rss>";
		$fp = fopen($rss_path, 'w');
		fwrite($fp, $all);
		fclose($fp);
	}
}
?>