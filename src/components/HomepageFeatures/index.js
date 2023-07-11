import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';
import modeler_gif from "../../../static/img/modeler.gif";
import forms_gif from "../../../static/img/forms.gif";
import Link from "@docusaurus/Link";
import flowableLogo from "../../../static/img/flowable-logo.png";
import camunda7Logo from "../../../static/img/camunda7-logo.png";
import camunda8Logo from "../../../static/img/camunda8-logo.png";

const FeatureList = [{
    title: 'Integrated Development Environment for Processes',
    Svg: require('/static/img/dev_process.svg').default,
    description: (<>
        One IDE for everything! With our Visual Studio Code plugins you no longer need to access an external
        modeler. Edit, manage and access all artifacts for your process application in one place.
    </>),
}, {
    title: 'Avoiding Infrastructure Coupling', Svg: require('/static/img/integration.svg').default, description: (<>
        Miranum-Connect enables you to create reusable integrations without getting locked into any vendor
        environments. We want to rely on pro-code instead of low-code, enabling you to build a sustainable and
        clean architecture.
    </>),
}, {
    title: 'Ready for the Future', Svg: require('/static/img/c7_to_c8.svg').default, description: (<>
        By being technology neutral you are set up for success when migrating to a newer version of your
        infrastructure components. E.g. whether you use Camunda Platform 7 or 8 does not make any difference!
    </>),
}];

function Feature({Svg, title, description}) {
    return (<div className={clsx('col col--4')}>
        <div className="text--center">
            <Svg className={styles.featureSvg} role="img"/>
        </div>
        <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>);
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
    return (<div className={clsx(styles.blockContainer, className)}>
        <div className={styles.applicationWindow}>
            <div className={styles.applicationMenuBar}>
                <div className={clsx(styles.xButton, styles.red)}></div>
                <div className={clsx(styles.xButton, styles.orange)}></div>
                <div className={clsx(styles.xButton, styles.green)}></div>
            </div>
            {children}
        </div>
        <p className={styles.description}>{description}</p>
    </div>);
};

const CodeBlockWithDescription = ({description, code, language, className}) => {
    return (<ApplicationWindowWithDescription
        className={className}
        description={description}>
        <CodeBlock className={clsx('language-' + language)}>
            {code}
        </CodeBlock>
        <div className={styles.logos}>
            <img src={flowableLogo} alt="flowable-logo"/>
            <img src={camunda7Logo} alt="camunda-7-logo"/>
            <img src={camunda8Logo} alt="camunda-8-logo"/>
        </div>
    </ApplicationWindowWithDescription>);
};

const GifWithDescription = ({src, description}) => {
    return (<ApplicationWindowWithDescription
        children={<img className={styles.gif} src={src} alt="gif-player"/>}
        description={description}>
    </ApplicationWindowWithDescription>);
};

const ShowCaseSection = ({title, subtitleText, footerText, children, buttonText, buttonLink}) => {
    return (<section>
        <div className={styles.heading}>
            <h1>{title}</h1>
            <p>{subtitleText}</p>
        </div>
        {children}
        <p className={styles.sectionFooter}>{footerText}</p>
        <Link
            className="button button--primary button--lg text-wrap"
            to={buttonLink}>
            {buttonText}
        </Link>
    </section>);
}

const modelerDescription =  {
    title: "Model your process with the Miranum IDE",
    subtitleText: (<>
        Miranum IDE is a collection of <b>Visual Studio Code</b> Plugins that allows you to edit, manage and access all
        artifacts for your process application in one place.
    </>),
    footerText: (<>
        To create end-to-end process application a <b>collaboration platform</b> for various technical and non-technical
        roles is needed. Since processes need multiple artifacts like templates (forms, mails, PDF), workflow assets (BPMN, DMN)
        and configuration files (secrets, connectors) we see the growing need for a platform being capable of handling all of them.
        With Visual Studio Code developers are able to work in a familiar environment. Even non-technical personas are able to
        visit VS Code through the browser and do not need to fear any technical complexity.
    </>),
    description: (<>
        Miranum Modeler is one of the core components of our VS Code Plugins. It allows you to model <b>BPMN 2.0</b> diagrams
        that can be used within Camunda. Besides, it supports the creation of <b>DMN 1.3</b> diagrams.
    </>),
    gifSrc: modeler_gif,
    buttonText: "Discover Miranum Modeler",
    buttonLink: "/docs/components/miranum-ide/miranum-modeler"
};

const workerDescription =  {
    title: "Create engine-neutral worker definitions",
    subtitleText: (<>
        A <b>job worker</b> is a service capable of performing a particular task in a process, typically being written in Java.
        With Miranum-Connect developers are empowered to build <b>reusable and technology neutral connectors</b> and integrations.
    </>),
    footerText: (<>
        Miranum-connect supports Camunda <b>element templates</b> as well. These are building blocks that simplify the process of
        designing and implementing processes in the Camunda Platform. They are used to standardize and <b>streamline the
        modeling process</b> by providing predefined elements with pre-configured properties, which can be easily customized
        to meet specific business requirements.
    </>),
    code: miranumWorkerCode,
    description: (<>
        This is a technology neutral worker implementation for a job of type <code>send-message</code>.
        Due to the miranum-connect abstraction layer it works with various process engines such as
        <b>Camunda Platform 7, 8</b> as well as <b>Flowable</b>.
    </>),
        language: "java",
    buttonText: "Build your own worker",
    buttonLink: "/docs/components/miranum-connect/java-client/miranum-worker"
};

const formsDescription = {
    title: "Create custom forms",
    subtitleText: (<>
        Forms are digital interfaces used to collect and <b>organize information from users</b> in processes. They play a vital
        role in automating workflows and ensuring compliance. Forms streamline processes, reduce errors, and enhance efficiency,
        making them essential for effective business operations.
    </>),
    footerText: (<>
        While designing Forms, collaboration is key! Through the Live Share plugin for VS Code a real-time collaboration is easily
        possible. <b>Empowering Business and IT</b> to work even closer together. Once having designed these forms, you can reference them
        in the required process.
    </>),
    description: (<>
        Miranum JSON Forms is another key-component of our VS Code Plugins. It allows you to create and edit complex forms
        using <b>JSONForms</b>, which is based on <b>JSON Schema</b>, a specification for annotating and validating JSON documents.
    </>),
    gifSrc: forms_gif,
    buttonText: "Design your first form",
    buttonLink: "/docs/components/miranum-ide/intro-miranum-ide"
};

const messageDescription = {
    title: "Correlate a message",
    subtitleText: (<>
        Message correlation is a crucial aspect of processes, as it involves <b>associating incoming messages with a process
        instance</b>. It ensures that responses are properly linked to the corresponding requests, enabling <b>seamless communication </b>
        and coordination among participants and systems.
    </>),
    code: miranumMessageCode,
    language: "java",
    description: (<>
        By using miranum-connect’s <code>message-api</code> you can correlate messages in multiple process-engines such as <b>Camunda 7, 8 and Flowable</b>.
    </>),
    buttonText: "Discover all miranum-connect functionality",
    buttonLink: "/docs/components/miranum-connect/intro-miranum-connect"
}

export default function HomepageFeatures() {
    return (<div>
        <ShowCaseSection title={modelerDescription.title}
                         subtitleText={modelerDescription.subtitleText}
                         buttonText={modelerDescription.buttonText}
                         buttonLink={modelerDescription.buttonLink}
                         footerText={modelerDescription.footerText}>
            <GifWithDescription src={modelerDescription.gifSrc}
                                description={modelerDescription.description}>
            </GifWithDescription>
        </ShowCaseSection>

        <ShowCaseSection title={workerDescription.title}
                         subtitleText={workerDescription.subtitleText}
                         buttonLink={workerDescription.buttonLink}
                         buttonText={workerDescription.buttonText}
                         footerText={workerDescription.footerText}>
            <CodeBlockWithDescription code={workerDescription.code}
                                      language={workerDescription.language}
                                      description={workerDescription.description}>
            </CodeBlockWithDescription>
        </ShowCaseSection>

        <ShowCaseSection title={formsDescription.title}
                         subtitleText={formsDescription.subtitleText}
                         buttonLink={formsDescription.buttonLink}
                         buttonText={formsDescription.buttonText}
                         footerText={formsDescription.footerText}>
            <GifWithDescription src={formsDescription.gifSrc}
                                description={formsDescription.description}>
            </GifWithDescription>
        </ShowCaseSection>

        <ShowCaseSection title={messageDescription.title}
                         buttonLink={messageDescription.buttonLink}
                         buttonText={messageDescription.buttonText}
                         subtitleText={messageDescription.subtitleText}>
            <CodeBlockWithDescription code={messageDescription.code}
                                      className={styles.correlateMessageCode}
                                      language={messageDescription.language}
                                      description={messageDescription.description}>
            </CodeBlockWithDescription>
        </ShowCaseSection>

        <section className={styles.features}>
            <h1>Your benefits</h1>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (<Feature key={idx} {...props} />))}
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
    </div>);
}