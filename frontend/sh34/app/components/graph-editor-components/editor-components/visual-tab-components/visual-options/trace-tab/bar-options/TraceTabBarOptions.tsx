import { BarBorderOption } from "./BarBorderOption"
import { BarWidthOption } from "./BarWidthOption"

export const TraceTabBarOptions = () => {
    return (
        <div className="flex flex-col gap-y-5">
            <BarWidthOption />
            <BarBorderOption />
        </div>
    )
}