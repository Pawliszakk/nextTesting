import classes from './Hero.module.css';
import Image from 'next/image';
const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/oskar.jpg"
					alt="An image showing web developer"
					width={400}
					height={400}
				/>
			</div>
			<h1>Hi, im Oskar</h1>
			<p>I blog about web development - especially about react! </p>
		</section>
	);
};

export default Hero;
