import { TemplateData, loadTemplates } from "@app/modules/db";
import { WithId } from "mongodb";
import { NextRequest } from "next/server";

export const revalidate = 0;

interface RequestData {
    filter: Record<any, any>,
};

export interface LoadTemplatesResponseData {
    templates: WithId<TemplateData>[];
};

export async function POST(request: NextRequest) {
    const data: RequestData = await request.json();
    try {
        const templates = await loadTemplates(data.filter);
        return Response.json({
            'status' : 200,
            'templates' : templates,
        });
    } catch (e) {
        console.error(`Bad request. Error: ${e}`);
        return Response.json({
            'error' : `${e}`,
            'status' : 400,
        });
    }
}
