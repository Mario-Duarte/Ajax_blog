# WP Ajax Blog

Wordpress plugin that loads posts dynamivly using [Ajax] (http://api.jquery.com/jquery.ajax/), this plugin takes advantage of the way that Wordpress works making it really light wight. 

### Dependencies

- [WordPress] (https://wordpress.org/)
- [Jquery] (https://jquery.com/download/)

## Usage

On your main posts page just add in a ```<div>``` wrapping your WordPress loop with the class ```.post-wrapper``` and add your pagination as normal after the while loop.

```php
<div class="posts-wrapper">
  <?php 
    $paged = $_GET['pagedNum'];
		$limit = get_option('posts_per_page');



		if(!isset($paged)|| $paged ==1){
			$limit -= 1;
			$offset = 0;
		}
		else{
			$offset = ($limit-1)*($paged-1);
		}

    $args = array(
      'showposts' => $limit,
      'offset' => $offset
    );
    $wp_query = new WP_Query(); $wp_query->query($args);
    while ($wp_query->have_posts()) : $wp_query->the_post(); 
  ?>

    <article>
        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <?php the_excerpt(); ?>
      </div>
    </article>

  <?php endwhile; ?> <!-- End While Loop -->
  <?php previous_posts_link( 'Previous', $cpt_query->max_num_pages) ?>
  <?php next_posts_link( 'Load More', $cpt_query->max_num_pages); ?>

    </div> <!-- end posts-wrapper -->
  <?php wp_reset_postdata(); ?>
```
A class ```.btn-load-more-posts``` is added to the ```next_post_link``` and a class ```.previous-post``` to the ```previous_post_link`` these have basic css aplied to them and can be easly over written on your theme style.

Currently the javascript only fires if it detects the class ```.blog``` on the body tag, so please make sure you loading the ```body_class();```  function on the body tag of your theme, not sure how to do this, check the [WordPress Documentation] (https://developer.wordpress.org/reference/functions/body_class/), this can be removed or changed in the load-posts.js file.  

If you feel brave these can also be modified in the plugin too.
