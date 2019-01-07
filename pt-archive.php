<?php

/**
 * The template for displaying the post archive
 * Template Name: Archive
 */

global $paged;

if (!isset($paged) || !$paged) {
  $paged = 1;
}

$context = Timber::get_context();
$context['post'] = new Timber\Post();

// List most the 5 most recent blog posts
$recent_posts = array(
  'post_type'       => 'post',
  'post_status'     => 'publish',
  'order'           => '',
  'posts_per_page'  => 3,
  'orderby'         => 'date'
);

// Get the post IDs to be excluded from the second query
$recent_posts_query = new WP_Query( $recent_posts );
$excludeIds = join( ',', wp_list_pluck( $recent_posts_query->posts, 'ID' ) );
$excludeIdsArr = explode(',', $excludeIds);

// List the rest of the blog posts, excluding the most recent 5 from the first query
$other_posts = array(
  'post_type'       => 'post',
  'post_status'     => 'publish',
  'posts_per_page'  => 7,
  'paged'           => $paged,
  'post__not_in'    => $excludeIdsArr
);

$context['recent_posts'] = new Timber\PostQuery($recent_posts);
$context['other_posts'] = new Timber\PostQuery($other_posts);
$context['post'] = new Timber\Post();

Timber::render( 'templates/archive.twig', $context);
