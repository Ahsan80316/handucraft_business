const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ggrwjrl.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    const dataCollection = client.db("BangladeshiHandicrafts").collection("productData");
    const reviewsCollection = client.db("BangladeshiHandicrafts").collection("reviews");
    const blogsCollection = client.db('BangladeshiHandicrafts').collection('blogs');
    const contactCollection = client.db("BangladeshiHandicrafts").collection("contactMessages");

    app.get("/allBusiness", async (req, res) => {
      const result = await dataCollection.find().toArray();
      res.send(result);
    });

    app.get("/business-details/:_id", async (req, res) => {
      const id = req.params._id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await dataCollection.findOne(query);
      res.send(result);
    });

    app.get("/popularBusiness", async (req, res) => {
      const result = await dataCollection
        .find()
        .sort({ participantCount: -1 })
        .limit(6)
        .toArray();
      res.send(result);
    });

    app.get("/reviews", async (req, res) => {
      const result = await reviewsCollection.find().toArray();
      res.send(result);
    });
    
    app.get('/blogs', async (req, res) => {
      try {
        const result = await blogsCollection.find().toArray();
        res.json(result);
      } catch (err) {
        res.status(500).send('Error retrieving blogs');
      }
    });

    // POST endpoint to handle contact form submissions
    app.post('/contact-info', async (req, res) => {
      const { name, email, subject, message } = req.body;
      
      // Validation (optional)
      if (!name || !email || !subject || !message) {
        return res.status(400).send({ message: 'All fields are required' });
      }

      try {
        const newContact = {
          name,
          email,
          subject,
          message,
          date: new Date()
        };
        const result = await contactCollection.insertOne(newContact);

        res.status(201).send({
          message: 'Contact information submitted successfully',
          insertedId: result.insertedId,
        });
      } catch (error) {
        res.status(500).send({ message: 'Server Error', error: error.message });
      }
    });



    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Bangladeshi Handicrafts application is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
