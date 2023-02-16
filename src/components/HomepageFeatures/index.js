import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Integrated Development Environment for Processes',
        Svg: require('/static/img/dev_process.svg').default,
        description: (
            <>
                One IDE for everything! With our Visual Studio Code plugins you no longer need to access an external
                modeler. Edit, manage and access all artifacts for your process application in one place.
            </>
        ),
    },
    {
        title: 'Avoiding Infrastructure Coupling',
        Svg: require('/static/img/integration.svg').default,
        description: (
            <>
                Miranum-Connect enables you to create reusable integrations without getting locked into any vendor
                environments. We want to rely on pro-code instead of low-code, enabling you to build a sustainable and
                clean architecture.
            </>
        ),
    },
    {
        title: 'Ready for the Future',
        Svg: require('/static/img/c7_to_c8.svg').default,
        description: (
            <>
                By being technology neutral you are set up for success when migrating to a newer version of your
                infrastructure components. E.g. whether you use Camunda Platform 7 or 8 does not make any difference!
            </>
        ),
    },
    {
        title: 'Get Control over Deployments',
        Svg: require('/static/img/deployment.svg').default,
        description: (
            <>
                Generate a automation project in the Miranum IDE. A central place to manage and version all your
                process-assets.
                This eases the deployment and ensures compatability.
            </>
        ),
    },
    {
        title: 'Get Help from skilled Consultants',
        Svg: require('/static/img/consulting.svg').default,
        description: (
            <>
                Kickstart your automation project or refactoring with one of our skilled Consultants. Our goal is to get
                you educated to use Miranum all by yourselves.
            </>
        ),
    },
    {
        title: 'Open Source at Heart',
        Svg: require('/static/img/opensource.svg').default,
        description: (
            <>
                Miranum IDE and Connect are Open Source at Heart and will always be. We value any kind of contributions
                and want to give back.
                Don't hold back to use, fork or work on Miranum as you want.
            </>
        ),
    }
];

const CustomerVoices = [
    {
        title: 'City of Munich',
        Svg: require('/static/img/lhm.webp').default,
        description: (
            <>
                We are supporting the city of Munich since June 2020 in their project neoIT. That's when the core
                concepts
                of Miranum were born. We help concerting and implementing a platform for digitalising workflows.
                The focus of this project lies especially on orchestrating their very heterogeneous system landscape.
                Additionally, a task management needed to be created in order to involve various clerks in the cities
                departments.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

function CustomerVoice({Svg, title, description}) {
    return (
        <div>
            <div className={clsx(styles.subsection, "row")}>
                <div className={clsx('col col--6', "text--center")}>
                    <img src={Svg} className={styles.customerVoicesImg}></img>
                </div>
                <div className={clsx('col col--6', styles.subsectionContent)}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}


export default function HomepageFeatures() {
    return (
        <div>
            <section className={styles.features}>
                <div className="container">
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
            <section className={styles.customerVoices}>
                <div className="container">
                    <div className="row">
                        {CustomerVoices.map((props, idx) => (
                            <CustomerVoice key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

