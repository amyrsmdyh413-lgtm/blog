import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "مشقِ من",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "fa-IR",
    baseUrl: "mashqeman.ir",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Vazirmatn",
        body: "Vazirmatn",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fbf8f3",
          lightgray: "#ebe3d5",
          gray: "#8c7f70",
          darkgray: "#2c2520",
          dark: "#1a1512",
          secondary: "#9e472a",
          tertiary: "#c87a5b",
          highlight: "rgba(158, 71, 42, 0.1)",
          textHighlight: "#f3c66388",
        },
        darkMode: {
          light: "#181615",
          lightgray: "#292523",
          gray: "#78706a",
          darkgray: "#e6dfd5",
          dark: "#f5efe6",
          secondary: "#d98a59",
          tertiary: "#e6ad85",
          highlight: "rgba(217, 138, 89, 0.14)",
          textHighlight: "#d98a5944",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config