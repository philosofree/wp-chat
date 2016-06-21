<?php/* Start the session */
session_start();

/* Define how long the maximum amount of time the session can be inactive. */
define("MAX_IDLE_TIME", 3);

function getOnlineUsers(){

if ( $directory_handle = opendir( session_save_path() ) ) {
$count = 0;
while ( false !== ( $file = readdir( $directory_handle ) ) ) {
if($file != '.' && $file != '..'){
// Comment the 'if(...){' and '}' lines if you get a significant amount of traffic
if(time()- fileatime(session_save_path() . '\\' . $file) < MAX_IDLE_TIME * 60) {
$count++;
}
}
closedir($directory_handle);

return $count;

} else {
return false;
}

}

echo 'Number of online users: ' . getOnlineUsers() . '<br />';
?>
