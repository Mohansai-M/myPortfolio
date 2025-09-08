// RootLayout.js
"use client";

import "./globals.css";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/index";
import LayoutWrapper from "./components/LayoutWrappper";
import BackgroundCanvas from "./components/BackgroundCanvas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

// Client component to handle theme
function ThemeWrapper({ children }) {
  const theme = useSelector((state) => state.theme.mode); // pick only mode

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme || "light");
  }, [theme]);

  return <>{children}</>;
}

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      {/* HTML stays at the top level */}
      <html lang="en">
        <body>
          {/* ThemeWrapper inside body */}
          <ThemeWrapper>
            <LayoutWrapper>
              <Navbar />
              <BackgroundCanvas props={false} />
              <main>{children}</main>
              <Footer />
            </LayoutWrapper>
          </ThemeWrapper>
        </body>
      </html>
    </Provider>
  );
}
