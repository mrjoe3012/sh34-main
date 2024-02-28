"use client";
import { PlotLoader } from "@app/modules/PlotLoader";
import { PlotData, TemplateData } from "@app/modules/db";
import { WithId } from "mongodb";
import React, { ReactNode, useEffect, useState } from "react";
import { useContext } from "react";

export interface TemplatePageContextType {
    template: WithId<TemplateData>,
    setTemplate: React.Dispatch<React.SetStateAction<WithId<TemplateData>>>,
    plots: WithId<PlotData>[],
    setPlots: React.Dispatch<React.SetStateAction<WithId<PlotData>[]>>,
};

export const TemplatePageContext = React.createContext<TemplatePageContextType | undefined>(undefined);

export const useTemplatePageContext = () => {
    const context = useContext(TemplatePageContext);
    if (!context) {
        throw new Error("useTemplatePageContext must be used within a ConfigProvider");
    }
    return context;
};

export interface TemplatePageContextProps {
    children: ReactNode,
    template: WithId<TemplateData>,
};

export const TemplatePageContextProvider = (props: TemplatePageContextProps) => {
    const [template, setTemplate] = useState<WithId<TemplateData>>(props.template);
    const [plots, setPlots] = useState<WithId<PlotData>[]>([]);
    const [plotsLoaded, setPlotsLoaded] = useState<boolean>(false);

    // Function to handle updating DB when changes are applied to the template
    useEffect(() => {
        const updateTemplate = async () => {

            try {
                const response = await fetch('/api/db/update-template', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        'templateID': template._id,
                        'newTemplate': template,
                    }),
                });

                if (response.status !== 200) {
                    console.error(`Failed to update template. Status: ${response.status}`);
                } else {
                    console.log("Seems good mate");
                }
            } catch (error) {
                console.error(`Failed to update template. Error: ${error}`);
            }
        };

        // Call the async function
        updateTemplate();
    }, [template]);

    // Function to handle updating DB when changes are applied to the plots
    useEffect(()=> {
        const updatePlots = async () => {
            console.log("Attempting to update plots")
            try {
                const response = await fetch('/api/db/update-template-plots', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        'plotsToUpdate': plots
                    }),
                });

                if (response.status !== 200) {
                    console.error(`Failed to update template. Status: ${response.status}`);
                } else {
                    console.log("Seems good mate");
                }
            } catch (error) {
                console.error(`Failed to update template. Error: ${error}`);
            }
        };

        // Call the async function
        updatePlots();
    }, [plots])


    useEffect(() => {
        const loadPlots = async () => {
            if (plotsLoaded)
                return;
            const loader = new PlotLoader();
            const plots = await loader.loadPlotsFromTemplate(template._id);
            if (plots.length > 0) {
                setPlots([...plots]);
                setPlotsLoaded(true);
            }
        };
        loadPlots();
        const intervalId = setInterval(loadPlots, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <TemplatePageContext.Provider value={{template, setTemplate, plots, setPlots}}>
            {props.children}
        </TemplatePageContext.Provider>
    )
}
