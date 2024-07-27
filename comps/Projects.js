import styles from '@/styles/Projects.module.css';
import Image from 'next/image';
import Link from 'next/link';
import book from '../public/book.png';
import merncover from '../public/merncover.png'
import telemedicine from '../public/telemedicine-website.png'



const Projects = () => {
	const bk = 'https://books-web-app.netlify.app/';
	const bkRepo = 'https://github.com/ijayhub/Book-Web-App';
	const mern = 'https://frontend-crud-orcin.vercel.app/';
	const mernRepo = 'https://github.com/ijayhub/Mern-project-final--tunga';
	const telhost = 'https://telemedicine-psi.vercel.app/';
	const teleRepo = 'https://github.com/ijayhub/Telemedicine';
	return (
		<section className={styles.projectContanier} id='works'>
			<div>
				<h2 className={styles.titleProject}>
					<span className={styles.numProject}>03.</span> Works
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
					<Image src={merncover} alt='report' className={styles.worksControl} />
				</div>
				<div className={styles.workProject2}>
					<p className={styles.feature2}>Featured project</p>
					<Link href={mern} target='_blank'>
						<h3 className={styles.itemTitle}>CrMovie Application</h3>
					</Link>
					<div className={styles.descContainer2}>
						<div className={styles.descContainer22}>
							<p className={styles.desc2}>
								The project enables you to find your favourite movies
								effortlessly with our user friendly application.curated a wide
								selection across genres.
							</p>
						</div>
						<div className={styles.github2}>
							<Link href={mernRepo} target='_blank' rel='noopener noreferrer'>
								<h3 className={styles.feature2}>Github</h3>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.worksContainer3}>
				<div className={styles.works3}>
					<Image
						src={telemedicine}
						alt='telemedicine'
						className={styles.worksControl}
					/>
				</div>
				<div className={styles.workProject3}>
					<p className={styles.feature3}>Featured project</p>
					<Link href={telhost} target='_blank'>
						<h3 className={styles.itemTitle}>telemedicine website</h3>
					</Link>
					<div className={styles.descContainer3}>
						<div className={styles.descContainer33}>
							<p className={styles.desc3}>
								A telemedicine website is an online platform that facilitates
								remote healthcare services.
							</p>
						</div>
						<div className={styles.github3}>
							<Link href={teleRepo} target='_blank' rel='noopener noreferrer'>
								<h3 className={styles.feature3}>Github</h3>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.btnBlog}>
				<Link
					href='https://github.com/ijayhub'
					className={styles.btnBrowse}>
					Browse All
				</Link>
			</div>
		</section>
	);
};

export default Projects;
