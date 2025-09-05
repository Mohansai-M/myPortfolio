// RootLayout.js
"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./store/index";
import LayoutWrapper from "./components/LayoutWrappper";
import BackgroundCanvas from "./components/BackgroundCanvas";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Provider store={store}>
            <LayoutWrapper>
              <BackgroundCanvas />
              <main>{children}</main>
            </LayoutWrapper>
          </Provider>
        </div>
      </body>
    </html>
  );
}
