Template.commentList.helpers({
    comments: function() {
        return Comments.find({post: this._id}, {sort: {added_on: 1}}).fetch();
    },

});

Template.commentItem.helpers({
    time: function() {
        var added = this.added_on;
        return moment(added).fromNow();
    },
    author: function() {
        var author = Meteor.users.findOne(this.author);
        return author.username || author.profile.name;
    }
});

Template.commentAdd.events({
    'submit form': function (e) {
        e.preventDefault();

        var newComment = {
            text: $('#new-comment-text').val(),
            postId: this._id
        };

        e.target.reset();

        Meteor.call('commentAdd', newComment, function(error, result) 
        {
            if (error) return alert(error.reason);
        });
    }
});
