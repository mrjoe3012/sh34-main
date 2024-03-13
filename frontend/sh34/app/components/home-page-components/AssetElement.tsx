//import {useClient} from 'next/client';
import { TemplateData } from "@app/modules/db";
import { WithId } from "mongodb";
import { EditButton } from "./EditButton";
import { ExportButton } from "@app/components/home-page-components/ExportButton";


interface AssetElementProps {
  template: WithId<TemplateData>;
};

function timeAgo(dateString: string) {
  if (new Date(dateString) > new Date() || isNaN(new Date(dateString).getTime())) {
    return "Invalid Date"
  }
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.round((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const months = Math.round(days / 30);
  const years = Math.round(days / 365);

  if (seconds < 60) {
    return 'Just Now';
  } else if (minutes < 60) {
    return `${minutes} Minutes Ago`;
  } else if (hours < 24) {
    return `${hours} Hours Ago`;
  } else if (days < 30) {
    return `${days} Days Ago`;
  } else if (months < 12) {
    return `${months} Months Ago`;
  } else {
    return `${years} Years Ago`;
  }
}

export const AssetElement = (props: AssetElementProps) => {
  return(
      <div>
        <div className='grid grid-cols-7 p-4 items-center auto-rows-[40px]'>

          <div className='relative align-baseline col-span-1'>
            <h1 className='text-lg '>{props.template._id}</h1>
          </div>

          <div className="col-span-1">
            <h2 className='text-lg'>{props.template.Name}</h2>
          </div>

          <div className="col-span-1">
              <h2 className='text-lg'>{props.template.DateCreated}</h2>
          </div>

          <div className="col-span-1">
            {timeAgo(props.template.LastModified)}
          </div>

          <div className='col-span-1 col-start-6 px-0.5'> {/* breakpoints needed to stop it from going over 2 lines on smaller screen OR more elegant solution */}
            <EditButton templateId={props.template._id} />
          </div>

          <div className='col-span-1 col-start-7 px-0.5'> {/* breakpoints needed to stop it from going over 2 lines on smaller screen OR more elegant solution */}
            <ExportButton page='home' templateID={props.template._id} />
          </div>

        </div>
        <hr className='w-[95%] mx-auto'></hr>
      </div>

    );
}