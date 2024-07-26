import styles from '@/styles/Blog.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import article1 from "../public/1.png"
import article2 from '../public/2.png';
import article3 from '../public/3.png';

const Blogs = () => {
	return (
		<div>
			<div className={styles.sectionBlog} id='blogs'>
				<div>
					<h2 className={styles.blogHeading}>Other noteworthy projects</h2>
					<Link href='https://ijaycent.hashnode.dev' target='_blank'>
						<p className={styles.blogPara}>view the achieve</p>
					</Link>
					<div className={styles.blogContainer}>
						<div className={styles.blogCard}>
							<Link
								href='https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/'
								target='_blank'
								rel='noopener'>
								<div className={styles.blogLink}>
									<BiLinkExternal />
								</div>
							</Link>
							<Image src={article1} alt='article1' width={300} height={100} />

							<h3 className={styles.blogTitle}>
								How To Fetch API Data In React
							</h3>
							<p className={styles.blogParas}>
								When developing applications, you often need to get data from an
								API.
							</p>
							<div className={styles.chart}>
								<span className={styles.react}>React.js</span>
								<span className={styles.react}>API</span>
							</div>
						</div>
						<div>
							<div className={styles.blogCard}>
								<Link
									href='https://www.freecodecamp.org/news/zustand-vs-usestate-how-to-manage-state-in-react/'
									target='_blank'
									rel='noopener'>
									<div className={styles.blogLink}>
										<BiLinkExternal />
									</div>
								</Link>
								<Image src={article2} alt='article2' width={300} height={50} />
								<h3 className={styles.blogTitle}>
									Zustand vs useState – How to Manage State in React Apps
								</h3>
								<p className={styles.blogParas}>
									State management in React applications has evolved a lot in
									recent years.
								</p>
								<div className={styles.chart}>
									<span className={styles.react}>React.js</span>
								</div>
							</div>
						</div>
						<div>
							<div className={styles.blogCard}>
								<Link
									href='https://www.freecodecamp.org/news/ai-tools-to-use-in-vs-code/'
									target='_blank'
									rel='noopener'>
									<div className={styles.blogLink}>
										<BiLinkExternal />
									</div>
								</Link>

								<Image src={article3} alt='article3' width={300} height={100} />
								<h3 className={styles.blogTitle}>
									AI Tools You Can Use in Visual Studio Code Besides GitHub
									Copilot
								</h3>
								<p className={styles.blogParas}>
									AI tools have become quite popular recently. Developers use
									these tools to help generate ideas and create simple code.
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
