"use client";
import { TemplateData } from "@app/modules/db";
import { WithId } from "mongodb";
import React, { ReactNode, SetStateAction, useState } from "react";
import { useContext } from "react";

export interface HomePageContextType { 
    templates: WithId<TemplateData>[],
    setTemplates: React.Dispatch<React.SetStateAction<WithId<TemplateData>[]>>,
    needSorting: boolean,
    setNeedSorting: React.Dispatch<React.SetStateAction<boolean>>,
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
    setTemplates: React.Dispatch<SetStateAction<WithId<TemplateData>[]>>,
    needSorting: boolean,
    setNeedSorting: React.Dispatch<React.SetStateAction<boolean>>,
};

export const HomePageContextProvider = (props: HomePageContextProps) => {
    const needSorting = props.needSorting;
    const setNeedSorting = props.setNeedSorting;
    const templates = props.templates;
    const setTemplates = props.setTemplates;
    return (
        <HomePageContext.Provider value={{templates, setTemplates, needSorting, setNeedSorting}}>
            {props.children}
        </HomePageContext.Provider>
    )
}
