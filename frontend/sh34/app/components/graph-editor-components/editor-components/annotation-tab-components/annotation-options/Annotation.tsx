import { useState } from "react"
import { OptionComponentTitle } from "../../OptionComponentTitle"
import { TwoTabSwitcher } from "../../generic-components/GenericTwoTabSwitcher"
import { GenericTextInputOption } from "../../generic-components/GenericTextInputOption"
import { GenericSizeIncrementerOption } from "../../generic-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../generic-components/GenericColourOption"
import { AnnotationLineOptions } from "./AnnotationLineOptions"
import { AnnotationType } from "@app/graph-editor/configjsoninterface"
import { useConfig } from "@app/graph-editor/ConfigContext"
import Image from "next/image"
import TrashIcon from "../../../../../images/trash-icon.svg"

interface AnnotationProps {
    annotation: AnnotationType
}

export const Annotation = (props: AnnotationProps) => {

    const {config,setConfig} = useConfig()
    const [showArrowOptions, setShowArrowOptions] = useState(<div></div>);

    const changeAnnotationFontColour = (inputValue: string) => {

        if (inputValue=="") { return }

        const updatedAnnotations = config.annotations.map(annotation => {
            if (annotation.id === props.annotation.id) {
                return {
                    ...annotation,
                    styling: {
                        ...annotation.styling,
                        fontColour: "#" + inputValue
                    }
                };
            }
            return annotation;
        });

        setConfig({
            ...config,
            annotations: updatedAnnotations
        });
        
        console.log("Changed Annotation Font Colour to " + inputValue);
    }

    const changeAnnotationXPos = (inputValue: string) => {
        // Enter logic for changing the annotation's x pos

        const updatedAnnotations = config.annotations.map(annotation => {
            if (annotation.id === props.annotation.id) {
                return {
                    ...annotation,
                    xPos: Number(inputValue)
                };
            }
            return annotation;
        });

        setConfig({
            ...config,
            annotations: updatedAnnotations
        });

        console.log("Changed Annotation X Pos to " + inputValue);
    }

    const changeAnnotationYPos = (inputValue: string) => {
        // Enter logic for changing annotations y pos

        const updatedAnnotations = config.annotations.map(annotation => {
            if (annotation.id === props.annotation.id) {
                return {
                    ...annotation,
                    yPos: Number(inputValue)
                };
            }
            return annotation;
        });

        setConfig({
            ...config,
            annotations: updatedAnnotations
        });
        
        console.log("Changed Annotation Y Pos to " + inputValue);
    }

    const changeAnnotationFontSize = (inputValue: string) => {
        // Enter logic for changing annotation font size

        const updatedAnnotations = config.annotations.map(annotation => {
            if (annotation.id === props.annotation.id) {
                return {
                    ...annotation,
                    styling: {
                        ...annotation.styling,
                        fontSize: Number(inputValue)
                    }
                };
            }
            return annotation;
        });

        setConfig({
            ...config,
            annotations: updatedAnnotations
        });
        
        console.log("Changed annotation font size to " + inputValue);
    }

    const changeAnnotationText = (inputValue: string) => {
        // Enter logic for changing annotation text

        const updatedAnnotations = config.annotations.map(annotation => {
            if (annotation.id === props.annotation.id) {
                return {
                    ...annotation,
                    text: inputValue
                };
            }
            return annotation;
        });

        setConfig({
            ...config,
            annotations: updatedAnnotations
        });
    
        console.log("Changed annotation text to " + inputValue);
    }

    const showAnnotationArrow = () => {

        const updatedAnnotations = config.annotations.map(annotation => {
            if (annotation.id === props.annotation.id) {
                return {
                    ...annotation,
                    showArrow: true
                };
            }
            return annotation;
        });

        setConfig({
            ...config,
            annotations: updatedAnnotations
        });

    }

    const hideAnnotationArrow = () => {

        const updatedAnnotations = config.annotations.map(annotation => {
            if (annotation.id === props.annotation.id) {
                return {
                    ...annotation,
                    showArrow: false
                };
            }
            return annotation;
        });

        setConfig({
            ...config,
            annotations: updatedAnnotations
        });

    }

    const deleteAnnotation = () => {
        const updatedAnnotations = config.annotations.filter(annotation => annotation.id !== props.annotation.id);

        setConfig({
            ...config,
            annotations: updatedAnnotations
        });
    
    }

    return (
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <div className="flex flex-row">
                <div className="flex-grow"><OptionComponentTitle optionName={`Trace ${props.annotation.id}`} /></div>
                <button onClick={deleteAnnotation} className="basis-[10%] ml-2"> <Image className="self-center" src={TrashIcon} alt="delete"></Image></button>
            </div>
            <div className="mt-3 flex flex-col gap-y-1">
                < GenericTextInputOption contentOnRender={props.annotation.name} plotFunction={changeAnnotationText} placeholder="Annotation Text" labelName="Text" displayLabel={true} width="" textPos="" />
                < GenericSizeIncrementerOption contentOnRender={props.annotation.xPos} plotFunction={changeAnnotationXPos} labelName="X-Pos" displayLabel={true} />
                < GenericSizeIncrementerOption contentOnRender={props.annotation.yPos} plotFunction={changeAnnotationYPos} labelName="Y-Pos" displayLabel={true} />
                < GenericSizeIncrementerOption contentOnRender={props.annotation.styling.fontSize} plotFunction={changeAnnotationFontSize} labelName="Font Size" displayLabel={true} />
                < GenericColourOption contentOnRender={props.annotation.styling.fontColour.slice(1)} plotFunction={changeAnnotationFontColour} labelName="Colour" displayLabel={true} />
                <div className="mx-3"><OptionComponentTitle optionName="Arrow Settings" /></div>
                <TwoTabSwitcher firstOptionFunction={hideAnnotationArrow} secondOptionFunction={showAnnotationArrow} switchTabFunction={setShowArrowOptions} firstTabContent={<div></div>} secondTabContent={<AnnotationLineOptions annotation={props.annotation}/>} switcherLabel1="Hide" switcherLabel2="Show" />
                {showArrowOptions}
            </div>
        </div>
    )
}