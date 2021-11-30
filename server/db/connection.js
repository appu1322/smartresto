const mongoose = require('mongoose');

const uri = process.env.DATABASE;;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("Connection successful...");
}).catch((e) => console.log("connection error! " + e));


//  ************ Mordern connection,but it not use mongooseSchema **********

// const { MongoClient } = require('mongodb');
// async function main(){

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// try {
//     // Connect to the MongoDB cluster
//     await client.connect();

//     // Make the appropriate DB calls
//     await  listDatabases(client);

// } catch (e) {
//     console.error(e);
// } finally {
//     // await client.close();
// }

// }

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// main().catch(console.error);


