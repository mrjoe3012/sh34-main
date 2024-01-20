import { PlotData } from "@app/modules/db";
import { WithId } from "mongodb";
import { createContext, Dispatch, SetStateAction} from "react";

interface PlotOptionsContextType {
    plotType: string,
}
  
export const PlotOptionsContext = createContext<PlotOptionsContextType>({
    plotType: ""
});