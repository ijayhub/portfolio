import styles from '@/styles/Contact.module.css';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.footerPara}>
				Coded and Built by &copy;{' '}
        <Link href='https://github.com/ijayhub' target='_blank' className={styles.footerLink}>
            Ijeoma💖
        </Link>
			</p>
		</footer>
	);
};

export default Footer;
