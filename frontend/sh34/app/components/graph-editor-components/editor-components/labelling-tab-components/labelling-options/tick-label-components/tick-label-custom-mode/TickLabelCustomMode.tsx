import { GenericNameOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericNameOption"
import { GenericFontSizeOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericFontSizeOption"
import { GenericColourOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericColourOption"
import { GenericTypefaceOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericTypefaceOption"
import { TickLabelAngleOption } from "./TickLabelAngleOption"
import { TickLabelPositionOption } from "./TickLabelPositionOption"

export const TickLabelCustomMode = () => {
    return (
        <div className="flex flex-col gap-y-1">
            <GenericNameOption />
            <GenericFontSizeOption displayLabel={true}/>
            <GenericColourOption displayLabel={true}/>
            <GenericTypefaceOption displayLabel={true}/>
            <TickLabelAngleOption />
            <TickLabelPositionOption />
        </div>
    )
}