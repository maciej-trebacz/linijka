Posts = new Meteor.Collection("posts");

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
  
  Template.postList.helpers({
      posts: function () {
          return Posts.find({}, {sort: {added_on: -1}}).fetch();
      },

  });

  Template.postListItem.helpers({
      time: function() {
          return moment(this.added_on).fromNow();
      },
      author: function() {
          return Meteor.users.findOne(this.author);
      }
  });

  Template.header.events({
      'click #navbar .new-post-button': function () {
          $('.new-post-form').toggle();
          $('.new-post-form').removeClass('hide');
      }
  });

  Template.postAddForm.events({
      'submit form': function (e) {
          e.preventDefault();

          var newPost = {
              link: $('#new-post-link').val(),
              title: $('#new-post-title').val(),
              description: $('#new-post-description').val(),
              author: Meteor.userId(),
              votes: 0,
              comments_num: 0,
              added_on: new Date()
          };

          if (!newPost.link || !newPost.title || !newPost.description) {
              alert("Wypełnij najpierw wszystkie pola!");
              return;
          }

          Posts.insert(newPost);
          $('.new-post-form').hide();
      }
  });

  UI.registerHelper("user", function() {
      return Meteor.user();
  });
}
