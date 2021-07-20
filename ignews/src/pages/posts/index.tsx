import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | IgNews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time></time>
                        <strong></strong>
                        <p></p>
                    </a>
                    <a href="#">
                        <time></time>
                        <strong></strong>
                        <p></p>
                    </a>
                    <a href="#">
                        <time></time>
                        <strong></strong>
                        <p></p>
                    </a>
                    <a href="#">
                        <time></time>
                        <strong></strong>
                        <p></p>
                    </a>
                    <a href="#">
                        <time></time>
                        <strong></strong>
                        <p></p>
                    </a>
                </div>
            </main>
        </>
    );
}