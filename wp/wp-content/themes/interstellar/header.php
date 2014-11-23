<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('|', true, 'right'); ?> <?php bloginfo('name'); ?></title>
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

    <link href="<?php echo get_template_directory_uri(); ?>/style.css" rel="stylesheet" />

    <script type="text/javascript">
      var templateUrl = '<?= get_bloginfo("template_url"); ?>';
    </script>
    <?php wp_head(); ?>
  </head>
  <body>