import { ScatterPointBorderOption } from "../option-components/ScatterPointBorderOption"
import { ScatterPointSizeOption } from "../option-components/scatter-point-size-components/ScatterPointSizeOption"

export const TraceTabScatterOptions = () => {
    return (
        <div className="flex flex-col gap-y-5">
            <ScatterPointBorderOption />
            <ScatterPointSizeOption />
        </div>
    )
}