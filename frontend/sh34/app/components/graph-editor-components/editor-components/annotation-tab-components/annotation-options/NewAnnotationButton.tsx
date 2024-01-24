import { useConfig } from "@app/graph-editor/ConfigContext"
import { AnnotationType } from "@app/graph-editor/configjsoninterface"

export const NewAnnotationButton = () => {

    const {config,setConfig} = useConfig()

    const newAnnotation = () => {
        const newAnnotation: AnnotationType = {
            id: config["numAnnotations"]+1, 
            name: "New Annotation",
            xPos: 0.5,
            yPos: 0.5,
            xref: "paper",
            yref: "paper",
            text: "Annotation",
            showArrow: false,
            arrowColour: "#000000",
            arrowOffsetX: 20,
            arrowOffsetY: -20,
            arrowWidth: 2,
            styling: {
                fontColour: "#000000",
                fontSize: 12,
                typeface: "Arial"
            }
        };

        // Create a new array of traces with the newTrace added
        const updatedAnnotations = [...config.annotations, newAnnotation];

        // Create a new config object with the updated traces array
        const newConfig = {
            ...config,
            numAnnotations: config.numAnnotations+1,
            annotations: updatedAnnotations
        };

        // Update the config context with the new configuration
        setConfig(newConfig);
    }

    return(
        <div className="ml-3 mr-3 h-[35px] bg-[#346DFF] text-white border-[1px] border-black rounded flex items-center mb-2">
            <button onClick={newAnnotation} className={`w-[50%] flex-grow text-center h-full rounded }`} > Add Annotation </button>
    </div>
    )
}