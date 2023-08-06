import classes from './PostList.module.css';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
	return (
		<ul className={classes.grid}>
			{posts.map((post) => (
				<PostItem
					key={post.slug}
					image={post.image}
					title={post.title}
					excerpt={post.excerpt}
					date={post.date}
					slug={post.slug}
				/>
			))}
		</ul>
	);
};

export default PostList;
