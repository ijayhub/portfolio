import Link from "next/link"
import styles from '@/styles/Contact.module.css';


const Contact = () => {
	const mail='https://ijeonyi@gmail.com'
	return (
		<div className={styles.contactContainer} id="contact">
			<h3 className={styles.contactHead}> What Next?</h3>
			<p className={styles.contactText}>
				<span className={styles.numContact}>04.</span> Get In Touch
			</p>
			<p className={styles.contactPara}>
				I am currently looking out for opportunities to contribute and grow.
				<br /> My inbox is always open! You can also reach me on{' '}
				<Link
					href='https://www.linkedin.com/in/ijeoma-igboagu/'
					target='_blank'
					className={styles.contactLink}>
					LinkedIn.
				</Link>
			</p>
			<div className={styles.contactBtn}>
				<Link href={mail} target='_blank' rel='noopener'>
					<button type='submit'>
						Mail
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Contact
