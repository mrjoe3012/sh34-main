"use client";
import { TemplateData } from "@app/modules/db";
import { WithId } from "mongodb";
import React, { ReactNode, useState } from "react";
import { useContext } from "react";

export interface HomePageContextType { 
    templates: WithId<TemplateData>[],
    setTemplates: React.Dispatch<React.SetStateAction<WithId<TemplateData>[]>>,
};

export const HomePageContext = React.createContext<HomePageContextType | undefined>(undefined);

export function useHomePageContext() {
    const context = useContext(HomePageContext);
    if (!context) {
        throw new Error("useHomePageContext msut be used within a ConfigProvider");
    }
    return context;
};

export interface HomePageContextProps {
    children: ReactNode,
    templates: WithId<TemplateData>[],
};

export const HomePageContextProvider = (props: HomePageContextProps) => {
    const [templates, setTemplates] = useState<WithId<TemplateData>[]>(props.templates);
    console.log("Homepagecontex");
    return (
        <HomePageContext.Provider value={{templates, setTemplates}}>
            {props.children}
        </HomePageContext.Provider>
    );
};
