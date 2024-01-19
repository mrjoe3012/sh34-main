import { OptionTabTitle } from "../OptionTabTitle";
import { NewTraceButton } from "./trace-options/NewTraceButton";
import { Trace } from "./trace-options/Trace";

import configjson from "../../../../config.json"

export const TraceTab = () => {

    const traces = configjson["traces"]

    return(
        <div className="w-full">

            <OptionTabTitle titleName="Trace Options" />
            <NewTraceButton />

            <div className="w-full flex flex-col gap-y-5 mt-5">
                {
                    traces.map((trace, index) => (
                        <Trace key={index} trace={trace} />
                    ))
                }
            </div>
        </div>
    )
}