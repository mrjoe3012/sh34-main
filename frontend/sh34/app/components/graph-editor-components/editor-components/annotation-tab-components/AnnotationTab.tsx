import { OptionTabTitle } from "../OptionTabTitle"
import { NewAnnotationButton } from "./annotation-options/NewAnnotationButton"
import { Annotation } from "./annotation-options/Annotation"


export const AnnotationTab = () => {
    return(
        <div className="w-full">
            <OptionTabTitle titleName="Annotation Options" />
            <NewAnnotationButton />

            <div className="w-full flex flex-col gap-y-5 mt-5">
                <Annotation />
            </div>

        </div>
    )
}