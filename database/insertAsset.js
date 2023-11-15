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
    const collection_Data = database.collection("Asset_Data");

    const base64ImageData1 = btoa("UK_flag.png")
    const base64imageData2 = btoa("Iceland_flag.png")
    const base64imageData3 = btoa("Denmark_flag.png")
    const base64imageData4 = btoa("USA_flag.png")
    const base64imageData5 = btoa("France_flag.png")

    // Create a document to insert

    const docs = [
      {
        asset_name : "TestnameA",
        company_name : "apple",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/24",
        date_edited : "04/09/23"  
      },
      {
        asset_name : "TestnameB",
        company_name : "apple",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64imageData4,
          width : width,
          height : height
          },
        date_created : "12/04/15",
        date_edited : "14/02/23"  
      },
      {
      asset_name : "TestnameC",
      company_name : "apple",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/01/14",
      date_edited : "14/12/23"  
      },
      {
        asset_name : "TestnameD",
        company_name : "apple",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/18",
        date_edited : "14/02/23"  
      },
      {
        asset_name : "TestnameE",
        company_name : "apple",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/12",
        date_edited : "14/09/22"  
      },
      {
      asset_name : "TestnameF",
      company_name : "Canon",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "11/04/14",
      date_edited : "14/04/23"  
      },
      {
        asset_name : "TestnameG",
        company_name : "Canon",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64imageData3,
          width : width,
          height : height
          },
        date_created : "14/04/14",
        date_edited : "14/02/21"  
      },
      {
        asset_name : "TestnameH",
        company_name : "Canon",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/15",
        date_edited : "14/09/22"  
      },
      {
      asset_name : "TestnameI",
      company_name : "Canon",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/02/14",
      date_edited : "09/09/23"  
      },
      {
        asset_name : "TestnameJ",
        company_name : "Canon",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/11",
        date_edited : "14/11/23"  
      },
      {
        asset_name : "TestnameK",
        company_name : "Bolton Gin Co.",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64imageData2,
          width : width,
          height : height
          },
        date_created : "12/09/14",
        date_edited : "14/09/21"  
      },
      {
      asset_name : "TestnameL",
      company_name : "Bolton Gin Co.",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "08/04/14",
      date_edited : "14/12/23"  
      },
      {
        asset_name : "TestnameM",
        company_name : "Bolton Gin Co.",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameN",
        company_name : "Bolton Gin Co.",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameO",
      company_name : "Bolton Gin Co.",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64imageData5,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameP",
        company_name : "Bolton Gin Co.",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameQ",
        company_name : "Bolton Gin Co.",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/22"  
      },
      {
      asset_name : "TestnameR",
      company_name : "Bolton Gin Co.",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64imageData3,
        width : width,
        height : height
        },
      date_created : "12/11/14",
      date_edited : "19/09/23"  
      },
      {
        asset_name : "TestnameS",
        company_name : "Bolton Gin Co.",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/02/14",
        date_edited : "14/09/21"  
      },
      {
        asset_name : "TestnameT",
        company_name : "Bolton Gin Co.",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "24/09/23"  
      },
      {
      asset_name : "TestnameU",
      company_name : "Bolton Gin Co.",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64imageData3,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "12/09/23"  
      },
      {
        asset_name : "TestnameV",
        company_name : "abc",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "24/04/14",
        date_edited : "14/04/23"  
      },
      {
        asset_name : "TestnameW",
        company_name : "abc",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/11",
        date_edited : "14/09/22"  
      },
      {
      asset_name : "TestnameX",
      company_name : "abc",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/06/14",
      date_edited : "14/09/21"  
      },
      {
        asset_name : "TestnameY",
        company_name : "abc",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64imageData4,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameZ",
        company_name : "abc",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameAA",
      company_name : "abc",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAB",
        company_name : "abc",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAC",
        company_name : "abc",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64imageData2,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameAD",
      company_name : "abc",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAE",
        company_name : "company1",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAF",
        company_name : "company1",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameAG",
      company_name : "company1",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAH",
        company_name : "company1",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64imageData5,
          width : width,
          height : height
          },
        date_created : "12/07/14",
        date_edited : "14/09/22"  
      },
      {
        asset_name : "TestnameAI",
        company_name : "company1",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/12",
        date_edited : "12/09/23"  
      },
      {
      asset_name : "TestnameAJ",
      company_name : "company1",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAK",
        company_name : "company1",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAL",
        company_name : "company1",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameAM",
      company_name : "company1",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64imageData5,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAN",
        company_name : "company2",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAO",
        company_name : "company2",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameAP",
      company_name : "company2",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAQ",
        company_name : "company2",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAR",
        company_name : "company2",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64imageData3,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameAS",
      company_name : "company2",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAT",
        company_name : "company2",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAU",
        company_name : "company2",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameAV",
      company_name : "company2",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64imageData2,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAW",
        company_name : "company2",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAX",
        company_name : "IBM",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameAY",
      company_name : "IBM",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameAZ",
        company_name : "IBM",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64imageData4,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBA",
        company_name : "IBM",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameBB",
      company_name : "IBM",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBC",
        company_name : "IBM",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBD",
        company_name : "IBM",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64imageData4,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameBE",
      company_name : "IBM",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBF",
        company_name : "IBM",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBG",
        company_name : "IBM",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameBH",
      company_name : "heinz",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64imageData2,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBI",
        company_name : "heinz",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBJ",
        company_name : "heinz",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameBK",
      company_name : "heinz",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBL",
        company_name : "heinz",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64imageData3,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBM",
        company_name : "heinz",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameBN",
      company_name : "heinz",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBO",
        company_name : "heinz",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBP",
        company_name : "heinz",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameBQ",
      company_name : "heinz",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64imageData3,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBR",
        company_name : "heinz",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBS",
        company_name : "heinz",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameBT",
      company_name : "C.P. Company",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBU",
        company_name : "C.P. Company",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBV",
        company_name : "C.P. Company",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64imageData2,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameBW",
      company_name : "C.P. Company",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64ImageData1,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBX",
        company_name : "C.P. Company",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
        asset_name : "TestnameBY",
        company_name : "C.P. Company",
        type : "Wind Farm",
        location : {
          format : format,
          data : base64ImageData1,
          width : width,
          height : height
          },
        date_created : "12/04/14",
        date_edited : "14/09/23"  
      },
      {
      asset_name : "TestnameBZ",
      company_name : "C.P. Company",
      type : "Wind Farm",
      location : {
        Format : format,
        data : base64imageData2,
        width : width,
        height : height
        },
      date_created : "12/04/14",
      date_edited : "14/09/23"  
      },
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