import { FC, PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export * from "./Header";
export * from "./Footer";
