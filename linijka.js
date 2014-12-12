Posts = new Meteor.Collection("posts");

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
  
  Template.postList.helpers({
      posts: function () {
          return Posts.find().fetch();
      },

  });

  Template.postListItem.helpers({
      time: function() {
          return moment(this.added_on).fromNow();
      }
  });

  Template.header.events({
      'click #navbar .new-post-button': function () {
          $('.new-post-form').toggle();
          $('.new-post-form').removeClass('hide');
      }
  });

  UI.registerHelper("user", function() {
      return Meteor.user();
  });
}
