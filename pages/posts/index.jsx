import Head from 'next/head';
import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/post-util';

const AllPostsPage = ({ posts }) => {
	return (
		<>
			<Head>
				<title>All Posts</title>
				<meta
					name="description"
					content="Check out my latest posts about web development and dive in the lecture!"
				/>
			</Head>
			<AllPosts posts={posts} />
		</>
	);
};

export const getStaticProps = async () => {
	const allPosts = getAllPosts();
	return {
		props: {
			posts: allPosts,
		},
	};
};

export default AllPostsPage;
