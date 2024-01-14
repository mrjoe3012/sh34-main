import { TemplateNameInput } from "./TemplateNameInput";
import { TemplateDescriptionInput } from "./TemplateDescriptionInput";
import { TemplateLastModified } from "./TemplateLastModified";
import { WithId } from "mongodb";
import { TemplateData } from "@app/modules/db";

interface InfoPageProps {
    template: WithId<TemplateData>;
};

export const InfoPage = (props: InfoPageProps) => {
    const template = props.template;
    return (
        <div className="">
            
        <div className="flex flex-row mb-8 justify-between">
            <TemplateNameInput name={template.Name} />
            <TemplateLastModified lastModified={template.LastModified} />
        </div>

        <TemplateDescriptionInput description={template.Description} />

        <p className="text-2xl"> Tags </p>
        <div className="flex justify-between">
            <div>
                <div className={`text-xl font-medium h-[60px] w-[700px] bg-[#E7E7E7] rounded-xl flex pl-4`}>
                    {template.Tags.map((tag, idx) => {
                        return (
                            <Tag tagText={tag} key={idx}></Tag>
                        )
                    })}
                </div>
            </div>
            <div className={`text-center text-xl font-medium text-white h-[60px] w-[150px] bg-[#D72A2A] rounded-xl flex justify-center items-center border-[2px] border-slate-700`}>
                <p> Delete </p>
            </div>
        </div>


        </div>
    )

};

interface TagProps {
    tagText: string;
};

const Tag = (props: TagProps) => {
    return (
        <div className="bg-[#B9B9B9] flex items-center my-2 px-5 rounded-lg">
            <p>{props.tagText}</p>
        </div>
    )
}

