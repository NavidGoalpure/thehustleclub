interface SeoDataInterface {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteUrl: string;
  defaultImage: string;
}
export const seoData: SeoDataInterface = {
  defaultTitle: "Foundation",
  titleTemplate: "%s",
  defaultDescription:
    "A starter to launch your blazing fast personal website and a blog, Built with Gatsby and Netlify CMS. Made with ❤ by Stackrole",
  siteUrl: "https://foundation.stackrole.com",
  defaultImage: "/Lego.png",
};
