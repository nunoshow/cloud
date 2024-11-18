<?php
// Basic database connection
function setup_neon_connection() {
    global $wpdb;
    $wpdb->query("SET NAMES 'utf8'");
}
add_action('init', 'setup_neon_connection');

// Simple caching
function enable_basic_cache() {
    define('WP_CACHE', true);
}
add_action('init', 'enable_basic_cache');
