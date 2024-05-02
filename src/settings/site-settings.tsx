export const siteSettings = {
  name: "Razer Books",
  description: "Razer Books",
  author: {
    name: "LongVH",
    websiteUrl: "https://www.facebook.com/style.of.me.vn/",
    address: "Ho Chi Minh City, VN",
  },
  logo: {
    url: "/src/assets/images/logo-2.svg",
    alt: "Razer Books Logo",
    href: "/",
    width: 128,
    height: 30,
  },
  defaultLanguage: "en",
  site_header: {
    menu: [
      {
        id: 0,
        path: "/popular",
        label: "Book",
      },
    ],
    languageMenu: [
      {
        id: "en",
        name: "English - EN",
        value: "en",
        label: "menu-en",
      },
      {
        id: "vn",
        name: "VietNam - VN",
        value: "vn",
        label: "menu-vn",
      },
    ],
  },
};
