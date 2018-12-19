
<?php if ( 'on' == et_get_option( 'divi_back_to_top', 'false' ) ) : ?>
		<span class="et_pb_scroll_top et-pb-icon"></span>
<?php endif;

if ( ! is_page_template( 'page-template-blank.php' ) ) : ?>

			<footer id="main-footer">

        <div class="container">
          <div id="widget_search_top" class="widget_search hide">
            <?php echo get_search_form();?>
          </div>
    			<?php get_sidebar( 'footer' ); ?>
      		<?php
      			if ( has_nav_menu( 'footer-menu' ) ) : ?>

      				<div id="et-footer-nav">
        				<?php
        					wp_nav_menu( array(
        						'theme_location' => 'footer-menu',
        						'depth'          => '1',
        						'menu_class'     => 'bottom-nav',
        						'container'      => '',
        						'fallback_cb'    => '',
        					) );
        				?>
      				</div> <!-- #et-footer-nav -->

      			<?php endif; ?>

            <?php if ( !wp_is_mobile() ) {echo do_shortcode('[instagram-feed num=12 cols=6 showcaption=false showlikes=false]'); }?>

         </div> <!-- #page-container -->

			</footer> <!-- #main-footer -->

      </div> <!-- #main-content -->


		</div> <!-- #et-main-area -->

<?php endif; // ! is_page_template( 'page-template-blank.php' ) ?>

	</div> <!-- #page-container -->

	<?php wp_footer(); ?>
</body>
</html>
