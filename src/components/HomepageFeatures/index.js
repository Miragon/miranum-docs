import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Entwicklungsprozess optimieren',
    Svg: require('@site/static/img/dev_process.svg').default,
    description: (
      <>
        Miranum ist so konzipiert, dass deine Entwickler sich darauf konzentrieren können, wiederverwendbare Funktionalitäten zur Verfügung zu stellen. Die Prozess-Modellierer können diese dann ohne Programmieraufwand verwenden.
      </>
    ),
  },
  {
    title: 'Lose Kopplung in die Infrastruktur',
    Svg: require('@site/static/img/integration.svg').default,
    description: (
      <>
        Über Miranum sind deine Prozesse (und andere Services) so mit der Unternehmensinfrastruktur verbunden, dass du problemlos Systeme austauschen kannst, ohne einen einzigen Prozess / Service anfassen zu müssen.
      </>
    ),
  },
  {
    title: 'Camunda Versionswechsel leicht gemacht',
    Svg: require('@site/static/img/c7_to_c8.svg').default,
    description: (
      <>
        Mit Miranum gestaltest du den Wechsel von Camunda 7 zu 8 kinderleicht ohne Anpassung deiner Prozesse. Du kannst sogar deine Prozesse nach und nach von C7 auf C8 migrieren.
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
