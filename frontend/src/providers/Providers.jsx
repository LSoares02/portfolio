import React from "react";
import { LanguageProvider } from "../translate/LanguageProvider";
import ThemeWrapper from "../theme/ThemeProvider";

const Providers = ({ children }) => {
  return (
    <LanguageProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </LanguageProvider>
  );
};

export default Providers;
