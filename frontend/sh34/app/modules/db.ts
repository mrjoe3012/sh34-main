import { Filter, MongoClient, WithId } from 'mongodb';
import { Config } from "./Config";

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
    DateCreated: string;
};

// should be same as objects in Plots_Data collection
export interface PlotData extends Document {
    _id: number,
    config_file: Config,
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

export async function updateCollection<T extends Document>(dbName: string, collectionName: string, documents: WithId<T>[]) : Promise<void> {
    const client = getMongoClient();
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    for (const document of documents) {
        const filter = {
            '_id' : document._id
        };
        const result = await collection.updateOne(
            filter, {'$set' : document}
        );
        if (!result.acknowledged)
            console.warn(`Failed to update database. Document: ${document}`);
    }
}

export async function loadTemplates(filter: Filter<TemplateData>) : Promise<WithId<TemplateData>[]> {
    const templates = await loadCollection<TemplateData>(
        DB_NAME,
        TEMPLATES_COLLECTION,
        filter
    );
    return templates;
}

export async function loadPlots(filter: Filter<PlotData>): Promise<WithId<PlotData>[]> {
    const plots = await loadCollection<PlotData>(
        DB_NAME,
        PLOTS_COLLECTION,
        filter
    );
    return plots;
}

// load all the plots associated with a specific template
export async function loadPlotsFromTemplate(template: WithId<TemplateData>): Promise<WithId<PlotData>[]> {
    const plotIds = template.PlotArray;
    // get only plots whose id is in the template's PlotArray
    const filter = {
        _id: { $in : plotIds }
    };
    const plots = await loadPlots(filter);
    return plots;
}

// load the template to which a plot belongs to
export async function loadTemplateFromPlot(plot: WithId<PlotData>): Promise<WithId<TemplateData>> {
    const filter = {
        PlotArray: { $elemMatch: { $eq: plot._id } },
    };
    const templates = await loadTemplates(filter);
    return templates[0];
}

// update each plot passed into this function
// assumes they already exist in the database
export async function updatePlots(plots: WithId<PlotData>[]): Promise<void> {
    await updateCollection<PlotData>(DB_NAME, PLOTS_COLLECTION, plots);
}

// update each template passed into this function
// assumes they already exist in the database
export async function updateTemplates(templates: WithId<TemplateData>[]): Promise<void> {
    await updateCollection<TemplateData>(DB_NAME, TEMPLATES_COLLECTION, templates);
}
