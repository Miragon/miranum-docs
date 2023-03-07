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

    APIs: [
        "apis/api-overview",
        {
            "Cloud Events": [
                "apis/cloud-events/cloud-events-overview",
                {
                    "Commands": [
                        "apis/cloud-events/commands/ActivateJobsRequests",
                        "apis/cloud-events/commands/ActivateJobsResponse",
                        "apis/cloud-events/commands/CancelProcessInstanceRequest",
                        "apis/cloud-events/commands/CancelProcessInstanceResponse",
                        "apis/cloud-events/commands/CompleteJobRequest",
                        "apis/cloud-events/commands/CompleteJobResponse",
                        "apis/cloud-events/commands/CreateProcessInstanceRequest",
                        "apis/cloud-events/commands/CreateProcessInstanceResponse",
                        "apis/cloud-events/commands/DeployResourceRequest",
                        "apis/cloud-events/commands/DeployResourceResponse",
                        "apis/cloud-events/commands/FailJobRequest",
                        "apis/cloud-events/commands/FailJobResponse",
                        "apis/cloud-events/commands/PublishMessageRequest",
                        "apis/cloud-events/commands/PublishMessageResponse",
                    ],
                }
            ]
        }
    ],
    Guides: [
        "guides/guides-overview",
        {
            "Getting Started": [
                "guides/getting-started/getting-started-web-ide-guide",
                "guides/getting-started/pizza-order-example"
            ],
        },
    ],
    Components: [
        "components/components-overview",
        {
            "Miranum-IDE": [
                "components/miranum-ide/intro-miranum-ide",
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
                "components/miranum-connect/intro-miranum-connect"
            ]
        }
    ]
};

module.exports = sidebars;
