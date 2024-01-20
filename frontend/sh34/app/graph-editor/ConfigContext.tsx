import React, { ReactNode} from "react";
import { useEffect, useContext, useState } from "react";
import { Config } from "./configjsoninterface";

// This ConfigContext is created so that any children will have access to the ConfigJSON that is loaded into this Config's state.
// It has been created this way so that when any children modify the config state from this context, React will know this,
// meaning that elsewhere we can use a useEffect that runs when config changes. This is very useful in our case, ie when
// a change is made to config, we can use a useEffect to send a request to the backend to rerender the plot, meaning we don't
// need a refresh button anymore.
// Also, the way it has been created, it ensures that ConfigJSON has been loaded in (it is being loaded locally just now,
// but this will soon be from the database), and if ConfigJSON has not been loaded in then it blocks the rendering of children.
// This means you do not need to check if config isnt null in every single child component that uses the config from this context, 
// because it is guaranteed to have been loaded already.



// Define the Generic Type that the Config Context will be
export interface ConfigContextType {
    config: Config;
    setConfig: React.Dispatch<React.SetStateAction<Config>>;
}


// Create the actual ConfigContext
export const ConfigContext = React.createContext<ConfigContextType | undefined>(undefined);


// This is a custom hook that is used in any of the children components.
// Instead of importing "ConfigContext" and "useContext" in every child, you only need to import this to have access to the context.
// In addition, this ensures that the ConfigContext is only used in children of a ConfigProvider
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

    // This useEffect runs whenever the ConfigProvider Context is called. Currenty, it tries to locally import the ConfigJSON.
    // When we integrate the database, this should change to importing the ConfigJSON from the correct plot record in the DB.
    useEffect(() => {
        import("../config.json")
        .then((importedConfig: { default: Config }) => {
            setConfig(importedConfig.default);
        })
        .catch((error) => console.error("Failed to locally import config: " + error))
    }, []);

    // At the top of this function, we created a config state with an initial state of {}.
    // This checks to see if the config state is still empty. If it is, instead of returning any components,
    // return a simple loading div.
    if (Object.keys(config).length === 0) {
        return <div className="">Loading...</div>;
    }

    return (
        <ConfigContext.Provider value={{ config, setConfig }}>
        {children}
        </ConfigContext.Provider>
    );
};