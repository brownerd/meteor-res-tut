// Creating a new colleciton in MongoDB
Resolutions = new Mongo.Collection('resolutions')

if (Meteor.isClient) {
  Template.body.helpers({
    // resolutions: [
    //   {title: "Hello Resolution #1"},
    //   {title: "Bye Resolution #2"},
    //   {title: "What up!"}
    // ]
    resolutions: function() {
      return Resolutions.find()
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
