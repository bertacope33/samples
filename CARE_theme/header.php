<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage blankSlate
 * @since blankSlate 3.5
 */
?><!DOCTYPE html>

<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" <?php language_attributes(); ?>> <![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->

<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="description" content="<?php bloginfo( 'description' ); ?>">
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page">
	<div id="masthead" class="site-header" role="banner">
			<h1 class="logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="index">2014 Care Contest</a></h1>

			<div class="socialNav">
				<ul>
					<li><a href="https://www.facebook.com/pages/Forest-City-CARE-Contest/288167728053806" target="_blank"><div class="CAREFacebook"></div></a></li>
					<li><a href="http://www.pinterest.com/fccarecontest/" target="_blank"><div class="CAREPinterest"></div></a></li>
					<li><a href="https://twitter.com/FCCAREContest" target="_blank"><div class="CARETwitter"></div></a></li>
					<li><a href="http://instagram.com/fccarecontest" target="_blank"><div class="CAREInstagram"></div></a></li>
					<li><a href="https://plus.google.com/b/107960126035523422695/107960126035523422695/posts/p/pub" target="_blank"><div class="CAREGooglePlus"></div></a></li>
					<li><a href="https://www.youtube.com/channel/UCGXvCAqjz28eTfjHS8DQBfg" target="_blank"><div class="CAREYouTube"></div></a></li>
				</ul>
			</div>

		<div id="site-navigation" class="main-navigation" role="navigation">
			<a class="assistive-text" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentytwelve' ); ?>"><?php _e( 'Skip to content', 'twentytwelve' ); ?></a>
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
		</div><!-- #site-navigation -->

		<div id="convoBlurb">
		</div>

		<div id="slideshow"><?php do_action('slideshow_deploy', '475'); ?></div>


	</div><!-- #masthead -->

	<div id="main" class="wrapper">