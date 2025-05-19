import React from "react";
import ReactDOM from "react-dom/client";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";

import AppRoutes from "./routes/AppRoutes";

import "./index.css";

import { messages } from "./locales/vi/messages.po";
i18n.load("vi", messages);
i18n.activate("vi");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nProvider i18n={i18n}>
      <AppRoutes />
    </I18nProvider>
  </React.StrictMode>,
);
