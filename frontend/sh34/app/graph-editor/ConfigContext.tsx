import React, { ReactNode} from "react";
import { useEffect, useContext, useState } from "react";
import { Config } from "./configjsoninterface";

// Define the Type that the Config Context will be
export interface ConfigContextType {
    config: Config;
    setConfig: React.Dispatch<React.SetStateAction<Config>>;
  }
  
  // Create the ConfigContext
  export const ConfigContext = React.createContext<ConfigContextType>({} as ConfigContextType);
  
  export const useConfig = () => {
    const context = useContext(ConfigContext);
    if (!context) {
      throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
  };
  
  interface ConfigProviderProps {
    children: ReactNode; // This tells TypeScript that children can be any valid React node
  }
  
  export const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
    const [config, setConfig] = useState<Config>({} as Config);
  
    useEffect(() => {
      import("../config.json")
        .then((importedConfig: { default: Config }) => {
          setConfig(importedConfig.default);
        })
        .catch((error) => console.error("Failed to locally import config"))
    }, []);
  
    // Render nothing or a loading spinner until the config is loaded
    if (Object.keys(config).length === 0) {
      return <div>Loading...</div>;
    }
  
    return (
      <ConfigContext.Provider value={{ config, setConfig }}>
        {children}
      </ConfigContext.Provider>
    );
  };