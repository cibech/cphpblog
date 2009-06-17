<?php
function us_get_full_date($year, $month, $day, $dofweek, $type = UD_EN)
{
	$FUN_month_names = array(	//EN
								array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
								//CN
								array('一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'),
								//JP
								array('一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月')
						);

	$FUN_week_names = array(
								//EN
								array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'), 
								//CN
								array('星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'),
								//JP
								array('日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日')		
								);

	$FUN_month_type = array(
								//EN
								' ',
								//CN
								'月',
								//JP
								'月'		
							);

	$FUN_year_type = array(
								//EN
								' ',
								//CN
								'年',
								//JP
								'年',
							);

	$FUN_day_type = array(
								//EN
								' ',
								//CN
								'日',
								//JP
								'日',
							);
		
	switch ($type)
	{
		case UD_CN:
			return $year . $FUN_year_type[UD_CN] .  $month . $FUN_month_type[UD_CN] . $day . $FUN_day_type[UD_CN] . ' ' . $FUN_week_names[UD_CN][$dofweek];
		case UD_EN:
			return $FUN_week_names[UD_EN][$dofweek] . ', ' . $FUN_month_names[UD_EN][$month]  . ' ' . $day . ' ' . $year;
		case UD_JP:
			return $year . $FUN_year_type[UD_JP] .  $month . $FUN_month_type[UD_JP] . $day . $FUN_day_type[UD_JP] . ' ' . $FUN_week_names[UD_JP][$dofweek];
		default:
			return 'Date Pattern not found!';
	}
}
?>