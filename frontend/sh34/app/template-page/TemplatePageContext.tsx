"use client";
import { PlotData, TemplateData } from "@app/modules/db";
import { WithId } from "mongodb";
import React, { ReactNode, useState } from "react";
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
        throw new Error("useTemplatePageContext msut be used within a ConfigProvider");
    }
    return context;
};

export interface TemplatePageContextProps {
    children: ReactNode,
    template: WithId<TemplateData>,
    plots: WithId<PlotData>[]
};

export const TemplatePageContextProvider = (props: TemplatePageContextProps) => {
    const [template, setTemplate] = useState<WithId<TemplateData>>(props.template);
    const [plots, setPlots] = useState<WithId<PlotData>[]>(props.plots);
    return (
        <TemplatePageContext.Provider value={{template, setTemplate, plots, setPlots}}>
            {props.children}
        </TemplatePageContext.Provider>
    )
}
