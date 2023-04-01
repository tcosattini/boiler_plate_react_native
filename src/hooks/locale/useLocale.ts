import { useState } from "react";
import { Locale } from "../../locales/locales";

export const useLocale = () => {
  const [localeData, setLocaleData] = useState({});

  const getLocaleData = (data: any, localeCode: Locale["code"]) => {};
};
