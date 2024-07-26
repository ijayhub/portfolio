
import styles from '@/styles/Contact.module.css';


const Contact = () => {
	
	return (
		<div className={styles.contactContainer}>
			<h3 className={styles.contactHead}> What Next?</h3>
			<p className={styles.contactText}>
				<span className={styles.numContact}>04.</span> Get In Touch
			</p>
			<p className={styles.contactPara}>My inbox is always open! </p>
			<div>
				<form method='post' action='https://usebasin.com/f/1b618f556885'>
					<div className={styles.contactForm}>
						<label htmlFor='name' className={styles.contactlabel}>
							Name
						</label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Jane Doe'
							className={styles.contactInput}
						/>
					</div>
					<div className={styles.contactForm}>
						<label htmlFor='email' className={styles.contactlabel}>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='jane@gmail.com'
							className={styles.contactInput}
						/>
					</div>
					<div className={styles.contactForm}>
						<label htmlFor='message' className={styles.contactlabel}>
							Message
						</label>
						<textarea
							name='message'
							id='message'
							cols='30'
							rows='10'
							className={styles.contactInput2}
							placeholder='Hello Jane!!!'
						></textarea>
					</div>
					<div className={styles.btncontainer}>
						<button type='submit' className={styles.btnContact}>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact
