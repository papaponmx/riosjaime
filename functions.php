<?php

function theme_styles () {


//  wp_enqueue_style( 'normalize_css',   'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css' );
  wp_enqueue_style( 'bootstrap_css', get_template_directory_uri() . '/css/bootstrap.min.css' );
  //wp_enqueue_style( 'animate_css', get_template_directory_uri() . '/css/animate.min.css');
  wp_enqueue_style( 'creative_css', get_template_directory_uri() . '/css/creative.css');
  wp_enqueue_style( 'style_css', get_template_directory_uri() . '/style.css');

};

function theme_js () {

  global $wp_scripts;

  wp_register_script ( 'html5_shiv' , 'https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js', '', '', false);
  wp_register_script ( 'respond_js' , 'https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js', '', '', false);

      $wp_scripts->add_data( 'html5_shiv', 'conditional', 'lt IE 9');
      $wp_scripts->add_data( 'respond_js', 'conditional', 'lt IE 9');

      wp_enqueue_script('jquery_js', get_template_directory_uri() . '/js/jquery.js', '', '', true );
      wp_enqueue_script('bootstrap_js', get_template_directory_uri() . '/js/bootstrap.min.js', '', '', true );

      //Those are the plugins

      wp_enqueue_script('theme_js', get_template_directory_uri() . '/js/theme.js', '', '', true );
      wp_enqueue_script('creative_js', get_template_directory_uri() . '/js/creative.js', '', '', true );
      wp_enqueue_script('classie_js', get_template_directory_uri() . '/js/classie.js', '', '', true );


};

add_action('wp_enqueue_scripts', 'theme_js');
add_action( 'wp_enqueue_scripts', 'theme_styles' );
add_theme_support( 'menus' );
add_theme_support( 'post-thumbnails' );


  function register_theme_menus () {

    register_nav_menus (
    array (
     'header-menu' => __('Header Menu')
    )
  );
}

add_action ('init', 'register_theme_menus');








 ?>
