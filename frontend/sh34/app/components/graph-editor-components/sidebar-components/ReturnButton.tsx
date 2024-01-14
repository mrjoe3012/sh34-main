import { PlotOptionsContext } from "@app/graph-editor/PlotOptionsContext";
import Link from "next/link";
import { useContext } from "react";

export const ReturnButton = () => {
    const { templateId } = useContext(PlotOptionsContext);
    return (
        <div className='p-2'>
            <Link href={`/template-page/${templateId}`}>
                <p>Return to Template</p>
            </Link>
        </div>
    );
  };