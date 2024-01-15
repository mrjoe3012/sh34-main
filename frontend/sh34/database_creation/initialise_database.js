const { MongoClient } = require('mongodb');
const { getConnectionString } = require('./util');
const { populateTemplates } = require('./populateTemplates');
const { populatePlots } = require('./populatePlots')

async function connect(uri) {
    var client = new MongoClient(
        uri
    );
    client = await client.connect();
    console.log("Connected to MongoDB.");
    return client;
}

async function deleteDatabase(client, name) {
    const admin = client.db('admin');
    const databases = await admin.admin().listDatabases();
    if (databases.databases.some(db => db.name === name)) {
        console.log(`${name} exists... Deleting it.`);
        const db = client.db(name);
        await db.dropDatabase();
    } else {
        console.log(`${name} doesn't exist... Skipping deletion.`);
    }
}

async function createDatabase(client, name) {
    console.log(`Creating database ${name}...`)
    const db = client.db(name);
    console.log(`Created ${name}.`)
    return db;
}

async function main() {
    var uri = getConnectionString();
    var client = await connect(uri);
    await deleteDatabase(client, "SH34_DB");
    var db = await createDatabase(client, "SH34_DB");
    await db.createCollection("Plots_Data");
    await db.createCollection("Templates_Data");
    await populatePlots(client);
    await populateTemplates(client);
    await client.close();
    process.exit();
}

main();
