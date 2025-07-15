"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./store/index";
import LayoutWrapper from "./components/LayoutWrappper"; // wherever you place it

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Provider>
      </body>
    </html>
  );
}
