<?php
/**
 * Plugin Name: WP Ajax Blog
 * Description: Wordpress load the next page of posts dynamicly with ajax
 * Version: 1.0
 * Author: Mário Duarte
 *License: Creative Commons
 */

function ajax_blog_init() {
  wp_enqueue_script('ajax-load-posts', plugin_dir_url( __FILE__ ) . 'js/load-posts.js', array('jquery'), null, true);
  wp_enqueue_style('ajax-load-posts-style', plugin_dir_url( __FILE__ ) . '/css/load-posts.css', null, null, "screen");
}
add_action('wp_enqueue_scripts', 'ajax_blog_init');

function posts_link_attributes_next() {
    return 'class="js-load-more-posts btn-load-more-posts"';
}
add_filter('next_posts_link_attributes', 'posts_link_attributes_next');
function posts_link_attributes_prev() {
    return 'class="previus-posts"';
}
add_filter('previous_posts_link_attributes', 'posts_link_attributes_prev');
 ?>
