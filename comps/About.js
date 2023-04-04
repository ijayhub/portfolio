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
			<div className={styles.about} id="about">
				<h2 className={styles.titleAbout}>
					<span className={styles.numAbout}>01.</span> About
				</h2>
				<p className={styles.paraabout}>Learn More About Me</p>
				<div className={styles.aboutSection}>
					<div>
						<p className={styles.aboutPara}>
							Hi there! I am Ijeoma, and I love making stuff for the web. I
							explored adding functionalities with{' '}
							<span className={styles.span}>Javascript</span> improving
							performance with<span className={styles.span}> React</span>. When
							I am not coding, I enjoy cooking🧑🏽‍🍳 sometimes, listening to
							music🎧, and watching funny movies🍿. I feel excitied when
							I see my projects come to life and getting feedbacks.
						</p>
						<div className={styles.changeContainer}>
							<a
								href='https://drive.google.com/file/d/1drUzwqqCddx5BNJjbDB8RQcAFGH8m5d9/view?usp=share_link'
								target=' _blank'>
								<button
									className={styles.change}
									onClick={handleClick}>
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
