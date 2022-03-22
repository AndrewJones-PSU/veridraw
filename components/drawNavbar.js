/*
A navigation bar for the draw page, stuff like file, edit, view, etc.

*/

import styles from '../styles/components/drawNavbar.module.css'

export const DrawNavbar = () => {
    return (
        <header>
            <div className={styles.navbar}>
                <nav>
                    <div className={styles.brand}>
                        <h3>VeriDraw</h3>
                    </div>
                    <div className={styles.button}>
                        <ul>File</ul>
                    </div>
                    <div className={styles.button}>
                        <ul>Edit</ul>
                    </div>
                    <div className={styles.button}>
                        <ul>View</ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}