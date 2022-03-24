import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

import { DrawNavbar } from '../components/drawNavbar'

import styles from '../styles/draw.module.css'

export default function draw() {
	return (
		<div className={styles.container}>

			<Head>
				<title>VeriDraw/draw</title>
				<meta name="description" content="Design Hardware by drawing diagrams" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<DrawNavbar />
				<div>
					<p>
						this will be some kind of content, placeholder to see if I&apos;m formatting right
					</p>
				</div>
			</main>
		</div >
	)
}