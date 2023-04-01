export type Locale = {
  name: string;
  code: "en" | "zh" | "ru" | "fr";
  lang: string;
};

const localeList: Locale[] = [
  { name: "English", code: "en", lang: "English" },
  { name: "中文", code: "zh", lang: "Chinese" },
  { name: "русский", code: "ru", lang: "Russian" },
  { name: "Française", code: "fr", lang: "French" },
];
