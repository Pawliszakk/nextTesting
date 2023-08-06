import Link from 'next/link';
import classes from './PostItem.module.css';
import Image from 'next/image';

const PostItem = ({ image, title, excerpt, date, slug }) => {
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const imagePath = `/images/posts/${slug}/${image}`;
	const linkUrl = `/posts/${slug}`;
	return (
		<li className={classes.post}>
			<Link href={linkUrl}>
				<div className={classes.image}>
					<Image
						src={imagePath}
						alt={title}
						width={600}
						height={200}
						layout="responsive"
					/>
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<time>{formattedDate}</time>
					<p>{excerpt}t</p>
				</div>
			</Link>
		</li>
	);
};

export default PostItem;
