import { TemplateData } from "@app/modules/db";
import { WithId } from "mongodb";
import { EditButton } from "./EditButton";
import { ExportButton } from "./ExportButton";

interface AssetElementProps {
  template: WithId<TemplateData>;
};

export const AssetElement = (props: AssetElementProps) => {
  const template = props.template;
  return(
      <div>
        <div className='grid grid-cols-7 p-4 items-center auto-rows-[40px]'>

          <div className='relative align-baseline col-span-1'>
            <h1 className='text-lg '>{template._id}</h1>
          </div>

          <div className="col-span-1">
            <h2 className='text-lg'>{template.Name}</h2>
          </div>

          <div className="col-span-1">
              <h2 className='text-lg'>{template.DateCreated}</h2>
          </div>

          <div className="col-span-1">
              <h2 className='text-lg'>{template.LastModified}</h2>
          </div>

          <div className='col-span-1 col-start-6 px-0.5'> {/* breakpoints needed to stop it from going over 2 lines on smaller screen OR more elegant solution */}
            <EditButton templateId={template._id} />
          </div>

          <div className='col-span-1 col-start-7 px-0.5'> {/* breakpoints needed to stop it from going over 2 lines on smaller screen OR more elegant solution */}
            <ExportButton page='home' templateID={template._id} />
          </div>

        </div>
        <hr className='w-[95%] mx-auto'></hr>
      </div>

    );
}