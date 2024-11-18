<?php
function neon_connection() {
    global $wpdb;
    $wpdb->neon = true;
    
    // Add Neon-specific optimizations
    $wpdb->query("SET SESSION sql_mode = ''");
    $wpdb->query("SET NAMES 'utf8'");
}
add_action('init', 'neon_connection');

// Add caching support
function enable_page_caching() {
    if (!is_admin()) {
        define('WP_CACHE', true);
    }
}
add_action('init', 'enable_page_caching');

