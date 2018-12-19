<?php
	if ( ! is_active_sidebar( 'sidebar-2' ) && ! is_active_sidebar( 'sidebar-3' ) && ! is_active_sidebar( 'sidebar-4' ) && ! is_active_sidebar( 'sidebar-5' ) )
		return;
?>

<div id="footer-widgets" class="clearfix">
<?php
	$footer_sidebars = array( 'sidebar-2', 'sidebar-3', 'sidebar-4', 'sidebar-5', 'sidebar-6' );

	foreach ( $footer_sidebars as $key => $footer_sidebar ) :
		if ( is_active_sidebar( $footer_sidebar ) ) :
			echo '<div class="widget widget-'.$key . ( 4 === $key ? ' last' : '' ) . ' fl text-left">';
			dynamic_sidebar( $footer_sidebar );
			echo '</div> <!-- end .footer-widget -->';
		endif;
	endforeach;
?>
  <div class="clearfix"></div>
  <?php
    if ( is_active_sidebar( 'sidebar-7' ) ) :
      echo '<div class="widget widget-bottom flr text-left">';
      dynamic_sidebar( 'sidebar-7' );
      echo '</div> <!-- end .footer-widget -->';
    endif;
  ?>
</div> <!-- #footer-widgets -->
