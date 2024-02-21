import { OptionTabTitle } from "../OptionTabTitle";
import { NewTraceButton } from "./trace-options/NewTraceButton";
import { Trace } from "./trace-options/Trace";
import { useConfig } from "@app/graph-editor/ConfigContext";
import { useState, useEffect } from "react";

export const TraceTab = () => {

    const {config} = useConfig()
    const [traceList, setTraceList] = useState(<div></div>)

    useEffect(()=> {
        var traces = config.traces
        setTraceList(
            <>
                {
                    traces.map((trace, index) => (
                        <Trace key={index} trace={trace} />
                    ))
                }
            </>
        )
    },[config])



    return(
        <div className="w-full">

            <OptionTabTitle titleName="Trace Options" />
            <NewTraceButton />

            <div className="w-full flex flex-col gap-y-5 mt-5 pb-5">
                {traceList}
            </div>
        </div>
    )
}