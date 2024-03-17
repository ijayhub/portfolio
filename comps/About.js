import Image from "next/image";
import ijay from '../public/ijay.png'
import styles from '@/styles/About.module.css';
import { useState } from "react";


const About = () => {
    const [hire, setHire] = useState('Hire');
    function handleClick() {
        setHire('Download Resume')
    }
    return (
			<div className={styles.about} id='about'>
				<h2 className={styles.titleAbout}>
					<span className={styles.numAbout}>01.</span> About
				</h2>
				<p className={styles.paraabout}>Learn More About Me</p>
				<div className={styles.aboutSection}>
					<div>
						<p className={styles.aboutPara}>
							I am Ijeoma, a front-end developer with a passion for creating
							visually appealing and responsive user interfaces. I have
							dedicated time to self-education and honing my skills. My
							proficiency in{' '}
							<span className={styles.span}> HTML, CSS, and JavaScript </span>{' '}
							combined with hands-on experience using popular frameworks like
							<span className={styles.span}> React.js and Next.js </span>, has
							allowed me to complete personal projects such as building a
							responsive portfolio website and developing web applications. As a
							developer, I value communication, and continuous learning. I feel
							excitied when I see my projects come to life and getting
							feedbacks.
						</p>
						<p></p>
						<div className={styles.changeContainer}>
							<a
								href='https://drive.google.com/file/d/1glmgnqU3gP1QPLscfYJuOElfPS4amfua/view?usp=sharing'
								target=' _blank'>
								<button className={styles.change} onClick={handleClick}>
									{hire}
								</button>
							</a>
						</div>
					</div>
					<div className={styles.imgContainer}>
						<div className={styles.img}>
							<Image src={ijay} alt='pic' className={styles.imgControl} />
						</div>
					</div>
				</div>
			</div>
		);
}

export default About
