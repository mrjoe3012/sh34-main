'use client';
import { ChangeEvent, useState } from "react";

interface TemplateNameInputProps {
    name: string;
};

export const TemplateNameInput = (props: TemplateNameInputProps) => {
    const [name, setName] = useState(props.name);
    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    return (
        <div>
            <p className="text-2xl"> Name </p>
            <input 
            value={name}
            onChange={onNameChange}
            className="text-xl font-medium placeholder-[#ACACAC] h-[60px] w-[500px] bg-[#E7E7E7] rounded-xl flex items-center pl-4 outline-none focus:ring-2 focus:ring-RES_ORANGE" />
        </div>
    );
}