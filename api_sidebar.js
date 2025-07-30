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

  apiSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Authentication",
      collapsible: true,
      collapsed: false,
      items: ["authentication/login"],
    },
    {
      type: "category",
      label: "Knowledge & Metadata Management",
      collapsible: true,
      collapsed: false,
      items: [
        "knowledge_mgmt/descriptors",
        "knowledge_mgmt/statements",
        "knowledge_mgmt/key",
        "knowledge_mgmt/collections",
        "knowledge_mgmt/comments",
        "knowledge_mgmt/settings"
      ],
    },
    {
      type: "category",
      label: "Identity & Permissions",
      collapsible: true,
      collapsed: false,
      items: [
        "identity_perm/users",
        "identity_perm/organizations",
        "identity_perm/groups",
      ],
    },
    {
      type: "category",
      label: "Match Reporting",
      collapsible: true,
      collapsed: false,
      items: ["match_reporting/report", "match_reporting/match_palet"],
    },
  ],
};

export default sidebars;
