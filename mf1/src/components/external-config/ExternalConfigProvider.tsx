import { externalConfigContext } from "./ExternalConfigContext";
import { ReactNode } from "react";
export function ExternalConfigProvider({
  children,
  externalConfig,
}: {
  children: ReactNode;
  externalConfig: ExternalConfig;
}) {
  return (
    <externalConfigContext.Provider value={externalConfig}>
      {children}
    </externalConfigContext.Provider>
  );
}
