import styles from '@/styles/Blog.module.css';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

const Blogs = () => {
	return (
		<div>
			<div className={styles.sectionBlog} id="blogs">
				<div>
					<h2 className={styles.blogHeading}>Other noteworthy projects</h2>
					<Link href='https://ijaycent.hashnode.dev' target='_blank'>
						<p className={styles.blogPara}>view the achieve</p>
					</Link>
					<div className={styles.blogContainer}>
						<div className={styles.blogCard}>
							<Link
								href='https://ijaycent.hashnode.dev/how-to-use-chartjs-to-create-a-chart-for-your-project'
								target='_blank'
								rel='noopener'>
								<div className={styles.blogLink}>
									<BiLinkExternal />
								</div>
							</Link>
							<h3 className={styles.blogTitle}>
								How to use Chart.js to create a Chart for Your Project
							</h3>
							<p className={styles.blogParas}>
								Data visualization is a powerful tool for interpreting large and
								complex data sets
							</p>
							<div className={styles.chart}>
								<span className={styles.react}>React.js</span>
								<span className={styles.react}>chart.js</span>
							</div>
						</div>
						<div>
							<div className={styles.blogCard}>
								<Link
									href='https://ijaycent.hashnode.dev/creating-a-menu-using-reactjs'
									target='_blank'
									rel='noopener'>
									<div className={styles.blogLink}>
										<BiLinkExternal />
									</div>
								</Link>
								<h3 className={styles.blogTitle}>
									Creating a Menu using React.js
								</h3>
								<p className={styles.blogParas}>
									Menus are an essential tool for helping customers decide what
									to order
								</p>
								<div className={styles.chart}>
									<span className={styles.react}>React.js</span>
								</div>
							</div>
						</div>
						<div>
							<div className={styles.blogCard}>
								<Link
									href='https://ijaycent.hashnode.dev/al-assistants-that-help-your-productivity-besides-chatgpt'
									target='_blank'
									rel='noopener'>
									<div className={styles.blogLink}>
										<BiLinkExternal />
									</div>
								</Link>
								<h3 className={styles.blogTitle}>
									Al Assistants That Help Your Productivity (Besides ChatGPT)
								</h3>
								<p className={styles.blogParas}>
									AI assistants are specialized artificial intelligence software
									programs designed to imitate human behavior and thinking.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
