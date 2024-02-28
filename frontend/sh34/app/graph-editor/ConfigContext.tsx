"use client";
import React, { ReactNode, useEffect} from "react";
import { useContext, useState } from "react";
import { Config } from "@app/modules/Config";
import { PlotData, TemplateData } from "@app/modules/db";
import { WithId } from "mongodb";
import { PlotLoader } from "@app/modules/PlotLoader";
import { TemplateLoader } from "@app/modules/TemplateLoader";
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
    config: Config | null;
    template: WithId<TemplateData> | null;  // the parent template for the plot
    setConfig: React.Dispatch<React.SetStateAction<Config | null>>;
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
    children: ReactNode, // This tells TypeScript that children can be any valid React node
    id: number, // plot id
}

async function updatePlotConfig(id: number, config: Config): Promise<void> {
    const response = await fetch(
        '/api/update-plot-config', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                'plotId' : id,
                'plotConfig' : config,
            }),
        }
    );
    if (response.status != 200) {
        console.error(`Failed to update plot config. id: ${id} config: ${config}`);
    }
}
  
export const ConfigProvider: React.FC<ConfigProviderProps> = (props: ConfigProviderProps) => {
    const [plot, setPlot] = useState<WithId<PlotData> | null>(null);
    const [config, setConfig] = useState<Config | null>(null);
    const [template, setTemplate] = useState<WithId<TemplateData> | null>(null);
    const [loadedPlot, setLoadedPlot] = useState<boolean>(false);
    const [loadedTemplate, setLoadedTemplate] = useState<boolean>(false);

    useEffect(() => {
        const loadPlot = async () => {
            if (loadedPlot)
                return;
            const loader = new PlotLoader();
            const plots = await loader.loadPlots({'_id' : props.id});
            if (plots.length > 0) {
                setPlot(plots[0]);
                setConfig(plots[0].config_file)
                setLoadedPlot(true);
            }
        };
        const loadTemplate = async () => {
            if (loadedTemplate)
                return;
            const loader = new TemplateLoader();
            const template = await loader.loadTemplateFromPlot(props.id);
            if (template != null) {
                setTemplate(template);
                setLoadedTemplate(true);
            }
        };
        loadPlot();
        loadTemplate();
        const id1 = setInterval(loadPlot, 5000);
        const id2 = setInterval(loadTemplate, 5000);
        return () => {
            clearInterval(id1);
            clearInterval(id2);
        }
    }, []);

    useEffect(() => {
        if (plot != null && config != null)
            updatePlotConfig(plot._id, config);
    }, [config]);

    // At the top of this function, we created a config state with an initial state of {}.
    // This checks to see if the config state is still empty. If it is, instead of returning any components,
    // return a simple loading div.
    if (config == null || plot == null || template == null) {
        return <div className="bg-red-500"></div>;
    }

    return (
        <ConfigContext.Provider value={{ config, setConfig, template }}>
            { props.children }
        </ConfigContext.Provider>
    );
};