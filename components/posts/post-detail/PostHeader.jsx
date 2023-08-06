import Image from 'next/image';
import classes from './PostHeader.module.css';

const PostHeader = ({ title, image, slug }) => {

	const imagePath = `/images/posts/${slug}/${image}`;
	
	return (
		<header className={classes.header}>
			<h1>{title}</h1>
			<Image src={imagePath} alt={title} width={200} height={150} />
		</header>
	);
};

export default PostHeader;
