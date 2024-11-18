<?php
function neon_database_setup() {
    global $wpdb;
    
    // Optimize database connection
    $wpdb->query("SET SESSION sql_mode = ''");
    $wpdb->query("SET NAMES 'utf8'");
    
    // Enable prepared statements
    $wpdb->prepare_enable = true;
    
    // Set up caching
    if (!defined('WP_CACHE')) {
        define('WP_CACHE', true);
    }
}
add_action('init', 'neon_database_setup');

// Performance optimizations
function performance_optimizations() {
    if (!is_admin()) {
        wp_deregister_script('jquery');
        wp_register_script('jquery', false);
    }
}
add_action('wp_enqueue_scripts', 'performance_optimizations');

// Security headers
function security_headers() {
    header('X-Frame-Options: SAMEORIGIN');
    header('X-XSS-Protection: 1; mode=block');
    header('X-Content-Type-Options: nosniff');
}
add_action('send_headers', 'security_headers');
