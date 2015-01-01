Template.postList.helpers({
    posts: function() {
        return Posts.find({}, {sort: {added_on: -1}}).fetch();
    },

});
