"use client";

import { useSelector } from "react-redux";

export default function LayoutWrapper({ children }) {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div
      className={theme === "dark" ? "dark" : "light"}
    >
    {children}
    </div>
  );
}
