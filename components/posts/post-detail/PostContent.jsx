import ReactMarkdown from 'react-markdown';
import classes from './PostContent.module.css';

import PostHeader from './PostHeader';
import Image from 'next/image';

const PostContent = ({ post }) => {
	const customRenderers = {
		img(image) {
			return (
				<Image
					src={`/images/posts/${post.slug}/${image.src}`}
					alt={image.alt}
					width={400}
					height={400}
				/>
			);
		},

	};

	return (
		<article className={classes.content}>
			<PostHeader title={post.title} slug={post.slug} image={post.image} />
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
