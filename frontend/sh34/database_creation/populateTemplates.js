

async function populateTemplates(client) {

  // Connect to the "Templates" database and access its "Template_Data" collection
  const database = client.db("SH34_DB");

  const collection_Data = database.collection("Templates_Data");

  // Create a document to insert

  const docs = [
    {
      _id: 1,
      PlotArray : [1,2,3],
      Name : "Very Windy Template",
      Description : "Template to show Financial gains of an asset",
      Tags : ["Finance", "Wind"],
      LastModified : new Date(2024,1,8,23,13,0).toString(),
      DateCreated : "18/12/2017"
    },
    {
      _id: 2,
      PlotArray : [4,5],
      Name : "Slightly Rainy Template",
      Description: "Template to show efficiency of an asset",
      Tags: ["Efficiency","Hydro", "Wind"],
      LastModified : new Date (2022,9,18).toString(),
      DateCreated : "04/07/2019"
    },
  ]
  // Insert the defined document into the "Template_Data" collection
  for (const item of docs) {
    const result = await collection_Data.insertOne(item);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  }

}

module.exports = {
  populateTemplates
};
