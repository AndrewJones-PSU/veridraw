import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>VeriDraw/</title>
				<meta name="description" content="Design Hardware by drawing diagrams" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					VeriDraw
				</h1>

				<p className={styles.description}>
					Design hardware by drawing diagrams.
				</p>

				<p>
					VeriDraw is a web-based circuit designer for creating verilog designs by drawing diagrams. Users can draw their circuit by dragging in basic function blocks (adders, multipliers, registers, etc.) and connecting them together.
				</p>
				<p>
					VeriDraw is currently a work in progress and I don&apos;t have anything that&apos;s worth showing here just yet. If you&apos;re interested, follow the project on github (linked below).
				</p>

				<div className={styles.grid}>
					<a href="https://github.com/AndrewJones-PSU/veridraw" className={styles.card}>
						<h2>Github &rarr;</h2>
						<p>Check out the progress that is being made on github.</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}
