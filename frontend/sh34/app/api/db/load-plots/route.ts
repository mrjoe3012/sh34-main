import { PlotData, loadPlots } from "@app/modules/db";
import { WithId } from "mongodb";
import { NextRequest } from "next/server";

export const revalidate = 0;

interface RequestData {
    filter: Record<string, any>,
};

export interface LoadPlotsResponseData {
    plots: WithId<PlotData>[],
};

export async function POST(request: NextRequest) {
    const data: RequestData = await request.json();
    try {
        const plots = await loadPlots(data.filter);
        return Response.json({
            'status' : 200,
            'plots' : plots,
        });
    } catch(e) {
        console.error(`Bad request. Error: ${e}`);
        return Response.json({
            'error' : `${e}`,
            'status' : 400,
        });
    }
}