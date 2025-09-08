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
import { useEffect, useRef } from "react";

// Client component to handle theme
function ThemeWrapper({ children }) {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme || "light");
  }, [theme]);

  return <>{children}</>;
}

export default function RootLayout({ children }) {
  const scrollRef = useRef(null);

  return (
    <Provider store={store}>
      <html lang="en">
        <body ref={scrollRef} style={{ overflowY: "auto", height: "100vh" }}>
          <ThemeWrapper>
            <LayoutWrapper>
              <Navbar />
              <BackgroundCanvas props={false} />
              {children}
              <Footer scrollRef = {scrollRef}/>
            </LayoutWrapper>
          </ThemeWrapper>
        </body>
      </html>
    </Provider>
  );
}
