import { Filter, MongoClient, WithId } from 'mongodb';
import { Interface } from 'readline';

const DB_NAME = "SH34_DB";
const PLOTS_COLLECTION = "Plots_Data";
const TEMPLATES_COLLECTION = "Templates_Data";

// should be same as objects in Templates_Data collection
export interface TemplateData extends Document {
    _id: number;
    PlotArray: Array<number>;
    Name: string;
    Description: string;
    Tags: Array<string>;
    LastModified: string;
};

// should be same as objects in Plots_Data collection
export interface PlotData extends Document {
    _id: number,
    JSONFile: {
        'graph-type' : string,
        title: string,
        x_axis_name : string,
        y_axis_name : string,
        colour: string
    },
    plot_title: string,
    order: number,
};

export function getMongoClient(): MongoClient {
    // get the uri from the environment variable
    if (process.env.SH34_DB === undefined) {
        throw new Error("Please set the SH34_DB environment variable to provide access to the MongoDB database.");
    }
    const uri = process.env.SH34_DB!;
    return new MongoClient(
        uri
    );
}

export async function loadCollection<T extends Document>(dbName: string, collectionName: string, filter: Filter<T>) : Promise<WithId<T>[]> {
    const client = getMongoClient();
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection<T>(collectionName);
    const data = await collection.find(filter).toArray();
    await client.close();
    return data;
}

export async function loadTemplates(filter: Filter<TemplateData>) : Promise<WithId<TemplateData>[]> {
    const templates = await loadCollection<TemplateData>(
        DB_NAME,
        TEMPLATES_COLLECTION,
        filter
    );
    return templates;
}

export async function loadPlots(filter: Filter<PlotData>): Promise<WithId<PlorData>[]> {
    const plots = await loadCollection<PlotData>(
        DB_NAME,
        PLOTS_COLLECTION,
        filter
    );
    return plots;
}
