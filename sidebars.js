/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

        Guides: [
            {
                "Quickstart": [
                    {
                        "Miranum Connect": [
                            "guides/quick-start/miranum-connect/miranum-connect-quickstart",
                            "guides/quick-start/miranum-connect/worker-quickstart",
                            "guides/quick-start/miranum-connect/message-quickstart",
                            "guides/quick-start/miranum-connect/process-start-quickstart",
                        ],
                    },
                    {
                        "Miranum IDE": [
                            "guides/quick-start/miranum-ide/miranum-ide-quickstart",
                        ],
                    },
                ],
            },
            {
                "Showcases": [
                    "guides/showcases/showcases-overview",
                    "guides/showcases/pizza-order-example"
                ],
            },
            {
                "Best Practices": [
                    "guides/best-practices/best-practices-overview",
                    "guides/best-practices/hexagonal-architecture",
                ],
            },
        ],
        Components: [
            "components/components-overview",
            "components/contributing",
            {
                "Miranum-IDE": [
                    "components/miranum-ide/intro-miranum-ide",
                    "components/miranum-ide/miranum-modeler",
                    "components/miranum-ide/miranum-json",
                    "components/miranum-ide/element-template-support",
                    {
                        "Commands": [
                            "components/miranum-ide/commands/deployment_api",
                            "components/miranum-ide/commands/generate_api",
                        ],
                    },
                ],
                "Miranum-Connect": [
                    "components/miranum-connect/intro-miranum-connect",
                    {
                        "Java Client":
                            [
                                "components/miranum-connect/java-client/java-quick-reference",
                                "components/miranum-connect/java-client/miranum-worker",
                                "components/miranum-connect/java-client/miranum-process",
                                "components/miranum-connect/java-client/miranum-message"
                            ],
                        "Cloud Events": [
                            "components/miranum-connect/cloud-events/cloud-events-overview",
                            {
                                "Commands": [
                                    "components/miranum-connect/cloud-events/commands/ActivateJobsRequests",
                                    "components/miranum-connect/cloud-events/commands/ActivateJobsResponse",
                                    "components/miranum-connect/cloud-events/commands/CancelProcessInstanceRequest",
                                    "components/miranum-connect/cloud-events/commands/CancelProcessInstanceResponse",
                                    "components/miranum-connect/cloud-events/commands/CompleteJobRequest",
                                    "components/miranum-connect/cloud-events/commands/CompleteJobResponse",
                                    "components/miranum-connect/cloud-events/commands/CreateProcessInstanceRequest",
                                    "components/miranum-connect/cloud-events/commands/CreateProcessInstanceResponse",
                                    "components/miranum-connect/cloud-events/commands/DeployResourceRequest",
                                    "components/miranum-connect/cloud-events/commands/DeployResourceResponse",
                                    "components/miranum-connect/cloud-events/commands/FailJobRequest",
                                    "components/miranum-connect/cloud-events/commands/FailJobResponse",
                                    "components/miranum-connect/cloud-events/commands/PublishMessageRequest",
                                    "components/miranum-connect/cloud-events/commands/PublishMessageResponse",
                                ],
                            }
                        ]
                    }
                ]
            }
        ]
    }
;

module.exports = sidebars;
