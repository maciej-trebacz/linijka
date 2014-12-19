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
