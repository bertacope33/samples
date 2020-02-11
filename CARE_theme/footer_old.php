<?php
/**
 * The template for displaying the footer.
 *
 * Contains footer content and the closing of the
 * #main and #page div elements.
 *
 * @package WordPress
 * @subpackage blankSlate
 * @since blankSlate 3.5
 */
?>
	</div><!-- #main .wrapper -->
	<div id="footer">

			<ul>
				<li><a href="mailto:exceptionalservice@forestcity.net?Subject=Forest%20City%20Cares%20Submission" target="_top"><div class="contact"></div></a></li>
				<li><a href="https://mainstreet.forestcity.net/neighborhood/CoreValues/community-relations/Community_Initiatives/CARE/Pages/CareHomePage.aspx" target="_blank"><div class="resources"></div></a></li>
				<li><a href="http://www.pinterest.com/fccarecontest/" target="_blank"><div class="eventPhotos"></div></a></li>
				<li><a href="#" target="_blank"><div class="journal"></div></a></li>
			</ul>

			<div class=footerLogo></div>

		<p>
			<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'twentytwelve' ) ); ?>" title="<?php esc_attr_e( 'Semantic Personal Publishing Platform', 'twentytwelve' ); ?>"><?php printf( __( 'Proudly powered by %s', 'twentytwelve' ), 'WordPress' ); ?></a>
		<p>

	</div>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>