import Link from "next/link"
import styles from '@/styles/Navbar.module.css';


const Navbar = () => {
	
	return (
		<nav className={styles.nav}>
			<div className={styles.navHead}>
				<h1 className={styles.logo}>I</h1>
			</div>
			<ul className={styles.ul}>
				<Link href='#about'>
					<li className={styles.list}>
						<span className={styles.num}>01. </span> About
					</li>
				</Link>
				<Link href='#experience'>
					<li className={styles.list}>
						<span className={styles.num}>02. </span> Experience
					</li>
				</Link>
				<Link href='#works'>
					<li className={styles.list}>
						<span className={styles.num}>03. </span> Works
					</li>
				</Link>
				<Link href='#blogs'>
					<li className={styles.list}>
						<span className={styles.num}>04. </span> Blogs
					</li>
				</Link>
				<Link href='#contact'>
					<li className={styles.list}>
						<span className={styles.num}>05. </span> Contact
					</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Navbar
