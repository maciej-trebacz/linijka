Posts = new Meteor.Collection("posts");

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
  
  Template.postList.helpers({
      posts: function () {
          return Posts.find().fetch();
      }
  });

  Template.postListItem.helpers({
      time: function() {
          return moment(this.added_on).fromNow();
      }
  });
}
