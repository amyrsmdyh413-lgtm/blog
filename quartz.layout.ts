import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// اجزای مشترک در تمام صفحات
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "amyrsmdyh413-lgtm/blog",
        repoId: "R_kgDOVB7OlA",
        category: "Announcements",
        categoryId: "DIC_kwDOVB7OlM4DHZIB",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/amyrsmdyh413-lgtm/blog",
    },
  }),
}

// چیدمان صفحاتی که یک یادداشت تکی را نمایش می‌دهند
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// چیدمان صفحاتی که فهرست صفحات را نمایش می‌دهند (مثل تگ‌ها یا پوشه‌ها)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}