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
  ],
  Guides: [
     "guides/guides-overview",
     {
       "Getting Started": ["guides/getting-started/getting-started-web-ide-guide",],
     },
  ],
  Components: [
     "components/components-overview",
     {
       "Miranum-IDE":[
           "components/miranum-ide/references/miranum-json",
           "components/miranum-ide/references/element-template-support",
           {
               "Commands": [
                   "components/miranum-ide/references/commands/deployment_api",
                   "components/miranum-ide/references/commands/generate_api",
               ],
           },
       ]
     }
  ]
};

module.exports = sidebars;
