import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Entwicklungsprozess optimieren',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Miranum ist so konzipiert, dass Ihre Entwickler sich darauf konzentrieren können, wiederverwendbare Funktionalitäten zur Verfügung zu stellen. Die Prozess-Modellierer können diese dann ohne Programmieraufwand verwenden.
      </>
    ),
  },
  {
    title: 'Lose Kopplung in die Infrastruktur',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Über Miranum sind Ihre Prozesse (und andere Services) so mit der Unternehmensinfrastruktur verbunden, dass Sie problemlos Systeme austauschen können, ohne einen einzigen Prozess / Service anfassen zu müssen.
      </>
    ),
  },
  {
    title: 'Camunda Versionswechsel leicht gemacht',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Mit Miranum gestalten Sie den Wechsel von Camunda 7 zu 8 kinderleicht ohne Anpassung Ihrer Prozesse. Sie können sogar Ihre Prozesse nach und nach von C7 auf C8 migrieren.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
