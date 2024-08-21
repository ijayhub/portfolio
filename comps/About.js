"use client"
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
						Hi, I am Ijeoma, a software developer passionate about React.js and
						making tech concepts easy to understand.
					</p>
					<p>
						I am also passionate about creating visually appealing and
						responsive user interfaces.
					</p>
					<div className={styles.changeContainer}>
						<a
							href='https://drive.google.com/file/d/1I12jZk7055pcyXrjcZRsTImt377xPfpz/view?usp=sharing'
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
						<Image src={ij} alt='Ijeoma' className={styles.imgControl} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
