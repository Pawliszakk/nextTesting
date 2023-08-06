import classes from './AllPosts.module.css';
import PostList from './PostsList';

const AllPosts = ({ posts }) => {
	return (
		<section className={classes.post}>
			<h1>All Posts</h1>
			<PostList posts={posts} />
		</section>
	);
};

export default AllPosts;
