'use client';
import { ChangeEvent, useEffect, useState } from "react";
import { WithId } from "mongodb";
import { TemplateData } from "@app/modules/db";
import { Dispatch, SetStateAction } from 'react';

interface TemplateNameInputProps {
    template: WithId<TemplateData>;
    setTemplate: Dispatch<SetStateAction<WithId<TemplateData>>>;
};

function useDebounce(value: string, delay:number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
}


export const TemplateNameInput = (props: TemplateNameInputProps) => {
    const [name, setName] = useState(props.template.Name);
    const debouncedName = useDebounce(name, 500);

    useEffect(()=>{
        if (debouncedName) {
            props.setTemplate(currentTemplate => ({
                ...currentTemplate,
                Name: debouncedName,
                LastModified: String(new Date())
            }));
        }
    },[debouncedName])

    return (
        <div>
            <p className="text-2xl"> Name </p>
            <input
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="text-xl font-medium placeholder-[#ACACAC] h-[60px] w-[500px] bg-[#E7E7E7] rounded-xl flex items-center pl-4 outline-none focus:ring-2 focus:ring-RES_ORANGE" />
        </div>
    );
}