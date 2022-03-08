import styles from '../styles/draw.module.css'
import Link from 'next/link'

export function draw() {
    return (
        <p>
            There&apos;s nothing here right now, perhaps you&apos;d like to <Link href="/draw"> draw</Link>?
        </p>
    )
}