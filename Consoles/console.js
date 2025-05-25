db.dropDatabase();
use moviesdb;
db.createCollection('Filmcoll');
db.Filmcoll.insertMany([{
                           "title": "Rocky",
                           "releaseDate": "1976-12-03",
                           "genre": "Action",
                           "about": "A small-time boxer gets a supremely rare chance to fight aheavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
                           "countries": ["USA"],
                           "cast": ["Sylvester Stallone", "Talia Shire", "Burt Young"],
                           "writers": ["Sylvester Stallone"],
                           "directors": ["John G. Avildsen"]
                       }, {
                           "title": "Rambo 4",
                           "releaseDate": "2008-01-25",
                           "genre": "Action",
                           "about": "In Thailand, John Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.",
                           "countries": ["USA"],
                           "cast": [" Sylvester Stallone", "Julie Benz", "Matthew Marsden"],
                           "writers": ["Art Monterastelli", "Sylvester Stallone"],
                           "directors": ["Sylvester Stallone"]
                       }]);
// db.Filmcoll.find();
db.createCollection('Reward');
db.Reward.insertMany([{
                         "title": "Oscars",
                         "year": "1976",
                         "category": "Best Film",
                         "nominees": ["Rocky","All The President's Men","Bound For Glory","Network","Taxi Driver"],
                         "winners" :
                         [
                             {
                                 "movie" : "Rocky"
                             }
                         ]
                     }, {
                         "title": "Oscars",
                         "year": "1976",
                         "category": "Actor In A Leading Role",
                         "nominees": ["PETER FINCH","ROBERT DE NIRO","GIANCARLO GIANNINI","WILLIAM  HOLDEN","SYLVESTER STALLONE"],
                         "winners" :
                         [
                             {
                                 "actor" : "PETER FINCH",
                                 "movie" : "Network"
                             }
                         ]
                     }]);

db.Filmcoll.insertOne({//
                          _id: 14253,
                          title: "Beauty and the Beast",
                          year: 2016,
                          language: "English",
                          imdbRating: {
                                  "rating": "6.4",
                                  "votes": 0
                              },
                          tomatoes: {
                                  viewer: {
                                        rating: 3.9,
                                        votes: 17762
                                  },
                                  critics: {
                                        rating: 4.2,
                                        votes: 238
                                  },
                                  fresh: 96,
                                  rotten: 7
                              },
                          genre: "Romance",
                          director: "Christophe Gans",
                          runtime: 112,
                          commen: [{
                          Name = Talisa Maegyr
                          Email = oona_chaplin@gameofthron.es
                          Text = Rem itaque ad sit rem voluptatibus. Ad fugiat...
                          Date = 1998-08-22T11:45:03.000+00:00
                          }]
                      });
db.Filmcoll.find();
db.Reward.find();