<?php
$GLB_is_static = TRUE;

//Generate Index.html
ob_start();
require_once('index.php');
$content = ob_get_contents();
$fp = fopen('index_static.html', 'w');
fwrite($fp, $content);
fclose($fp);
ob_end_clean();

?>