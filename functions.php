<?php
// Register a single navi menu, to be 
// consturcted in the admin panel, and
// displayed in nav.php
register_nav_menus(array(
	'primary' => 'Primary Navigation'
));

function disturbed_comment_form() {
	global $post;
	?>
	<form method="post" action="<?php bloginfo('url');?>/wp-comments-post.php">
	
	<input type="hidden" name="comment_post_ID" value=<?php echo $post->id ?>/>
	<input type="hidden" name="comment_parent" id="comment_parent" value="0"/>
	
	<input name="author" type="text"/> 
	<input name="email" type="text"/> 
	<input name="website" type="text"/> 
	
	<textarea name="comment"></textarea>
	<input name="submit" type="submit" value="Post Comment"/>
	</form>
	<?php 
}
?>