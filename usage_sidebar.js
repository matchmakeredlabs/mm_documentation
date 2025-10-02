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
          label: "How to Build and Describe a Collection?",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "starting/collections/intro",
          },
          items: [
            {
              type: "doc",
              id: "starting/collections/create",
              label: "How to Create a Collection?",
            },
            {
              type: "doc",
              id: "starting/collections/hierarchy",
              label: "How to Build a Collection Hierarchy?",
            },
            {
              type: "doc",
              id: "starting/collections/describe",
              label: "How to Describe Elements?",
            },
          ],
        },
        {
          type: "doc",
          label: "How to Generate a Report?",
          id: "starting/report",
        },
        {
          type: "doc",
          label: "Frequently Asked Questions",
          id: "faq",
        },
      ],
    },
    {
      type: "category",
      label: "MatchMaker in Practice",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "use_cases/intro",
      },
      items: [
        {
          type: "category",
          label: "Transfer Students with MatchMaker",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "use_cases/uni/intro",
          },
          items: [
            {
              type: "doc",
              id: "use_cases/uni/intro",
              label: "Sabrina's Story",
            },
            {
              type: "doc",
              id: "use_cases/uni/explain",
              label: "Bullford's Implementation",
            },
            {
              type: "doc",
              id: "use_cases/uni/conclusion",
              label: "Conclusion",
            },
          ],
        },
        {
          type: "category",
          label: "Career Change with MatchMaker",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "use_cases/career_change/intro",
          },
          items: [
            {
              type: "doc",
              id: "use_cases/career_change/intro",
              label: "Alex's Story",
            },
            {
              type: "doc",
              id: "use_cases/career_change/explain",
              label: "International Health Source's Implementation",
            },
            {
              type: "doc",
              id: "use_cases/career_change/conclusion",
              label: "Conclusion",
            },
          ],
        },
      ],
    },
    {
      type: "doc",
      id: "vocab/login_dash",
      label: "Login and Dashboard",
    },
    {
      type: "category",
      label: "Create - Collection Management",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "vocab/create/intro",
      },
      items: [
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Create a Collection",
          link: {
            type: "doc",
            id: "vocab/create/create_collection/index",
          },
          items: [
            {
              type: "doc",
              label: "Editing a Collection",
              id: "vocab/create/edit",
            },
          ],
        },
        {
          type: "doc",
          id: "vocab/create/edit",
          label: "Edit",
        },
        {
          type: "doc",
          id: "vocab/create/import_export",
          label: "Import and Export",
        },
      ],
    },
    {
      type: "category",
      label: "Browse and Describe - View and Describe Collections",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "vocab/browse_describe/intro",
      },
      items: [
        {
          type: "category",
          label: "Find and Select Statements",
          link: {
            type: "doc",
            id: "vocab/browse_describe/describe/index",
          },
          items: [
            {
              type: "doc",
              label: "The Palet",
              id: "vocab/browse_describe/describe/palet",
            },
            {
              type: "doc",
              label: "Element Descriptor",
              id: "vocab/browse_describe/describe/descriptor",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Generate Report - Insight",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "vocab/report_gen/intro",
      },
      items: [
        {
          type: "category",
          label: "Matching Sets",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "vocab/report_gen/match_sets/intro",
          },
          items: [
            {
              type: "doc",
              id: "vocab/report_gen/match_sets/selection",
              label: "Selection of Sets",
            },
            {
              type: "doc",
              id: "vocab/report_gen/match_sets/weighting",
              label: "Weighting of Matches",
            },
            {
              type: "doc",
              id: "vocab/report_gen/match_sets/results",
              label: "Processing Results",
            },
          ],
        },
        {
          type: "doc",
          id: "vocab/report_gen/custom_sets",
          label: "Custom Sets",
        },
      ],
    },
    {
      type: "category",
      label: "Administration",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "vocab/admin/intro",
      },
      items: [
        {
          type: "doc",
          id: "vocab/admin/organizations",
          label: "Organizations",
        },
        {
          type: "doc",
          id: "vocab/admin/groups",
          label: "Groups",
        },
      ],
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
