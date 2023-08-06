import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/postContent';
import { getPostData, getPostFiles } from '../../lib/post-util';
const PostDetailPage = ({ event }) => {
	return (
		<>
			<Head>
				<title>{event.title}</title>
				<meta name="description" content={event.excerpt} />
			</Head>
			<PostContent post={event} />
		</>
	);
};

export const getStaticPaths = () => {
	const allPosts = getPostFiles();
	const slugs = allPosts.map((fileName) => fileName.replace(/\.md$/, ''));

	const paths = slugs.map((slug) => ({
		params: {
			slug: slug,
		},
	}));
	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps = async ({ params }) => {
	const eventSlug = params.slug;
	const currentEvent = getPostData(eventSlug);

	return {
		props: {
			event: currentEvent,
		},
		revalidate: 3600,
	};
};

export default PostDetailPage;
