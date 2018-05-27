<?php $PROD = get_field('run_mode', 'option') === 'prod'; ?>
<?php @include 'manifest.php' ?>
<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>
    <link href="//www.google-analytics.com" rel="dns-prefetch">
    <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
    <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">
    <?php if ($PROD) { ?><link href="<?php echo get_template_directory_uri(); ?>/assets/<?php echo $manifest[0] ?>" rel="stylesheet"> <?php } ?>
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,900" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <script>
        const CONFIG = {
            THEME_DIR: '<?php echo get_template_directory_uri(); ?>'
        }
    </script>
    <?php wp_head(); ?>
</head>
<body>

<div id="app"></div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCeyiWxUHdOzxmEQGLBdI2BMYQAY7M0liw"></script>
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<?php if ($PROD) { ?>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/<?php echo $manifest[1] ?>"></script>
<?php } else { ?>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/main.js"></script>
<?php } ?>
<?php wp_footer(); ?>
</body>
</html>
