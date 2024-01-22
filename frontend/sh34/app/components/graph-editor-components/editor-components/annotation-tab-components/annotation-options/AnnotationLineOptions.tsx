import { GenericSizeIncrementerOption } from "../../generic-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../generic-components/GenericColourOption"
import { AnnotationType } from "@app/graph-editor/configjsoninterface"
import { useConfig } from "@app/graph-editor/ConfigContext"

interface AnnotationProps {
    annotation: AnnotationType;
}

export const AnnotationLineOptions = (props: AnnotationProps) => {

    const {config, setConfig} = useConfig()

    const changeAnnotationLineColour = (inputValue: string) => {
        // Enter logic for changing the annotation line colour

        if (config && Array.isArray(config.annotations)) {
            const updatedAnnotations = config.annotations.map(annotation => {
                if (annotation.id === props.annotation.id) {
                    return {
                        ...annotation,
                        arrowColour: inputValue
                    };
                }
                return annotation;
            });

            setConfig({
                ...config,
                annotations: updatedAnnotations
            });
        }

        console.log("Annotation Line Colour changed to " + inputValue); 
    }

    const changeAnnotationLineWidth = (inputValue: string) => {
        // Enter logic for changing the annotation line width

        if (config && Array.isArray(config.annotations)) {
            const updatedAnnotations = config.annotations.map(annotation => {
                if (annotation.id === props.annotation.id) {
                    return {
                        ...annotation,
                        arrowWidth: Number(inputValue)
                    };
                }
                return annotation;
            });

            setConfig({
                ...config,
                annotations: updatedAnnotations
            });
        }

        console.log("Annotation Line Width changed to " + inputValue); 
    }

    const changeAnnotationLineXOffset = (inputValue: string) => {
        // Enter logic for changing the annotation line x offset

        if (config && Array.isArray(config.annotations)) {
            const updatedAnnotations = config.annotations.map(annotation => {
                if (annotation.id === props.annotation.id) {
                    return {
                        ...annotation,
                        arrowOffsetX: Number(inputValue)
                    };
                }
                return annotation;
            });

            setConfig({
                ...config,
                annotations: updatedAnnotations
            });
        }

        console.log("Annotation Line X Offset changed to " + inputValue); 
    }

    const changeAnnotationLineYOffset = (inputValue: string) => {
        // Enter logic for changing the annotation line Y offset

        if (config && Array.isArray(config.annotations)) {
            const updatedAnnotations = config.annotations.map(annotation => {
                if (annotation.id === props.annotation.id) {
                    return {
                        ...annotation,
                        arrowOffsetY: Number(inputValue)
                    };
                }
                return annotation;
            });

            setConfig({
                ...config,
                annotations: updatedAnnotations
            });
        }
        
        console.log("Annotation Line YOffset changed to " + inputValue); 
    }

    return(
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption contentOnRender={props.annotation.arrowWidth} plotFunction={changeAnnotationLineWidth} labelName="Width" displayLabel={true} />
            <GenericColourOption contentOnRender={props.annotation.arrowColour.slice(1)} plotFunction={changeAnnotationLineColour} labelName="Colour" displayLabel={true} />
            <GenericSizeIncrementerOption contentOnRender={props.annotation.arrowOffsetX} plotFunction={changeAnnotationLineXOffset} labelName="X-Offset" displayLabel={true} />
            <GenericSizeIncrementerOption contentOnRender={props.annotation.arrowOffsetY} plotFunction={changeAnnotationLineYOffset} labelName="Y-Offset" displayLabel={true} />
        </div>
    )
}