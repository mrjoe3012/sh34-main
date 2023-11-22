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
 
    const base64ImageData1 = btoa("images/abc.png")
    const base64imageData2 = btoa("images/cp_company.png")
    const base64imageData3 = btoa("images/coca_cola.png")
    const base64imageData4 = btoa("images/canon.png")
    const base64imageData5 = btoa("images/bolton.png")
    const base64ImageData6 = btoa("images/apple.png")
    const base64imageData7 = btoa("images/company1_logo.png")
    const base64imageData8 = btoa("images/company2_logo.png")
    const base64imageData9 = btoa("images/heinz.png")
    const base64imageData0 = btoa("images/ibm.png")

 
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
      },
      {
      company_name : "apple",
      no_assets : 3,
      company_logo : {
        format : format,
        data : base64ImageData6,
        width : width,
        height : height
      }
      },
      {
      company_name : "company1",
      no_assets : 2,
      company_logo : {
        format: format,
        data : base64imageData7,
        width : width,
        height : height
      }
      },
      {
      company_name : "company2",
      no_assets : 3,
      company_logo : {
        format : format,
        data : base64imageData8,
        width : width,
        height : height
        }
      },
      {
      company_name : "heinz",
      no_assets : 2,
      company_logo : {
        format : format,
        data : base64imageData9,
        width : width,
        height : height
        }
      },
      {
      company_name : "IBM",
      no_assets : 3,
      company_logo : {
        format : format,
        data : base64imageData10,
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