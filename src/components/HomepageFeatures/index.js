import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';
import gif from "../../../static/img/test-gif.gif";
import Link from "@docusaurus/Link";

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

const miranumWorkerCode = `
@Worker(type = "sendMessage")
public Answer sendMessage(SendMessageCommand sendMessageCommand) {
    // ...
    return answer;
}`;

const miranumMessageCode = `
@RequiredArgsConstructor
class Service {
    private final MessageApi messageApi;
    
    public void correlateMessage(CorrelateMessageCommand correlateMessageCommand) {
        messageApi.correlateMessage(correlateMessageCommand);
    }
}
`;

const ApplicationWindowWithDescription = ({children, description, className}) => {
    return (
        <div className={clsx(styles.blockContainer, className)}>
            <div className={styles.applicationWindow}>
                <div className={styles.applicationMenuBar}>
                    <div className={clsx(styles.xButton, styles.red)}></div>
                    <div className={clsx(styles.xButton, styles.orange)}></div>
                    <div className={clsx(styles.xButton, styles.green)}></div>
                </div>
                {children}
            </div>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

const CodeBlockWithDescription = ({description, code, language, className}) => {
    return (
        <ApplicationWindowWithDescription
            className={className}
            children={<CodeBlock className={clsx('language-' + language)}>
                {code}
            </CodeBlock>}
            description={description}>
        </ApplicationWindowWithDescription>);
};

const GifWithDescription = ({src, description}) => {
    return (
        <ApplicationWindowWithDescription
            children={<img className={styles.gif} src={src} alt="gif-player"/>}
            description={description}>
        </ApplicationWindowWithDescription>);
};

export default function HomepageFeatures() {
    return (
        <div>
            <section>
                <div className={styles.heading}>
                    <h1>Model your process with the Miranum IDE</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <GifWithDescription src={gif}
                                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.">
                </GifWithDescription>
                <p className={styles.sectionFooter}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </section>

            <section>
                <h1>Create engine-neutral worker definitions</h1>
                <CodeBlockWithDescription code={miranumWorkerCode}
                                          language="java"
                                          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.">
                </CodeBlockWithDescription>
            </section>

            <section>
                <h1>Create custom forms</h1>
                <GifWithDescription src={gif}
                                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.">
                </GifWithDescription>
            </section>

            <section>
                <h1>Correlate a message</h1>
                <CodeBlockWithDescription code={miranumMessageCode}
                                          className={styles.correlateMessageCode}
                                          language="java"
                                          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.">
                </CodeBlockWithDescription>
            </section>

            <section className={styles.features}>
                <h1>Your benefits</h1>
                <div className="container">
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>

            <div className={styles.contribution}>
                <img src={'img/logo.svg'} alt="miranum-logo"/>
                <h1>Welcome to the Miranum community</h1>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/components/components-overview">
                    Get Started
                </Link>
            </div>
        </div>
    );
}