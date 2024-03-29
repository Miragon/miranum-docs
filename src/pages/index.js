import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img src={'img/logo_weiss.png'} alt="miranum-logo"></img>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttonsContainerWrapper}>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.buttons}>
                            <Link
                                className="button button--secondary button--lg"
                                to="/docs/components/components-overview">Get Started
                            </Link>
                        </div>
                        <div className={styles.buttons}>
                            <Link
                                className="button button--secondary button--lg"
                                href="https://outlook.office365.com/owa/calendar/TechCallDominikThomas@miragon.io/bookings/">Book
                                a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
