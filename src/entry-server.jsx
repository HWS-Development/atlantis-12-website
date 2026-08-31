import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppContent } from "./App";
import i18n from "./i18n";

export async function render(path, language) {
  await i18n.changeLanguage(language);
  const basename = language === "en" ? "/en" : undefined;
  const location = language === "en" ? `/en${path === "/" ? "" : path}` : path;
  return renderToString(
    <StaticRouter basename={basename} location={location}>
      <AppContent />
    </StaticRouter>
  );
}
