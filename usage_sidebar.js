// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  usageSidebar: [
    {
      type: "category",
      label: "Getting Started",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "starting/intro",
      },
      items: [
        {
          type: "doc",
          id: "starting/intro",
          label: "Introduction",
        },
        {
          type: "category",
          label: "How to Describe a Collection?",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "starting/describe/intro",
          },
          items: [
            {
              type: "doc",
              id: "starting/describe/intro",
              label: "Introduction",
            },
            {
              type: "doc",
              id: "starting/describe/hierarchy",
              label: "How to Build a Hierarchy?",
            },
            {
              type: "doc",
              id: "starting/describe/describe",
              label: "How to Describe Elements?",
            },
            {
              type: "doc",
              id: "starting/describe/exporting",
              label: "How to Export a Collection?",
            },
          ],
        },
        {
          type: "category",
          label: "Generating a Report",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "starting/report/intro",
          },
          items: [
            {
              type: "doc",
              id: "starting/report/custom_sets",
              label: "How to Make Custom Sets?",
            },
            {
              type: "doc",
              id: "starting/report/matching",
              label: "Matching!",
            },
          ],
        },
        {
          type: "doc",
          label: "How to Manage an Organization?",
          id: "starting/manage/intro",
        },
      ],
    },
    {
      type: "category",
      label: "Example Workflows",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "use_cases/intro",
      },
      items: [
        {
          type: "doc",
          id: "use_cases/intro",
          label: "Introduction",
        },
      ],
    },
    {
      type: "category",
      label: "Functionality and Vocabulary",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "vocab/intro",
      },
      items: [
        {
          type: "doc",
          id: "vocab/intro",
          label: "Introduction",
        },
      ],
    },
    {
      type: "doc",
      label: "MatchMaker FAQ",
      id: "faq/intro",
    },

    // {
    //   type: 'autogenerated',
    //   dirName: '.', // Auto-generates everything else
    // },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
