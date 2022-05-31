const { MongoClient } = require('mongodb');

async function main(){
    
    //create constant url
    const uri = "mongodb+srv://GurleenKaur:Gurleen2272001@cluster0.rxiui.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
    await client.connect();

    //calling function to create multiple data entries in a collection - Books   
    await createMultipleListings(client, [{
        Book_Id: 3,
        BookName: "Hamlet",
        Author: "William Shakespeare",
        PublicationYear: 2008-05-01,
        Price: 35
    },
    {
        Book_Id: 4,
        BookName: "War and peace",
        Author: "Leo Tolstoy",
        PublicationYear: 2012-05-07,
        Price: 50
    },
    {
        Book_Id: 5,
        BookName: "Pride and Prejudice",
        Author: "Jane Austen",
        PublicationYear: 1989-10-07,
        Price: 60
    },
    {
        Book_Id: 6,
        BookName: "To the lighthouse",
        Author: "Virginia Woolf",
        PublicationYear: 2010-08-10,
        Price: 55
    }]);

    //calling function to find record by passing field values
    await findOneListingByName(client, "Hamlet")

    //calling function to update value of existing record - updating price for a exisiting book
   await upsertBookByName(client, "to the lighthouse", { Book_Id:6 , BookName: "to the lighthouse", Author: "Virginia Woolf", PublicationYear: 2010-08-10, Price: 100 });
    
   //to output the updated value of price for the book
   await findOneListingByName(client, "to the lighthouse")

   //delete record by date - there was no document created before the provided date hence, output shows no document was deleted
   await deleteBooksScrapedBeforeDate(client, new Date("2007-02-15"));

    }
    catch(e){
        console.error(e);
    } finally{
        await client.close();
    }
}

main().catch(console.error);

//creating one record
async function createListing(client, newListing){
    const result = await client.db("Library").collection("Books").insertOne(newListing);

    console.log('New listings created with following id: ${result.insertedId}');
}

//adding data in collections Books
async function createMultipleListings(client, newListings){
    const result = await client.db("Library").collection("Books").insertMany(newListings);

    console.log('${result.insertedCount} New listings created with following id (s):');
    console.log(result.insertedIds);
}

//Read record by passing field values
async function findOneListingByName(client, nameOfBook) {
    const result = await client.db("Library").collection("Books").findOne({ BookName: nameOfBook });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfBook}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfBook}'`);
    }
}

//Delete Record by date
async function deleteBooksScrapedBeforeDate(client, date) {
    const result = await client.db("Library").collection("Books")
        .deleteMany({ "last_scraped": { $lt: date } });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

//lisiting databases
async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log('- $(db.name)')
    })
}

//Update existing record using upsert function
async function upsertBookByName(client, nameOfBook, updatedBook) {
    const result = await client.db("Library").collection("Books")
                        .updateOne({ BookName: nameOfBook }, 
                                   { $set: updatedBook }, 
                                   { upsert: true });
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);

    if (result.upsertedCount > 0) {
        console.log(`One document was inserted with the id ${result.upsertedId._id}`);
    } else {
        console.log(`${result.modifiedCount} document(s) was/were updated.`);
    }
}