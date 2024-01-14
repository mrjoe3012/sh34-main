import { ScatterPointBorderOption } from "./ScatterPointBorderOption"
import { ScatterPointSizeOption } from "./scatter-point-size-components/ScatterPointSizeOption"

export const TraceTabScatterOptions = () => {
    return (
        <div className="flex flex-col gap-y-5">
            <ScatterPointBorderOption />
            <ScatterPointSizeOption />
        </div>
    )
}