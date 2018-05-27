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

if ( function_exists('acf_add_local_field_group') ):

    acf_add_local_field_group(array(
        'key' => 'group_5afe0b401993e',
        'title' => 'Contact Us',
        'fields' => array(
            array(
                'key' => 'field_5afe0ba0ad5a1',
                'label' => 'Introduction',
                'name' => 'description',
                'type' => 'wysiwyg',
                'instructions' => '',
                'required' => 1,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => 'We want to hear from you. Please send us an inquiry with the following form and we will get back to you as soon as we can. Alternatively, you can contact us.',
                'tabs' => 'all',
                'toolbar' => 'full',
                'media_upload' => 0,
                'delay' => 0,
            ),
            array(
                'key' => 'field_5afe0c92ad5a2',
                'label' => 'Contact Details',
                'name' => 'types',
                'type' => 'repeater',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'collapsed' => '',
                'min' => 0,
                'max' => 0,
                'layout' => 'table',
                'button_label' => '',
                'sub_fields' => array(
                    array(
                        'key' => 'field_5afe0da8ad5a3',
                        'label' => 'type',
                        'name' => 'type',
                        'type' => 'select',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'choices' => array(
                            'tel' => 'Telephone',
                            'mailto' => 'Email',
                        ),
                        'default_value' => array(
                        ),
                        'allow_null' => 0,
                        'multiple' => 0,
                        'ui' => 0,
                        'ajax' => 0,
                        'return_format' => 'value',
                        'placeholder' => '',
                    ),
                    array(
                        'key' => 'field_5afe0e10ad5a4',
                        'label' => 'Name',
                        'name' => 'label',
                        'type' => 'text',
                        'instructions' => 'Describe your contact detail, e.g. "Work Phone"',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'default_value' => '',
                        'placeholder' => '',
                        'prepend' => '',
                        'append' => '',
                        'maxlength' => '',
                    ),
                    array(
                        'key' => 'field_5afe0e2bad5a5',
                        'label' => 'Detail',
                        'name' => 'detail',
                        'type' => 'text',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'default_value' => '',
                        'placeholder' => 'Email or phone number',
                        'prepend' => '',
                        'append' => '',
                        'maxlength' => '',
                    ),
                ),
            ),
            array(
                'key' => 'field_5afe0e9bad5a6',
                'label' => 'First Name Placeholder',
                'name' => 'firstNamePlaceholder',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ),
            array(
                'key' => 'field_5afe0eb7ad5a7',
                'label' => 'Last Name Placeholder',
                'name' => 'lastNamePlaceholder',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ),
            array(
                'key' => 'field_5afe0ee6ad5a8',
                'label' => 'Email Placeholder',
                'name' => 'emailPlaceholder',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ),
            array(
                'key' => 'field_5afe0f22ad5a9',
                'label' => 'Phone Placeholder',
                'name' => 'phonePlaceholder',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ),
            array(
                'key' => 'field_5afe0f4476b65',
                'label' => 'Submit Button Label',
                'name' => 'submitButtonLabel',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'page_template',
                    'operator' => '==',
                    'value' => 'contact-us.php',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'seamless',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => array(
            0 => 'the_content',
            1 => 'page_attributes',
            2 => 'categories',
        ),
        'active' => 1,
        'description' => '',
    ));

    acf_add_local_field_group(array(
        'key' => 'group_5afeb3bfd017d',
        'title' => 'Frequently Asked Questions',
        'fields' => array(
            array(
                'key' => 'field_5afeb3e8c0800',
                'label' => 'Frequently Asked Questions',
                'name' => 'faqs',
                'type' => 'repeater',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'collapsed' => '',
                'min' => 0,
                'max' => 0,
                'layout' => 'table',
                'button_label' => '',
                'sub_fields' => array(
                    array(
                        'key' => 'field_5afeb440c0801',
                        'label' => 'Title',
                        'name' => 'title',
                        'type' => 'text',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'default_value' => '',
                        'placeholder' => '',
                        'prepend' => '',
                        'append' => '',
                        'maxlength' => '',
                    ),
                    array(
                        'key' => 'field_5afeb4c5c0802',
                        'label' => 'Content',
                        'name' => 'content',
                        'type' => 'wysiwyg',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'default_value' => '',
                        'tabs' => 'all',
                        'toolbar' => 'full',
                        'media_upload' => 1,
                        'delay' => 0,
                    ),
                ),
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'page_template',
                    'operator' => '==',
                    'value' => 'faq.php',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => array(
            0 => 'the_content',
            1 => 'excerpt',
            2 => 'custom_fields',
        ),
        'active' => 1,
        'description' => '',
    ));

    acf_add_local_field_group(array(
        'key' => 'group_5afe0b3349511',
        'title' => 'Home Page',
        'location' => array(
            array(
                array(
                    'param' => 'page_template',
                    'operator' => '==',
                    'value' => 'home.php',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'acf_after_title',
        'style' => 'seamless',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => array(
            0 => 'slug',
        ),
        'active' => 1,
        'description' => '',
    ));

    acf_add_local_field_group(array(
        'key' => 'group_5afe0b334e7bc',
        'title' => 'News Entry',
        'fields' => array(
            array(
                'key' => 'field_5afcedbef768d',
                'label' => 'Date',
                'name' => 'date',
                'type' => 'date_picker',
                'instructions' => 'Pick a date',
                'required' => 1,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'first_day' => 1,
                'return_format' => 'd/m/Y',
                'display_format' => 'd/F/Y',
                'save_format' => 'yy,MM,dd',
            ),
            array(
                'key' => 'field_5afcee9df768e',
                'label' => 'Description',
                'name' => 'description',
                'type' => 'wysiwyg',
                'instructions' => 'This appears under the date in the white box.',
                'required' => 1,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'toolbar' => 'full',
                'media_upload' => 1,
                'tabs' => 'all',
                'delay' => 0,
            ),
            array(
                'key' => 'field_5afcf17a0eacd',
                'label' => 'Caption',
                'name' => 'caption',
                'type' => 'wysiwyg',
                'instructions' => 'Appears in the black box on the side',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'toolbar' => 'full',
                'media_upload' => 1,
                'tabs' => 'all',
                'delay' => 0,
            ),
            array(
                'key' => 'field_5afd0af29e30e',
                'label' => 'Desktop Banner Image',
                'name' => 'desktopBannerImage',
                'type' => 'image',
                'instructions' => 'The field will overwrite the default banner image',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'return_format' => 'array',
                'min_width' => 0,
                'min_height' => 0,
                'min_size' => 0,
                'max_width' => 0,
                'max_height' => 0,
                'max_size' => 0,
                'mime_types' => '',
            ),
            array(
                'key' => 'field_5afd0da7ed65d',
                'label' => 'Mobile Banner Image',
                'name' => 'mobileBannerImage',
                'type' => 'image',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'return_format' => 'array',
                'min_width' => 0,
                'min_height' => 0,
                'min_size' => 0,
                'max_width' => 0,
                'max_height' => 0,
                'max_size' => 0,
                'mime_types' => '',
            ),
            array(
                'key' => 'field_5afd203dbd6c6',
                'label' => 'Form Title',
                'name' => 'formTitle',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'formatting' => 'none',
                'maxlength' => '',
            ),
            array(
                'key' => 'field_5afd20c274245',
                'label' => 'First Name Place Holder',
                'name' => 'firstNamePlaceholder',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'formatting' => 'none',
                'maxlength' => '',
            ),
            array(
                'key' => 'field_5afd20c474246',
                'label' => 'Last Name Place Holder',
                'name' => 'lastNamePlaceholder',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'formatting' => 'none',
                'maxlength' => '',
            ),
            array(
                'key' => 'field_5afd20c574247',
                'label' => 'Email Placeholder',
                'name' => 'emailPlaceholder',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'formatting' => 'none',
                'maxlength' => '',
            ),
            array(
                'key' => 'field_5afd20c774248',
                'label' => 'Submit Button',
                'name' => 'submitButton',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'formatting' => 'html',
                'maxlength' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'page_template',
                    'operator' => '==',
                    'value' => 'news-item.php',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'acf_after_title',
        'style' => 'seamless',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => 1,
        'description' => '',
    ));

endif;

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
