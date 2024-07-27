import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import styles from '@/styles/Experience.module.css';

export default function Component() {
	return (
		<section className={styles.experience} id="experience">
			<p className={styles.contactText}>
				<span className={styles.numContact}>02.</span> Experience
			</p>
			<Timeline>
				<Timeline.Item>
					<Timeline.Point icon={HiCalendar} className={styles.timeicon} />
					<Timeline.Content>
						<Timeline.Time className={styles.timeframe}>
							July 2024
						</Timeline.Time>
						<Timeline.Title className={styles.timetitle}>
							Headstarter AI, Software Engineer
						</Timeline.Title>
						<Timeline.Body className={styles.timelist}>
							<ul>
								<li>
									• Collaborated with developers to design and develop software
									applications.
								</li>
								<li>
									• Wrote clean, efficient, and well-documented code for various
									projects.
								</li>
							</ul>
						</Timeline.Body>
					</Timeline.Content>
				</Timeline.Item>
				<Timeline.Item>
					<Timeline.Point icon={HiCalendar} className={styles.timeicon} />
					<Timeline.Content>
						<Timeline.Time className={styles.timeframe}>
							February 2024
						</Timeline.Time>
						<Timeline.Title className={styles.timetitle}>
							Collab Lab, Software Developer
						</Timeline.Title>
						<Timeline.Body className={styles.timelist}>
							<ul>
								<li>
									• Collaborated with a team of developers to create a web
									application integrating Firebase for storing and tracking user
									preferences and purchasing habits.
								</li>
								<li>
									• Implemented Firebase authentication and real-time database
									functionalities to optimize user interactions and data
									management.
								</li>
								<li>
									• Conducted code reviews for peers, ensuring high-quality code
									to achieve a 20% reduction in bugs before merging into the
									main repository.
								</li>
								<li>
									• Implemented agile methodologies, such as pair programming,
									sync meetings, and retrospectives, resulting in a 20%
									improvement in team efficiency and communication.
								</li>
							</ul>
						</Timeline.Body>
					</Timeline.Content>
				</Timeline.Item>
			</Timeline>
		</section>
	);
}
