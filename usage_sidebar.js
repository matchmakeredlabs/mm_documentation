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
              label: "Introduction",
            },
            {
              type: "doc",
              id: "use_cases/uni/collections",
              label: "Moving Courses into MatchMaker",
            },
            {
              type: "doc",
              id: "use_cases/uni/matching",
              label: "Matching Transfer Courses",
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
              label: "Introduction",
            },
            {
              type: "doc",
              id: "use_cases/career_change/matching",
              label: "Matching Existing Knowledge with New Requirements",
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
        {
          type: "doc",
          id: "vocab/login",
          label: "Login",
        },
        {
          type: "category",
          label: "Collection Management",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "vocab/collection_management/intro",
          },
          items: [
            {
              type: "doc",
              id: "vocab/collection_management/display",
              label: "Display",
            },
            {
              type: "doc",
              id: "vocab/collection_management/create",
              label: "Create",
            },
            {
              type: "doc",
              id: "vocab/collection_management/edit",
              label: "Edit",
            },
            {
              type: "doc",
              id: "vocab/collection_management/import_export",
              label: "Import and Export",
            },
          ],
        },
        {
          type: "category",
          label: "Describing Elements",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "vocab/describe/intro",
          },
          items: [
            {
              type: "doc",
              id: "vocab/describe/intro",
              label: "Introduction",
            },
            {
              type: "doc",
              id: "vocab/describe/palet",
              label: "The Palet",
            },
            {
              type: "doc",
              id: "vocab/describe/describe",
              label: "Describe Mode",
            },
          ],
        },
        {
          type: "category",
          label: "Report Generation",
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
      ],
    },
    {
      type: "doc",
      label: "MatchMaker FAQ",
      id: "faq",
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
