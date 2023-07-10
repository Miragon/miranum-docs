// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;

/** @type {import('@docusaurus/types').Config} */
module.exports = {
    title: 'miranum',
    tagline: 'Simplifying the complexity of process automation.',
    url: 'https://miranum.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico', // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Miragon', // Usually your GitHub org/user name.
    projectName: 'miranum-docs', // Usually your repo name.
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'de', locales: ['de'],
    },

    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    path: 'docs',
                    breadcrumbs: true,
                    editUrl: ({versionDocsDirPath, docPath}) =>
                        `https://github.com/FlowSquad/miranum-docs/blob/main/${versionDocsDirPath}/${docPath}`,
                    editLocalizedFiles: false,
                    editCurrentVersion: false,
                    routeBasePath: 'docs',
                    include: ['**/*.md', '**/*.mdx'],
                    exclude: [
                        '**/_*.{js,jsx,ts,tsx,md,mdx}',
                        '**/_*/**',
                        '**/*.test.{js,jsx,ts,tsx}',
                        '**/__tests__/**',
                    ],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                },
            }),
        ],
    ],
    themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: '',
                logo: {
                    alt: 'miranum logo', src: 'img/logo_blau.png',
                },
                items: [
                    {type: "doc", position: "left", docId: 'guides/guides-overview', label: "Guides"},
                    {
                        type: "doc",
                        position: "left",
                        docId: "components/components-overview",
                        label: "Components"
                    },
                    {
                        href: 'https://github.com/Miragon/miranum-connect',
                        position: 'right',
                        className: "header-github-link",
                        "aria-label": "GitHub repository",
                    }
                ],
            },
            algolia: {
                appId: 'G4FQJSWGXZ',
                apiKey: 'df7ef918d6ad8c6f1db96d4f81932fe2',
                indexName: 'miranum',
                algoliaOptions: {}, // Optional, if provided by Algolia
                placeholder: "Ask me anything",
            },
            footer: {
                style: 'dark', links: [{
                    title: 'Documentation',
                    items: [{
                        label: "miranum-ide",
                        href: "/docs/components/components-overview"
                    }, {label: "miranum-connect", href: "/docs/components/components-overview"}],
                }, {
                    title: 'Miragon',
                    items: [{label: 'Website', href: 'https://miragon.io'}, {
                        label: 'Twitter',
                        href: 'https://twitter.com/miragon_io'
                    }, {label: 'LinkedIn', href: 'https://www.linkedin.com/company/miragon-io/'}],
                }, {
                    title: 'Legal',
                    items: [{label: 'Imprint', href: 'https://miragon.io/impressum'}, {
                        label: 'Privacy',
                        href: 'https://miragon.io/datenschutz'
                    },],
                },], copyright: `Copyright © ${new Date().getFullYear()} Miragon`,
            }, prism: {
                theme: lightCodeTheme,
            },
            colorMode: {
                disableSwitch: true,
            },
        }),
};

