import json5 from "json5"; // Import the JSON5 parser
import fs from "fs"; // Node.js file system module
import { fileURLToPath, URL } from "node:url"; // URL utilities from Node.js
import { logPlugin } from "./vitepress-plugin-log"; // Import the custom plugin
import { defineConfig } from "vitepress";

// Read and parse the JSON5 files for the sidebars
const hrTechSidebarPathv2 = "./docs/hr/technical/v2.0/sidebar.json5";
const hrTechnicalSidebarv2 = json5.parse(
  fs.readFileSync(hrTechSidebarPathv2, "utf8")
);

// const fSidebarPathv1 = './docs/hr/functional/nav.json5';
// const fSidebarv1 = json5.parse(fs.readFileSync(fSidebarPathv1, 'utf8'));

const hrFuncSidebarPathv1 = "./docs/hr/functional/v1.0/sidebar.json5";
const hrFuncSidebarv1 = json5.parse(fs.readFileSync(hrFuncSidebarPathv1, "utf8"));

const crmFuncSidebarPathv1 = "./docs/crm/functional/v1.0/sidebar.json5";
const crmFuncSidebarv1 = json5.parse(fs.readFileSync(crmFuncSidebarPathv1, "utf8"));

// Export the VitePress configuration
export default defineConfig({
  cleanUrls: true,
  ignoreDeadLinks: [
    // ignore ALL localhost links
    /^https?:\/\/localhost/,

    // (optional) ignore specific known placeholders if you have any
    'http://localhost:8000'
  ],
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ],


  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBar\.vue$/,
          replacement: fileURLToPath(
            new URL("./theme/components/NavLayout.vue", import.meta.url)
          ),
        },
        {
          find: /^.*\/VPNavBarMenu\.vue$/,
          replacement: fileURLToPath(
            new URL("./theme/components/VPNavBarMenu.vue", import.meta.url)
          ),
        },
        {
          find: /^.*\/VPCarbonAds\.vue$/,
          replacement: fileURLToPath(
            new URL("./theme/components/VPCarbonAds.vue", import.meta.url)
          ),
        },
      ],
    },
  },

  title: "Horilla Docs",
  lastUpdated: true,
  optimizeDeps: {
    include: ["vitepress/theme"],
  },
  server: {
    watch: {
      usePolling: true, // Enables polling for file changes
    },
  },
  themeConfig: {
    carbonAds: {
      link: "blah",
    },
    search: {
      provider: "local",
    },
    logo: {
      light: "/logo-icon.png",
      dark: "/horilla-logo-dark.png",
    },
    // Navigation bar configuration
    nav: [
      {
        link: "https://horilla.com",
        text: "Home",
      },
      {
        link: "https://github.com/horilla-opensource/horilla",
        text: '<span class="git-icon"><span>',
      },
      {
        link: "/hr/technical/v2.0/",
        text: "Tech Docs",
        activeMatch: "/hr/functional/",
      },
      {
        text: '<span id="activeVersion" >v2.0</span>',
        items: [{ text: "v2.0", link: "/hr/technical/v2.0/" }],
        activeMatch: "/hr/technical/",
      },
      {
        text: '<span id="activeVersion" >v1.0</span>',
        items: [
          // { text: 'v1.0', link: '/hr/functional/v1.0/' },
          { text: "v1.0", link: "/hr/functional/v1.0/" },
        ],
        activeMatch: "/hr/functional/",
      },
    ],

    // Sidebar configuration
    sidebar: {
      "/": hrFuncSidebarv1,
      "/hr/functional/v1.0/": hrFuncSidebarv1,
      "/crm/functional/v1.0/": crmFuncSidebarv1,
      "/hr/technical/v2.0/": hrTechnicalSidebarv2,
    },

    // Add plugins
    plugins: [logPlugin()],
  },
});
