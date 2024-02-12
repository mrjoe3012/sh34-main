"use client";
import { TemplateData } from "@app/modules/db";
import { WithId } from "mongodb";
import React, { ReactNode, useState } from "react";
import { useContext } from "react";

export interface HomePageContextType { 
    templates: WithId<TemplateData>[],
    setTemplates: React.Dispatch<React.SetStateAction<WithId<TemplateData>[]>>,
    plotsNeedSorting: boolean,
    setPlotsNeedSorting: React.Dispatch<React.SetStateAction<boolean>>,
};

export const HomePageContext = React.createContext<HomePageContextType | undefined>(undefined);

export const useHomePageContext = () => {
    const context = useContext(HomePageContext);
    if (!context) {
        throw new Error("useHomePageContext msut be used within a Homepage context Provider");
    }
    return context;
};

export interface HomePageContextProps {
    children: ReactNode,
    templates: WithId<TemplateData>[],
};

export const HomePageContextProvider = (props: HomePageContextProps) => {
    const [templates, setTemplates] = useState<WithId<TemplateData>[]>(props.templates);
    const [plotsNeedSorting, setPlotsNeedSorting] = useState<boolean>(false);
    return (
        <HomePageContext.Provider value={{templates, setTemplates, plotsNeedSorting, setPlotsNeedSorting}}>
            {props.children}
        </HomePageContext.Provider>
    )
}
