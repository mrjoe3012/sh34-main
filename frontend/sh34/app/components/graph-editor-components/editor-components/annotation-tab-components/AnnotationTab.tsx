import { OptionTabTitle } from "../OptionTabTitle"
import { NewAnnotationButton } from "./annotation-options/NewAnnotationButton"
import { Annotation } from "./annotation-options/Annotation"
import { useConfig } from "@app/graph-editor/ConfigContext"
import { useState,useEffect } from "react"


export const AnnotationTab = () => {

    const {config} = useConfig()
    const [annotationList, setAnnotationList] = useState(<div></div>)

    useEffect(()=> {
        if (config === null) return;
        var annotations = config.annotations
        setAnnotationList(
            <>
                {
                    annotations.map((annotation, index) => (
                        <Annotation key={index} annotation={annotation} />
                    ))
                }
            </>
        )
    },[config])

    return(
        <div className="w-full">
            <OptionTabTitle titleName="Annotation Options" />
            <NewAnnotationButton />

            <div className="w-full flex flex-col gap-y-5 mt-5 pb-5">
                {annotationList}
            </div>

        </div>
    )
}