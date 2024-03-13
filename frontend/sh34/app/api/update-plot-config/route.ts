import {Config} from '@app/modules/Config';
import { loadPlots, updatePlots, updateTemplates, loadTemplates } from '@app/modules/db';

interface RequestData {
    plotId: number,
    plotConfig: Config,
    templateId: number,
};

export async function POST(request: Request) {
    const requestData: RequestData = await request.json();
    const plots = await loadPlots({'_id' : requestData.plotId});
    const templates = await loadTemplates({'_id' : requestData.templateId});

    if (plots.length != 1 || templates.length != 1) {
        let response = Response.json(
            {'error' : 'Nonexistent plot ID or template ID.'},
            { 'status' : 400 }
        );
        return response;
    }

    let plot = plots[0];
    let template = templates[0]
    plot.config_file = requestData.plotConfig;
    await updatePlots([plot]);

    template = {
        ...template,
        LastModified: String(new Date())
    }

    await updateTemplates([template])
    return new Response();
};