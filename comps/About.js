import Image from 'next/image';
import ij from '../public/ij.jpg';
import styles from '@/styles/About.module.css';
import { useState } from 'react';

const About = () => {
	const [hire, setHire] = useState('Hire');

	function handleClick() {
		setHire('Download Resume');
	}

	return (
		<div className={styles.about} id='about'>
			<h2 className={styles.titleAbout}>
				<span className={styles.numAbout}>01.</span> About
			</h2>
			<p className={styles.paraAbout}>Learn More About Me</p>
			<div className={styles.aboutSection}>
				<div>
					<p className={styles.aboutPara}>
						I am Ijeoma, a software developer with a passion for creating
						visually appealing and responsive user interfaces. As a developer, I
						value communication, and continuous learning. I feel excited when I
						see my projects come to life and get feedback.
					</p>
					<div className={styles.changeContainer}>
						<a
							href='https://drive.google.com/file/d/1UDxfCzibjfSD9M0-QIXxfUgWI5D6Vel_/view?usp=sharing'
							target='_blank'
							rel='noopener noreferrer'>
							<button className={styles.change} onClick={handleClick}>
								{hire}
							</button>
						</a>
					</div>
				</div>
				<div className={styles.imgContainer}>
					<div className={styles.img}>
						<Image src={ij} alt='pic' className={styles.imgControl} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
