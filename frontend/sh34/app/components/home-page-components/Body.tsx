'use client';
import { HomePageContextProvider } from "@app/home/HomePageContext";
import Header from "./Header";
import { TemplateList } from "./TemplateList";
import { TemplateData } from "@app/modules/db";
import { WithId } from "mongodb";

interface bodyProps {templates: WithId<TemplateData>[]}

export default function Body(props: bodyProps) {
    return (
        <HomePageContextProvider templates={props.templates}>
      <div className="bg-white mx-10">
        <Header />
        <div className='mx-5'>
            <TemplateList />
        </div>
      </div>
      </HomePageContextProvider>
    );
}