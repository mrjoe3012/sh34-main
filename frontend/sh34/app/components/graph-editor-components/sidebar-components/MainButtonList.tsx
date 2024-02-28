import { MainButton } from "./MainButton";
import { useConfig } from "@app/graph-editor/ConfigContext";
import Link from "next/link";


export const MainButtonList = () => {
    const {template} = useConfig(); 

    return (
        <div className='flex flex-col mt-auto mb-5'>
            <MainButton buttonName="View Config" buttonColour="bg-[#91a2a8]" imgSrc="" onClick={()=>{}}/>
            <Link href={`/template-page/${template._id.toString()}`}>
                <MainButton buttonName="Finish" buttonColour="bg-[#346DFF]" imgSrc="" onClick={() => {}}/>
            </Link>
        </div>

    );
  };