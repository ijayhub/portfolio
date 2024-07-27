import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Navbar from '@/comps/Navbar';
import Headings from '@/comps/Headings';
import About from '@/comps/About';
import Projects from '@/comps/Projects';
import Blogs from '@/comps/Blogs';
import Experience from '@/comps/Experiences';
import Contact from '@/comps/Contact';
import Footer from '@/comps/Footer';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio</title>
				<meta
					name='description'
					content='Portfolio for Ijeoma Igboagu generated using Next.js'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<main className={styles.main}>
				<Headings />
				<About />
				<Experience />
				<Projects />
				<Blogs />
				<Contact />
				<a href='#top' className='fixed bottom-4 right-4'>
					<BsFillArrowUpSquareFill className='text-blue-900 text-2xl lg:text-3xl mb-4 lg:mb-0' />
				</a>
			</main>
			<Footer />
		</>
	);
}
