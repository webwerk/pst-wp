<?php
function et_divi_child_pc_load_scripts_styles(){

	$theme_version = et_get_theme_version();

	$stylesheet_dir = get_stylesheet_directory_uri();

	wp_enqueue_style( 'divi-child-pc-custom', $stylesheet_dir . '/css/custom.css', array(), '');

	wp_enqueue_script( 'divi-child-pc-script', $stylesheet_dir . '/js/custom.js', array('jquery'), $theme_version, true );
}

add_action( 'wp_enqueue_scripts', 'et_divi_child_pc_load_scripts_styles' );

?>
