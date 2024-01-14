async function populateTemplates(client) {
 
  // Connect to the "Templates" database and access its "Template_Data" collection
  const database = client.db("SH34_DB");

  const collection_Data = database.collection("Templates_Data");

  // Create a document to insert

  const docs = [
    {
      _id : '1',
      PlotArray : [1,2,3],
      Name : "Very Windy Template",
      Description : "Template to show Financial gains of an asset",
      Tags : ["Finance", "Wind"],
      LastModified : "24/04/2022"
    },
    {
      _id : '2',
      PlotArray : [4,5,6],
      Name : "Slightly Rainy Template",
      Description: "Template to show efficiency of an asset",
      Tags: ["Efficiency","Hydro"],
      LastModified : "18/09/2022"
    },
    {
      _id : '3',
      PlotArray : [7,8,9],
      Name : "Nice and Sunny Template",
      Description: "Template to show general information of an asset",
      Tags: ["Info","Sunny","Solar","Finance","Efficiency"],
      LastModified : "20/01/2023"
    },
    {
      _id : '4',
      PlotArray : [10,11,12],
      Name : "Heavy Snow Template",
      Description: "Template to show variation in productivity of an asset",
      Tags: ["Nuclear","Variation","Efficiency"],
      LastModified : "08/07/2022"
    }
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
