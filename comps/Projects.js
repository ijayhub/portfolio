import styles from '@/styles/Projects.module.css';
import Image from 'next/image';
import Link from 'next/link';
import book from '../public/google-book-apl.gif';
import report from '../public/reportpic.png'
import chart from '../public/chart.jpg'


const Projects = () => {
	const bk = 'https://books-web-app.netlify.app/';
	const bkRepo = 'https://github.com/ijayhub/Book-Web-App';
	const report1 = 'https://reports-web.netlify.app/';
	const reportRepo = 'https://github.com/ijayhub/Report-web-app';
	const ch = 'https://react-barchart-dashboard.netlify.app';
	const chartRepo = 'https://github.com/ijayhub/React-Barchart-Dashboard-Overview';
	return (
		<section className={styles.projectContanier} id="works">
			<div>
				<h2 className={styles.titleProject}>
					<span className={styles.numProject}>02.</span> Works
				</h2>
				<small className={styles.smallText}>
					Some projects I haved worked on to back up my claims.
				</small>
			</div>
			<div className={styles.worksContainer}>
				<div className={styles.works}>
					<Image src={book} alt='book' className={styles.worksControl} />
				</div>
				<div className={styles.workProject}>
					<p className={styles.feature}>Featured project</p>
					<Link href={bk} target='_blank'>
						<h3 className={styles.itemTitle}>Google book app</h3>
					</Link>
					<div className={styles.descContainer}>
						<div className={styles.descContainer1}>
							<p className={styles.desc}>
								This web app was created to allow users to search for books they
								love to read.
							</p>
						</div>
						<p></p>
						<div className={styles.github}>
							<Link href={bkRepo} target='_blank' rel='noopener noreferrer'>
								<h3 className={styles.feature}>Github</h3>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.worksContainer2}>
				<div className={styles.works2}>
					<Image src={report} alt='report' className={styles.worksControl} />
				</div>
				<div className={styles.workProject2}>
					<p className={styles.feature2}>Featured project</p>
					<Link href={report1} target='_blank'>
						<h3 className={styles.itemTitle}>Reports-Web-App</h3>
					</Link>
					<div className={styles.descContainer2}>
						<div className={styles.descContainer22}>
							<p className={styles.desc2}>
								Report web app is gives the repot of covid-19 from other
								countires.
							</p>
						</div>
						<p></p>
						<div className={styles.github2}>
							<Link href={reportRepo} target='_blank' rel='noopener noreferrer'>
								<h3 className={styles.feature2}>Github</h3>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.worksContainer3}>
				<div className={styles.works3}>
					<Image src={chart} alt='report' className={styles.worksControl} />
				</div>
				<div className={styles.workProject3}>
					<p className={styles.feature3}>Featured project</p>
					<Link href={ch} target='_blank'>
						<h3 className={styles.itemTitle}>
							React Barchart Dashboard Overview
						</h3>
					</Link>
					<div className={styles.descContainer3}>
						<div className={styles.descContainer33}>
							<p className={styles.desc3}>
								A dashboard displaying the 6-month progress of a random user
							</p>
						</div>
						<div className={styles.github3}>
							<Link href={chartRepo} target='_blank' rel='noopener noreferrer'>
								<h3 className={styles.feature3}>Github</h3>
							</Link>
						</div>
					</div>
				</div>
			</div>
			
		</section>
	);
};

export default Projects;
