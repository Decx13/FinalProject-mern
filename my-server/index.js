const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

//middleware
app.use(cors());
app.use(express.json());

//yeUllKOIuPpIU1ku

app.get('/', (req, res) => {
  res.send('Hello')
})

//mongodb-config


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mithila22:yeUllKOIuPpIU1ku@cluster0.gvn92wg.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection for database

    const furnitureCollections = client.db("furnitureInventory").collection("furniture");

    //insert a new furniture (do post)

    app.post("/upload-furniture",async(req, res) => {
      const data = req.body;
      const result = await furnitureCollections.insertOne(data);
      res.send(result);
    })

    //get all furniture from database(get)

    app.get("/all-furniture", async(req, res) => {
      const furniture = furnitureCollections.find();
      const result = await furniture.toArray();
      res.send(result);
    })

    //update a furniture (path or update)

    app.patch("/furniture/:id", async(req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updateFurnitureData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateFurnitureData
        }
      }

      // update
      const result =  await furnitureCollections.updateOne(filter,updateDoc,options);
      res.send(result);

    })

    //delete a furniture data(after stock out or permenatly removed item)

    app.delete("/furniture/:id",async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await furnitureCollections.deleteOne(filter);
      res.send(result);

    })

    //find by category

    app.get("/all-furniture", async(req, res) => {
      let query = {};
      if(req.query?.category){
        query = {category:  req.query.category}
      }
      const result = await furnitureCollections.find(query).toArray();
      res.send(result);
    })

    //get one furniture data

    app.get("/furniture/:id",async(req, res) =>{
      const id = req.params.id;
      const filter = { _id: new ObjectId(id)};
      const result = await furnitureCollections.findOne(filter);
      res.send(result);

    });


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})