import { useConfig } from "@app/graph-editor/ConfigContext";
import Link from "next/link";


export const ReturnButton = () => {
    const {template} = useConfig(); 
    return (
        <div className='p-2'>
            <Link href={`/template-page/${template._id.toString()}`}>
                <p>Return to Template</p>
            </Link>
        </div>
    );
  };