import { loadPlotsFromTemplate, loadTemplates } from "@app/modules/db";
import { WithId } from "mongodb";
import { NextRequest } from "next/server";
import { PlotData } from "@app/modules/db";

export const revalidate = 0;

interface RequestData {
    id: number,
};

export interface LoadPlotsFromTemplatesResponseData {
    plots: WithId<PlotData>[],
};

export async function POST(request: NextRequest) {
    const data: RequestData = await request.json();
    try {
        const template = (await loadTemplates({'_id' : data.id}))[0];
        const plots = await loadPlotsFromTemplate(template);
        return Response.json({
            'status' : 200,
            'plots' : plots,
        });
    } catch (e) {
        console.error(`Failed to serve plots. Error: ${e}`);
        return Response.json({
            'status' : 400,
            'error' : `Failed to serve plots. Error: ${e}`,
        });
    }
}
