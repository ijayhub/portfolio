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
							Hi I am  Ijeoma, a software developer passionate about React.js and making tech
							concepts easy to understand.
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
