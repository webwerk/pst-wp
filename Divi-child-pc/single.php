<?php

get_header();

$show_default_title = get_post_meta( get_the_ID(), '_et_pb_show_title', true );

$is_page_builder_used = et_pb_is_pagebuilder_used( get_the_ID() );

?>

<div id="main-content">
	<div class="container">
		<div id="content-area" class="clearfix">
			<div id="left-area">
        <div id="content" class="content-wrapper" role="main">
  			<?php while ( have_posts() ) : the_post(); ?>
  				<article id="post-<?php the_ID(); ?>" <?php post_class( 'et_pb_post' . $additional_class ); ?>>
  						<div class="post_meta_wrapper">
  							<h1 class="entry-title"><?php the_title(); ?></h1>

                  <div class="entry-content">
                  <?php
                  	do_action( 'et_before_content' );

                  	the_content();

                  	wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'Divi' ), 'after' => '</div>' ) );
                  ?>
                  </div> <!-- .entry-content -->
                  <div class="et_post_meta_wrapper">
                  <?php
                  if ( et_get_option('divi_468_enable') == 'on' ){
                  	echo '<div class="et-single-post-ad">';
                  	if ( et_get_option('divi_468_adsense') <> '' ) echo( et_get_option('divi_468_adsense') );
                  	else { ?>
                  		<a href="<?php echo esc_url(et_get_option('divi_468_url')); ?>"><img src="<?php echo esc_attr(et_get_option('divi_468_image')); ?>" alt="468" class="foursixeight" /></a>
                  <?php 	}
                  	echo '</div> <!-- .et-single-post-ad -->';
                  }
                  ?>

                <div id="focus-<?php echo $post->post_name?>" class="focus-area-block">
                  <?php
                  $programs = get_posts("nopaging=1&post_type=programs&meta_key=focus_area&meta_value={$post->ID}&orderby=title&order=ASC");
                  if(count($programs)):
                    foreach ($programs as $program):
                    include dirname(__FILE__).'/includes/phpf/program-block.php';
                    endforeach;
                  endif;
                  ?>
                </div>

  					</div> <!-- .et_post_meta_wrapper -->
  				</article> <!-- .et_pb_post -->

  			<?php endwhile; ?>

        </div>

			</div> <!-- #left-area -->

      <?php if ($post->post_type != 'post'): ?>
        <?php get_sidebar('programs'); ?>
      <?php else: ?>
        <?php get_sidebar(); ?>
      <?php endif ?>

		</div> <!-- #content-area -->
	</div> <!-- .container -->
</div> <!-- #main-content -->

<?php get_footer(); ?>
