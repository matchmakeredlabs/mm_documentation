// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MatchMaker Documentation",
  tagline: "Liberate Learning!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://matchmakeredlabs.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/mm_documentation/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "matchmakeredlabs", // Usually your GitHub org/user name.
  projectName: "mm_documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  scripts: ["scripts/auth.js"],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./usage_sidebar.js",
          // id: "usage",
          path: "usage",
          routeBasePath: "usage",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "api",
        routeBasePath: "api",
        sidebarPath: "./api_sidebar.js",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "MatchMaker",
        logo: {
          alt: "MatchMaker Logo",
          src: "img/logo.svg",
          href: "https://matchmakeredlabs.net",
          target: "_self",
        },

        items: [
          {
            to: "/",
            label: "Home",
            position: "left",
            target: "_self",
          },
          // {
          //   type: "doc",
          //   position: "left",
          //   docId: "starting/intro",
          //   label: "User Docs",
          // },
          {
            position: "left",
            to: "/api/intro",
            label: "API Docs",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "MatchMaker",
            items: [
              {
                label: "Home",
                href: "https://matchmakeredlabs.net",
              },
              {
                label: "Our Team",
                href: "https://matchmakeredlabs.net/About/team.html",
              },
            ],
          },
          {
            title: "Docs",
            items: [
              {
                label: "Home",
                href: "/",
              },
              // {
              //   label: "Usage",
              //   to: "/usage/starting/intro",
              // },
              {
                label: "API",
                to: "/api/intro",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MatchMaker Education labs, PBC. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
