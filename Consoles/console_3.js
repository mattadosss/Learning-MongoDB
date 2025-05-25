use mflix_labs;

db.movies.find({
            $nor: [
    {title : {$regex: /Staffel [1-8]:/}},
    {title : {$regex: /Part_[1-6]$/}}
    ]
})

db.movies.deleteMany(
    {title : {$regex: /Staffel 10/}}
)

db.movies.deleteOne(
    {title : {$regex: /Staffel 10/}}
)

db.movies.find(
    {title : {$regex: /Staffel 10/}}
)


db.movies.find(
    {title : {$regex: /Staffel [3,6]/}}
)

db.movies.find(
    {title : {$regex: /Part_[2,4]$/}
})

use mflix;

//Autor: Noah Bargisen
let findMoviesByGenre =
    function(genre, pageNumber, pageSize){
        let movies = db.movies.find(
            {genres: {$all: [genre]}
            },
            {title:1, "imdb.rating":1
            }
        ).sort({"imdb.rating":-1}).toArray();
        let index;
        for(let i = 0 ; i < pageSize ; i++) {
            index=pageSize * pageNumber + i;
            print(
                movies[index].title,
                movies[index].imdb.rating.toString().trim()
            )
        }

   }

findMoviesByGenre("Short", 1, 10);

use mflix;

db.movies.find(
    {"languages": {$all:["German", "English"]}},
    {"languages":1}
).count()

db.movies.find(
    {"languages": {$all:["German","English"]}},
    {"languages":1}
)

.count()
db.movies.find(
    {"languages": "Syriac"},
    {title:1, cast:1, poster:1}
)

db.movies.find(
    {"languages": "Syriac"},
    {title:1, cast:{$slice:2-3}, poster:1}
)

use mflix;

db.movies.find(
     {}
)

db.movies.find(
    {"imdb.votes": {$avg: 1} }
)

db.movies.find(
    {"languages": {$all:["German", "English"]}},
    {"languages":1}

let movieToDelete = db.movies.find({
  "imdb.votes": { $gt: 1000 },              // High IMDb votes
  "imdb.rating": { $lt: 5 },                 // Low IMDb rating
  "awards.wins": { $exists: true, $eq: 0 }   // Few or no awards
}, { sort: { "imdb.rating": 1 } });          // Sort by lowest IMDb rating

// Delete the movie
db.movies.find({ _id: movieToDelete._id });


db.movies.find({
  "imdb.votes": { $gt: 50000 },              // High IMDb votes
  "imdb.rating": { $lt: 2 },                 // Low IMDb rating
  //"awards.wins": {$eq: 0 }   // Few or no awards
}, { sort: { "imdb.rating": 1 }, title:1 })

db.movies.aggregate([
  {
    $group: {
      _id: null,                   // No grouping, calculate for all documents
      avgVotes: { $avg: "$imdb.votes" }  // Calculate average of IMDb votes
    }
  }
])

db.users.find(
  {"name" : "Margaery Baratheon"},
  {"_id": 9, "name": "Margaery Baratheon", "email":     "Margaery.Baratheon@got.es"}
)

db.movies.findOneAndReplace(
    {title: 'The Godfather'},
    {$set:{
    "imbd.raiting": 9.2,
    "imbd.votes": 1565120,
    "tomatoes.viewer.raiting": 4.76,
    "tomatoes.viewer.numReviews":733777,
    "tomatoes.meter": 98}
    },
    {_id:0}
)

use LB01;

db.Students.find(
    {"Noten.Modul"}
)

db.Rooms.find()

let getClassAverage = function(klasse,modul){
    let students = db.Students.find(
        {$and:[
        {"Klasse": klasse},
        {"Noten.Modul": modul}
        ]},{"Noten.Note":1}
    ).toArray()
    let sum = 0.0;
    let numOFStudents=Students.count()
    for (let i=0;i)
        sum+=studends[i].Noten.Note;
    }


db.Students.dele

use mflix;
db.dropDatabase();
db.movies.find({title: /Black/},{_id:0, genres:1, casts:1}).limit(10)
db.movies.distinct("rated");
let year = 1960;
db.movies.countDocuments({year: year});