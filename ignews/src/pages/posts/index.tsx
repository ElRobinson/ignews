import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';

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


export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const reponse = await prismic.query([
        Prismic.predicates.at('document.type','publication')
    ], {
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100, 
    })

    return {
        props: {}
    }
}