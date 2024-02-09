import {Config} from '@app/modules/Config';
import { loadPlots, updatePlots } from '@app/modules/db';

interface RequestData {
    plotId: number,
    plotConfig: Config,
};

export async function POST(request: Request) {
    const requestData: RequestData = await request.json();
    const plots = await loadPlots({'_id' : requestData.plotId});
    if (plots.length != 1) {
        let response = Response.json(
            {'error' : 'Nonexistent plot ID.'},
            { 'status' : 400 }
        );
        return response;
    }
    let plot = plots[0];
    plot.config_file = requestData.plotConfig;
    await updatePlots([plot]);
    return new Response();
};