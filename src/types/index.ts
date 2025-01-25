export type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
};

export type LayoutProps = {
  children: React.ReactNode;
  seo?: SEOProps;
};
