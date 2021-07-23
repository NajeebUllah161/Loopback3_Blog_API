// var models = require('./server.js').models;

// models.Profile.create({
//     name: "Najeeb"
// }, (err, profile) => {
//     console.log("Data?", err, profile);
// });


// models.Profile.upsert({
//     name: "Najeeb1",
//     id: "60e97d30edf9d83b3416888a"
// }, (err, profile) => {
//     console.log("Data?", err, profile);
// });

// models.Profile.findOrCreate({
//     name: "Najeeb2"
// }, (err, profile) => {
//     console.log("Data?", err, profile);
// });


// models.Profile.findOrCreate({
//     name: "Najeeb2"
// }, (err, profile) => {
//     if (err) {
//         console.log("There was an error: ", err);
//     } else if (profile) {
//         profile.updateAttributes({
//             email: "najeeb@najeeb.com"
//         }, (updateErr, updated) => {
//             console.log("Saved?", updateErr, updated);
//         });
//     }
// });



// models.Profile.findOrCreate({
//     name: "Najeeb2"
// }, (err, profile) => {
//     if (err) {
//         console.log("There was an error: ", err);
//     } else if (profile) {
//         profile.email = "najeeb@najeeb2.com";
//         profile.save((ue, updated) => {
//             console.log("Updated?", ue, updated);
//         });
//     }
// });

// var toSave = [
//     { name: 'Najeeb', email: "najeeb@mail.com" },
//     { name: 'Najeeb1', email: "mail@mail.com" },
//     { name: 'Najeeb', email: "mail1@mail.com" },
//     { name: 'Najeeb2', email: "mail2@mail.com" },
//     { name: 'Najeeb', email: "soeone@mail.com" },
//     { name: 'Najeeb34', email: "asf@mail.com" },
//     { name: 'Someone', email: "email@mail.com" },
//     { name: 'Someone else', email: "najeeb@najeebullah@mail.com" },
//     { name: 'Someoneel', email: "najeeb@najeebullah.com" },
//     { name: 'Some1', email: "najeeb1@mail.com" },
//     { name: 'someone', email: "najeeb2@mail.com" },
//     { name: 'najeebullah', email: "najeeb3@mail.com" },
//     { name: 'najeeb', email: "najeeb@mail4.com" },
// ]


// toSave.map(obj => {
//     models.Profile.create(obj, (err, created) => {
//         console.log("Created?", err, created);
//     });
// });


// var filter = {
//     where: {}, //kind of like mySQL Where Clause
//     order: 'date ASC',
//     limit: 3,
//     include: {
//         relation: "Post",
//         scope: {
//             limit: 5,
//             order: 'date DESC',
//             include: {
//                 relation: 'Image',
//                 limit: 1,
//                 where: { type: 'thumbnail' }
//             }
//         }
//     }
// }





// var filter = {
//     where: {
//         email: { like: 'najeeb' },

//     }, //kind of like mySQL Where Clause
//     order: 'id ASC', //Orderby "Field direction"
//     limit: 10,
//     skip: 1,
//     fields: {
//         email: true
//     }
// }

// // models.Profile.findOne({ where: { name: 'Najeeb' }, order: 'id DESC' }, (err, found) => {
// //     console.log("Found?", err, found);
// // });


// models.Profile.findById("60e98062791a84369cbcf492",  (err, found) => {
//     console.log("Found?", err, found);
//     // found.destroy();

// });




// var filter = {
//     where: {
//         name: { like: 'Najeeb' },

//     }, //kind of like mySQL Where Clause
//     order: 'id ASC', //Orderby "Field direction"
//     limit: 10,
//     skip: 0,
//     fields: {
//         email: true
//     }
// }



// models.Profile.destroyAll(filter.where,  (err, found) => {
//     console.log("Found?", err, found);
//     // found.destroy();

// });



// models.Profile.destroyById("60e9850f79e4240fa8cc8d79", (err, found) => {
//     console.log("Found?", err, found);
//     // found.destroy();

// });


// Destroy relations
// models.Profile.findById("60e97cc93672df39b4bb45f5", {include: 'Post'}, (err, found) => {
//     console.log("Found?", err, found);
//     found.Post.destroyAll({date: {lte: new Date('2019-02-04')}});
//     // found.destroy();

// });

































