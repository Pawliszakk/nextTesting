import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import { getFeaturedPosts } from '../lib/post-util';
import Head from 'next/head';

const HomePage = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Oskar's React Blog</title>
				<meta
					name="description"
					content="Go check out my blog, there is a lot to learn"
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
};

export const getStaticProps = async () => {
	const FeaturedPosts = getFeaturedPosts();

	return {
		props: {
			posts: FeaturedPosts,
		},
		revalidate: 3600,
	};
};

export default HomePage;
