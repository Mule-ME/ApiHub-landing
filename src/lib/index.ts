export const constants = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  SITE_NAME: "Your Site Name",
  DEFAULT_META_DESCRIPTION: "Your default meta description here",
};

export const config = {
  defaultLocale: "en",
  supportedLocales: ["en", "es", "fr"],
  defaultTheme: "light",
};
