const { MongoClient } = require("mongodb");
 
const uri = "mongodb+srv://benclmorrison:sh34password@sh34.xewtebw.mongodb.net/";
 
const client = new MongoClient(uri);
 
async function run() {
 
  try {
 
    // Connect to the "Templates" database and access its "Template_Data" collection
    const width = "200"
    const height = "200"
    const format = "png"
    const database = client.db("Templates");
 
    const collection_Data = database.collection("Company_Data");
 
    const base64ImageData1 = btoa("abc.png")
    const base64imageData2 = btoa("cp_company.png")
    const base64imageData3 = btoa("coca_cola.png")
    const base64imageData4 = btoa("canon.png")
    const base64imageData5 = btoa("bolton.png")
 
    // Create a document to insert
 
    const docs = [
      {
      company_name : "abc",
      no_assets : 3,
      company_logo : {
        format : format,
        data : base64ImageData1,
        width : width,
        height : height
      }
      },
      {
      company_name : "C.P. Company",
      no_assets : 2,
      company_logo : {
        format: format,
        data : base64imageData2,
        width : width,
        height : height
      }
      },
      {
      company_name : "Coca Cola",
      no_assets : 3,
      company_logo : {
        format : format,
        data : base64imageData3,
        width : width,
        height : height
        }
      },
      {
      company_name : "Canon",
      no_assets : 2,
      company_logo : {
        format : format,
        data : base64imageData4,
        width : width,
        height : height
        }
      },
      {
      company_name : "Bolton Gin Co.",
      no_assets : 3,
      company_logo : {
        format : format,
        data : base64imageData3,
        width : width,
        height : height
        }
      }
    ]
 
    // Insert the defined document into the "Template_Data" collection
    for (const item of docs) {
      const result = await collection_Data.insertOne(item);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    }
 
  } finally {
 
     // Close the MongoDB client connection
 
    await client.close();
 
  }
 
}
 
// Run the function and handle any errors
 
run().catch(console.dir);