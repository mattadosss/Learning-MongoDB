use mflix;

db.movies.countDocuments({cast: 'Leonardo DiCaprio'});
db.movies.find({"cast" : 'Leonardo DiCaprio' },{"genres":1, "_id":0})
db.movies.find({"cast" : 'Leonardo DiCaprio' },{"title":1, "year":1, "_id":0})
db.movies.countDocuments({"directors" : 'Leonardo DiCaprio'});
db.movies.find({"cast": 'Leonardo DiCaprio', "directors": "Martin Scorsese", "genres": "Drama", "genres": "Crime"},
{"title":1, "year":1, "_id":0, "genres":1})
db.movies.find({"directors": "Martin Scorsese"});

db.movies.find({"cast": /Martin/, "cast": /Sinatra/})
db.movies.find({"languages": "German", "languages": "French",});

db.movies.find({"languages": "Italian", "languages": "French"}, {"languages":1, "_id":0});
db.movies.countDocuments(
    {"languages": {$and:
        ["English", "German"]
        }

    }
)




db.movies.find({"languages": {$and: ["Italian", "French"]}})

db.movies.countDocuments();
db.movies.find({"languages": "Italian", "cast": { $regex: /[ ]Martin/ }}, {"cast.$":1, _id:0, languages:1})


db.movies.find({: {cast: "Jerry Lewis", directors: "Jerry Lewis"}})
db.movies.find({
  $or: [
    {cast: "Jerry Lewis"},
    {writers: "Jerry Lewis"},
    {directors: "Jerry Lewis"}
  ]},
  {tomatoes:
          {"rating": 1, "numReviews": < , text: "1 win."}
      }
})

db.movies.find({title: "The Day The Clown Cried"})
db.movies.find({writers: "Jerry Lewis"})


db.movies.find({
  cast: "Jerry Lewis",                         // Jerry Lewis in cast
  year: { $lt: 1980 },                  // Released before 1980
  views: { $gt: 25000 },                       // More than 25,000 views
  cast: { $in: ["Famous Actor Name"] }         // Famous actor in cast (replace with actual name)
}, {
  cast: { $slice: 3 },                         // Limit output to first 3 actors
  title: 1,                                    // Return the movie title
  releaseYear: 1,                              // Return the release year
  views: 1                                     // Return the views
})


db.movies.find({
  "awards.text": /8 Oscars/,                // Find movies with 8 Oscar wins
  genres: { $in: ["Biography", "Music"] },  // The movie should be in genres related to biography and music
}, {
  _id: 0,
  title: 1,                        // Return the movie title
  plot: 1,                         // Return the plot description
  cast: 1,                         // Return the cast
  year: 1,                          // Return the year
  awards: { $slice: 2 }
})

db.movies.count({
  "tomatoes.viewer.meter":{ $gte: 99 }
})

let findMoviesByGenre =
    function(genre){
        let movies = db.movies.find({"genres": genre},{"title":1,_id:0, "imdb": 1}).sort({"imbd.rating": 1}).toArray
        for(let i=0; i < movies.length;){
              print(movies[i].title)
          }
}

findMoviesByGenre("Short")


let myfunc = function(genre, pageNumber, pageSize){
    let movies = db.movies.find(
        {genres: {$all: [genre]}},
        {title:1, "imdb.rating": 1, _id:0}
    ).sort({"imdb.rating":-1}).toArray();

    let index;

    for(let i=0;i<movies.length;i++){
        index=pageSize * pageNumber
        print(movies[index].title, movies[index].imdb.raiting)
    }
}

myfunc("Crime", 2,10)