<?php
/**
 * The Sidebar containing the program widget area.
 *
 * @package WordPress
 * @subpackage The_Barn
 * @since The Barn 1.0
 */
?>
<div id="sidebar" class="widget-area" role="complementary">
  <div class="sidebar-inner">
    <ul>
    <?php
      $focusAreas = get_posts("nopaging=1&post_type=focus-areas");
      foreach ($focusAreas as $focusArea):
        $subtitle = '';
        if($focusArea->post_name == 'discover-putney')
        $subtitle = '<span class="link-wrapper-subtitle">Grades 4-6</span>';
        ?>
        <li><a class="<?=$focusArea->post_name?>" href="<?=site_url()?>/focus-areas/<?=$focusArea->post_name?>/"><span class="link-parent text-upper"><?=$focusArea->post_title?></span><?=$subtitle?></a></li>
        <ul class="programs-group programs-group-all <?=$focusArea->post_name?>">
          <?php
            $gr_name = $focusArea->post_name;
            $ordered_post_list = get_posts("nopaging=1&meta_key=focus_area&meta_value={$focusArea->ID}&post_type=programs&orderby=title&order=ASC");
            foreach ($ordered_post_list as $post):
              echo "<li class='flex_display child-".$post->ID."'><a href=".esc_url(home_url('/')).'programs/'.$post->post_name."><img class='img-wrapper' src='".$imagelink."'><span class='link-wrapper'>".get_the_title()."</span>";
              if(get_post_meta($post->ID, 'unique_subtitle', true))
              echo "<span class='link-wrapper link-wrapper2'>".get_post_meta($post->ID, 'unique_subtitle', true)."</span>";
              echo "</a></li>";
            endforeach;
          ?>
        </ul>
      <?php endforeach; ?>
      <ul>
  </div>
</div><!-- #sidebar .widget-area -->
