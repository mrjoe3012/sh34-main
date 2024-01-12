import { GenericNameOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericNameOption"
import { GenericFontSizeOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericFontSizeOption"
import { GenericFontColourOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericFontColourOption"
import { GenericTypefaceOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericTypefaceOption"
import { TickLabelAngleOption } from "./TickLabelAngleOption"
import { TickLabelPositionOption } from "./TickLabelPositionOption"

export const TickLabelCustomMode = () => {
    return (
        <div className="ml-3 mr-3 flex flex-col gap-y-1">
            <GenericNameOption />
            <GenericFontSizeOption />
            <GenericFontColourOption />
            <GenericTypefaceOption />
            <TickLabelAngleOption />
            <TickLabelPositionOption />
        </div>
    )
}