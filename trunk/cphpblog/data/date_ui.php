<?php
class UCDATE {
	var $m_lang = UD_EN;
	
	function UCDATE($p_lang)
	{
		 $this->m_lang = $p_lang;
	}
	
	var $FUN_month_names = array(	
								//EN
								UD_EN=>array(' ', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
								//CN
								UD_CN=>array(' ', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'),
								//JP
								UD_JP=>array(' ', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月')
								);

	var $FUN_week_names = array(
								//EN
								UD_EN=>array(' ', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'), 
								//CN
								UD_CN=>array(' ', '星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'),
								//JP
								UD_JP=>array(' ', '日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日')
								);

	var $FUN_month_type = array(
								//EN
								UD_EN=>' ',
								//CN
								UD_CN=>'月',
								//JP
								UD_JP=>'月'
								);

	var $FUN_year_type = array(
								//EN
								UD_EN=>' ',
								//CN
								UD_CN=>'年',
								//JP
								UD_JP=>'年'
								);

	var $FUN_day_type = array(
								//EN
								UD_EN=>' ',
								//CN
								UD_CN=>'日',
								//JP
								UD_JP=>'日'
								);

	public function get_full_date($year, $month, $day, $dofweek)
	{
		switch ($this->m_lang)
		{
			case UD_CN:
				return $year . $this->FUN_year_type[UD_CN] .  $month . $this->FUN_month_type[UD_CN] . $day . $this->FUN_day_type[UD_CN] . ' ' . $this->FUN_week_names[UD_CN][$dofweek];
			case UD_EN:
				return $this->FUN_week_names[UD_EN][$dofweek] . ', ' . $this->FUN_month_names[UD_EN][$month]  . ' ' . $day . ' ' . $year;
			case UD_JP:
				return $year . $this->FUN_year_type[UD_JP] .  $month . $this->FUN_month_type[UD_JP] . $day . $this->FUN_day_type[UD_JP] . ' ' . $this->FUN_week_names[UD_JP][$dofweek];
			default:
				return 'Date Pattern not found!';
		}
	}
	
	public function get_month_name($month)
	{
		$month = ltrim($month, '0');

		return $this->FUN_month_names[$this->m_lang][$month];
	}
	
	public function get_yearmonth_name($yearmonth)
	{
		if($yearmonth == -1)
		{
			return 'WRONG';
		}
		
		$year = substr($yearmonth, 0, 4);
		$month = ltrim(substr($yearmonth, 4, 2), '0');

		switch ($this->m_lang)
		{
			case UD_CN:
				return $year . $this->FUN_year_type[UD_CN] .  $month . $this->FUN_month_type[UD_CN];
			case UD_EN:
				return $this->FUN_month_names[UD_EN][$month]  . ' ' . $year;
			case UD_JP:
				return $year . $this->FUN_year_type[UD_JP] .  $month . $this->FUN_month_type[UD_JP];
			default:
				return 'Date Pattern not found!';
		}
	}
}
?>