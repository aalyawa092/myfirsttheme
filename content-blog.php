<?php if(have_posts()) :?>
	<?php while(have_posts()) : the_post()?>
		<h2><a href="<?php the_permalink()?>"><?php the_title()?></a></h2>
		<div class="meta">
			<span class="author">by <?php echo the_author()?></span>
			<span class="date">Published on<?php the_time(get_option('date_format'))?></span>
			<span class="coments"><?php comments_number( 'no comments')?></span>
		</div>
		<div class="story-content">
			<?php the_content()?>
		</div>
	<?php endwhile ?>
<?php endif?>