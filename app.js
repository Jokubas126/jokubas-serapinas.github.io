var http = require('http');
const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://jokubass543:luke-writ-dreamt@cluster0.rlzy9.mongodb.net/PortfolioWebsite?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect(err => {
  if (err) throw err;
  const movies = client.db("sample_mflix").collection("movies");
  console.log("Database created!");
  // perform actions on the collection object

  movies.findOne({}, function (err, result) {
    if (err) throw err;
    console.log("Found some data from movies! ");
    console.log("Movie data: " + result.plot);
  })

  client.close();
});

var server = http.createServer ( function(request,response){
    if (request.method == 'GET') {
      getMovies().catch(console.dir)
    }
});
server.listen(process.env.PORT || 5000);

async function getMovies(){
  try{
    await client.connect();
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    console("Movies retrieved" + movies.count);
  }finally {
    await client.close();
  }
}