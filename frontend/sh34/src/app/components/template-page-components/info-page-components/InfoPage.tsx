import { TemplateNameInput } from "./TemplateNameInput";
import { TemplateDescriptionInput } from "./TemplateDescriptionInput";
import { TemplateLastModified } from "./TemplateLastModified";

export const InfoPage = () => {

    return (
        <div className="">
            
            <div className="flex flex-row mb-8 justify-between">
                <TemplateNameInput />
                <TemplateLastModified />
            </div>

            <TemplateDescriptionInput />

            <p className="text-2xl"> Tags </p>
            <div className="flex justify-between">
                <div>
                    <div className={`text-xl font-medium h-[60px] w-[700px] bg-[#E7E7E7] rounded-xl flex pl-4`}>
                        <div className="bg-[#B9B9B9] flex items-center my-2 px-5 rounded-lg"> <p>Tag</p> </div>
                    </div>
                </div>
                <div className={`text-center text-xl font-medium text-white h-[60px] w-[150px] bg-[#D72A2A] rounded-xl flex justify-center items-center border-[2px] border-slate-700`}>
                    <p> Delete </p>
                </div>
            </div>


        </div>
      )

  };