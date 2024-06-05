import React, { createContext, useContext, ReactNode } from "react";

interface LocaleProviderProps {
  children: ReactNode;
  locale: string;
}

const LocaleContext = createContext<string | undefined>(undefined);

export const useLocale = (): string => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};

export const LocaleProvider: React.FC<LocaleProviderProps> = ({
  children,
  locale,
}) => {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
};
