import { useConfig } from "@app/graph-editor/ConfigContext";
import Link from "next/link";
import Image from "next/image";
import LongLeftArrow from "@app/images/long-arrow-left-icon.svg"


export const ReturnButton = () => {
    const {template} = useConfig();
    if (template === null) return <div></div>
    return (
        <div className='p-2'>
            <Link href={`/template-page/${template._id.toString()}`}>
                <div className="flex items-center gap-x-2">
                    <Image src={LongLeftArrow} alt="arrow" className="w-4 h-4" />
                    <p>Return to Template</p>
                </div>
            </Link>
        </div>
    );
  };