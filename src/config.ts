export const SITE = {
  website: "https://timetickme.com/", // replace this with your deployed domain
  author: "yinnan",
  profile: "https://timetickme.com/about",
  desc: "编程技术文章，C#、Python、C++、Go、JavaScript.",
  title: "编程笔记",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit",
    url: "https://github.com/BlackBoxRecorder/dev-blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
