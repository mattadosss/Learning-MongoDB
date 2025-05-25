//
 async getLocationCount(findFilter) {
    return await this.modelLocations
        .find(findFilter)
        .count()
        .then(result => `Number of Locations found: ${result}`)
        .catch(err => console.error(err));
 }

 //
  async getLocationDistinctValues(filter) {
     return await this.modelLocations
         .distinct(filter)
         .then(result => result)
         .catch(err => console.error(err));
  }

  //
   async getLocations(findFilter, numOfDocs, outputFilter) {
      return await this.modelLocations
          .find(findFilter, outputFilter)
          .limit(numOfDocs)
          .then(result => result)
          .catch(err => console.error(err));
   }

   //
   use miau;
    db.locations.find({
       $and: [
           { "borough": "Brooklyn" },
           { "cuisine": "Chinese" }
       ]
    })
    .limit(10)
    .sort({ name: -1 })

    //

   db.locations.find({
       $and: [
           { "borough": "Brooklyn" },
           { "cuisine": "Chinese" }
       ]
    })
    .limit(10)
    .sort({ name: -1 })

    db.locations.insertOne({
       "address": {
           "building": "1307",
           "street": "Swiss Avenue",
           "zipcode": "12910"
       },
       "borough": "Brooklyn",
       "cuisine": "Swiss",
       "grades": [
           {
           }
       ],
               "date": new Date(),
               "grade": "D",
               "score": 10,
       "name": "Swiss Deli's",
       "restaurant_id": "41291000"
    })

    //
     db.locations.replaceOne(
        { name: "Swiss Traditional Deli's" },
        {

            name: "Swiss Traditional Deli's",
            cuisine: "Swiss",
            borough: "Queens"},
        { upsert: true }
     )

     //
      db.locations.find({
         "grades.score": { $gt: 40, $lt: 80 }
      })
      .sort({ "grades.score": 1 })

      //
       db.locations.distinct("grades.grade");

      db.locations.distinct("borough");

     db.locations.find({cuisine: /Switz/});