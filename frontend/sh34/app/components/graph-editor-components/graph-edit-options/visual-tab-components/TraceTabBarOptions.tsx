import { BarBorderOption } from "../option-components/BarBorderOption"
import { BarWidthOption } from "../option-components/BarWidthOption"

export const TraceTabBarOptions = () => {
    return (
        <div className="flex flex-col gap-y-7">
            <BarWidthOption />
            <BarBorderOption />
        </div>
    )
}