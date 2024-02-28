import { TemplateData, loadPlots, loadTemplateFromPlot } from "@app/modules/db";
import { WithId } from "mongodb";
import { NextRequest } from "next/server";

export const revalidate = 0;

interface RequestData {
    id: number,
};

export interface LoadTemplateFromPlotResponseData {
    template: WithId<TemplateData>,
};

export async function POST(request: NextRequest) {
    const data: RequestData = await request.json();
    try {
        const filter = {'_id' : data.id};
        const plot = (await loadPlots(filter))[0];
        const template = await loadTemplateFromPlot(plot);
        return Response.json({
            'status' : 200,
            'template' : template,
        });
    } catch (e) {
        console.error(`Bad request. Error: ${e}`);
        return Response.json({
            'error' : `${e}`,
            'status' : 400,
        });
    }
}