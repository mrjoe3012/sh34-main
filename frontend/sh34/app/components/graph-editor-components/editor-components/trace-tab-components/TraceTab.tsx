import { OptionTabTitle } from "../OptionTabTitle";
import { NewTraceButton } from "./trace-options/NewTraceButton";
import { Trace } from "./trace-options/Trace";

export const TraceTab = () => {
    return(
        <div className="w-full">

            <OptionTabTitle titleName="Trace Options" />
            <NewTraceButton />

            <div className="w-full flex flex-col gap-y-5 mt-5">
                <Trace />
            </div>
        </div>
    )
}