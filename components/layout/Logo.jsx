import Image from 'next/image';
import classes from './Logo.module.css';
const Logo = () => {
	return (
		<div className={classes.logo}>
			<h2>Oskar's React Blog</h2>
		</div>
	);
};

export default Logo;
