<?php
/*-----------------------------------------------------------------------------------*/
/* Nav End Point
/*-----------------------------------------------------------------------------------*/

register_nav_menus( array(
    'primary' => __( 'Primary Navigation', 'primary-navigation' )
) );

function get_menu() {
    # Change 'menu' to your own navigation slug.
    // wordpress does not group child menu items with parent menu items
    return wp_get_nav_menu_items("primary-navigation");
    $child_items = [];
    // pull all child menu items into separate object
    foreach ($navbar_items as $key => $item) if ($item->menu_item_parent) {
        array_push($child_items, $item);
        unset($navbar_items[$key]);
    }
    // push child items into their parent item in the original object
    foreach ($navbar_items as $item)
        foreach ($child_items as $key => $child)
            if ($child->menu_item_parent == $item->post_name) {
                if (!$item->child_items) $item->child_items = [];
                array_push($item->child_items, $child);
                unset($child_items[$key]);
            }
    // return navbar object where child items are grouped with parents
     $navbar_items;
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'api', '/menu', array(
        'methods' => 'GET',
        'callback' => 'get_menu',
    ) );
} );


/*-----------------------------------------------------------------------------------*/
/* Remove Unwanted Admin Menu Items */
/*-----------------------------------------------------------------------------------*/

function remove_admin_menu_items() {
    $remove_menu_items = array(__('Comments', 'Posts', 'CPT UI'));
    global $menu;
    end ($menu);
    while (prev($menu)){
        $item = explode(' ',$menu[key($menu)][0]);
        if(in_array($item[0] != NULL?$item[0]:"" , $remove_menu_items)){
            unset($menu[key($menu)]);}
    }
}

add_action('admin_menu', 'remove_admin_menu_items');

/*-----------------------------------------------------------------------------------*/
/* Advanced Custom Fields
/*-----------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/* Required Plugins
/*-----------------------------------------------------------------------------------*/

require_once dirname( __FILE__ ) . '/libs/TGMPA-TGM-Plugin-Activation-afccf1e/class-tgm-plugin-activation.php';

add_action( 'tgmpa_register', 'my_theme_register_required_plugins' );

/**
 * Register the required plugins for this theme.
 *
 *  <snip />
 *
 * This function is hooked into tgmpa_init, which is fired within the
 * TGM_Plugin_Activation class constructor.
 */
function my_theme_register_required_plugins() {
    /*
     * Array of plugin arrays. Required keys are name and slug.
     * If the source is NOT from the .org repo, then source is also required.
     */
    $plugins = array(

        // This is an example of how to include a plugin bundled with a theme.
        array(
            'name'               => 'Advanced Custom Fields PRO', // The plugin name.
            'slug'               => 'advanced-custom-fields-pro', // The plugin slug (typically the folder name).
            'source'             => get_stylesheet_directory() . '/plugins/advanced-custom-fields-pro.zip', // The plugin source.
            'required'           => true, // If false, the plugin is only 'recommended' instead of required.
            'version'            => '5.6.10', // E.g. 1.0.0. If set, the active plugin must be this version or higher. If the plugin version is higher than the plugin version installed, the user will be notified to update the plugin.
            'force_activation'   => true, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
            'force_deactivation' => true, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins.
        ),

        // This is an example of how to include a plugin from the WordPress Plugin Repository.
        array(
            'name'      => 'ACF to REST API',
            'slug'      => 'acf-to-rest-api',
            'required'  => true,
        ),

        array(
            'name'      => 'Adminimize',
            'slug'      => 'adminimize',
            'required'  => false,
        ),

        array(
            'name'      => 'Contact Form 7',
            'slug'      => 'contact-form-7',
            'required'  => false,
        )

        // <snip />
    );

    /*
     * Array of configuration settings. Amend each line as needed.
     *
     * TGMPA will start providing localized text strings soon. If you already have translations of our standard
     * strings available, please help us make TGMPA even better by giving us access to these translations or by
     * sending in a pull-request with .po file(s) with the translations.
     *
     * Only uncomment the strings in the config array if you want to customize the strings.
     */
    $config = array(
        'id'           => 'tgmpa',                 // Unique ID for hashing notices for multiple instances of TGMPA.
        'default_path' => '',                      // Default absolute path to bundled plugins.
        'menu'         => 'tgmpa-install-plugins', // Menu slug.
        'parent_slug'  => 'themes.php',            // Parent menu slug.
        'capability'   => 'edit_theme_options',    // Capability needed to view plugin install page, should be a capability associated with the parent menu used.
        'has_notices'  => true,                    // Show admin notices or not.
        'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
        'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
        'is_automatic' => false,                   // Automatically activate plugins after installation or not.
        'message'      => '',                      // Message to output right before the plugins table.
        /*
        'strings'      => array(
            'page_title'                      => __( 'Install Required Plugins', 'theme-slug' ),
            'menu_title'                      => __( 'Install Plugins', 'theme-slug' ),
            // <snip>...</snip>
            'nag_type'                        => 'updated', // Determines admin notice type - can only be 'updated', 'update-nag' or 'error'.
        )
        */
    );

    tgmpa( $plugins, $config );

}

/*-----------------------------------------------------------------------------------*/
/* Options Page
/*-----------------------------------------------------------------------------------*/


if( function_exists('acf_add_options_page') ) {
    acf_add_options_page();
}

/*
 * Google Maps key
 */

function my_acf_google_map_api( $api ){
    $api['key'] = 'AIzaSyCeyiWxUHdOzxmEQGLBdI2BMYQAY7M0liw';
    return $api;
}

add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');
