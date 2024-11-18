<?php
function d1_connection() {
    global $wpdb;
    $wpdb->d1 = true;
}
add_action('init', 'd1_connection');
