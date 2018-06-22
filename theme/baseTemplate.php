<?php $PROD = get_field('run_mode', 'option') === 'prod'; ?>
<?php @include 'manifest.php' ?>
<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php wp_title(''); if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php if ($PROD) { ?><link href="<?php echo get_template_directory_uri(); ?>/assets/<?php echo $manifest[0] ?>?v=0.0.11" rel="stylesheet"> <?php } ?>
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,900" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo get_template_directory_uri(); ?>/img/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo get_template_directory_uri(); ?>/img/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/img/favicon/favicon-16x16.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <script>
        const CONFIG = {
            THEME_DIR: '<?php echo get_template_directory_uri(); ?>',
            SITE_NAME: '<?php bloginfo('name'); ?>'
        }
    </script>
</head>
<body>

<div id="app"></div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCeyiWxUHdOzxmEQGLBdI2BMYQAY7M0liw"></script>
<?php if ($PROD) { ?>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/<?php echo $manifest[1] ?>?v=0.0.11"></script>
<?php } else { ?>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/main.js"></script>
<?php } ?>
<?php wp_head(); ?>
<?php wp_footer(); ?>
</body>
</html>
