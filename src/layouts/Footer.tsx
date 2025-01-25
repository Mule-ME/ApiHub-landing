import { FC } from "react";

export const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-6 px-6 bg-gray-100">
      <div className="text-center text-gray-600">
        © {year} APIHub
      </div>
    </footer>
  );
};
