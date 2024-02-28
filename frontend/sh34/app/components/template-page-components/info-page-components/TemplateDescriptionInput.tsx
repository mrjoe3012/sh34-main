'use client';
import { ChangeEvent } from "react";
import { useState } from "react";
import { WithId } from "mongodb";
import { TemplateData } from "@app/modules/db";
import { Dispatch, SetStateAction } from 'react';

interface TemplateDescriptionInputProps {
    template: WithId<TemplateData>;
    setTemplate: Dispatch<SetStateAction<WithId<TemplateData>>>;
};

export const TemplateDescriptionInput = (props: TemplateDescriptionInputProps) => {
    const [desc, setDesc] = useState(props.template.Description);
    const onDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDesc(event.target.value);
        props.setTemplate(currentTemplate => ({
            ...currentTemplate,
            Description: event.target.value
        }));
    };
    return (
        <div className="mb-10">
            <p className="text-2xl"> Template Description </p>
            <textarea
            value={desc}
            onChange={onDescriptionChange}
            maxLength={300}
            className="resize-none text-xl font-medium placeholder-[#ACACAC] h-[250px] w-[600px] bg-[#E7E7E7] rounded-xl pt-5 px-4 outline-none focus:ring-2 focus:ring-RES_ORANGE" />
        </div>
    );
}