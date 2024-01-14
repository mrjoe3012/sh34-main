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
                    <div className={`text-xl font-medium w-[700px] bg-[#E7E7E7] rounded-xl flex px-4 gap-x-1 overflow-x-auto `}>
                        <div className="bg-[#c2cbed] text-gray-900 w-fit px-2 py-1 rounded-xl flex items-center my-2 h-12"> <p className="px-2">Tag</p> </div>
                    </div>
                
                <div className={`text-center text-xl font-medium text-white h-[60px] w-[150px] bg-[#D72A2A] rounded-xl flex justify-center items-center border-[2px] border-slate-700`}>
                    <p> Delete </p>
                </div>
            </div>


        </div>
      )

  };