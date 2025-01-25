import { FC } from "react";
import Link from "next/link";
import { Button } from "@components/core";
import { Container } from "@components/core";

export const Header: FC = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "API Docs", href: "/docs" },
    { label: "Contributors", href: "/contributors" },
    { label: "Support Us", href: "/support" },
    { label: "GitHub", href: "https://github.com/apihub" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            FreeAPIHub
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button size="sm">Get Started</Button>
        </nav>
      </Container>
    </header>
  );
};
