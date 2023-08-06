import PostList from '../posts/PostsList';
import classes from './FeaturedPosts.module.css';

const FeaturedPosts = ({ posts }) => {
	return (
		<section className={classes.latest}>
			<h2>Featured Posts</h2>
			<PostList posts={posts} />
		</section>
	);
};

export default FeaturedPosts;
