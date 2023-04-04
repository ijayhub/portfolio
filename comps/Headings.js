import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import styles from '@/styles/Headings.module.css';
import ma from '../public/envelope-fill (1).svg'
import li from '../public/linkedin.svg';
import tw  from '../public/twitter (1).svg';
import wh  from '../public/whatsapp.svg';
import Image from 'next/image';

const Headings = () => {
		const linkedin = 'https://www.linkedin.com/in/ijeoma-igboagu/';
		const whatApp = 'https://wa.me/+2348125089145';
		const twitter = 'https://twitter.com/ijaydimples';
		const mail = 'https://ijeonyi@gmail.com';
	return (
		<div>
			<div className={styles.title}>
				<div className={styles.devHeading}>
					<Typewriter
						options={{
							strings: ['Looking for a developer ?'],
							autoStart: true,
							loop: true,
						}}
					/>
					<span>👩🏽‍💻</span>
				</div>
				
				<div className={styles.devPara}>
					<Typewriter
						options={{
							strings: ['Look no futher!'],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
				
				<small className={styles.heroText1}>Hi👋🏽, I am </small>
				<h2 className={styles.name}>Ijeoma Igboagu</h2>
				<div className={styles.para}>
					<Typewriter
						options={{
							strings: ['front-end developer', 'tech writer'],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
				<Link href='#contact'>
					<button className={styles.btn}>Contact Me</button>
				</Link>
				<div className={styles.social}>
					<Link href={linkedin} target='_blank'>
						<Image src={li} alt='linkedin' className={styles.link} />
					</Link>
					<Link href={twitter} target='_blank'>
						<Image src={tw} alt='twitter' className={styles.link} />
					</Link>
					<Link href={mail} target='_blank'>
						<Image src={ma} alt='instagram' className={styles.link} />
					</Link>
					<Link href={whatApp} target='_blank'>
						<Image src={wh} alt='whatsapp' />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Headings
