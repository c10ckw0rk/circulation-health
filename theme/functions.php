<?php

/*-----------------------------------------------------------------------------------*/
/* Nav End Point
/*-----------------------------------------------------------------------------------*/

function get_menu() {
    # Change 'menu' to your own navigation slug.
    return wp_get_nav_menu_items('primary-navigation');
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
    $remove_menu_items = array(__('Posts', 'CPT UI'));
    global $menu;
    end ($menu);
    while (prev($menu)){
        $item = explode(' ',$menu[key($menu)][0]);
        if(in_array($item[0] != NULL?$item[0]:"" , $remove_menu_items)){
            unset($menu[key($menu)]);}
    }
}

add_action('admin_menu', 'remove_admin_menu_items');
