import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
const FeatureList = [
    {
        title: 'Optimizing development process',
        Svg: require('@site/static/img/dev_process.svg').default,
        description: (
            <>          Your developers can focus on providing reusable functionality, which can be used by process modelers without any programming effort.
            </>    ),
    },
    {
        title: 'Loose infrastructure coupling',
        Svg: require('@site/static/img/integration.svg').default,
        description: (
            <>          Through Miranum, your processes and other services are connected to the enterprise infrastructure in such a way that you can easily replace systems without having to touch a single process/ service.
            </>    ),
    },
    {
        title: 'Easily migrating camunda engines',
        Svg: require('@site/static/img/c7_to_c8.svg').default,
        description: (
            <>        Migrate from Camunda 7 to 8 without changing the content of your processes or integrations. You can even migrate your processes gradually from C7 to C8.
            </>    ),
    },
];
function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>      <div className="text--center">        <Svg className={styles.featureSvg} role="img" />      </div>      <div className="text--center padding-horiz--md">        <h3>{title}</h3>        <p>{description}</p>      </div>    </div>  );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>      <div className="container">        <div className="row">          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />          ))}
        </div>      </div>    </section>  );
}