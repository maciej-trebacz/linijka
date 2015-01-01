Comments = new Meteor.Collection("comments");

Meteor.methods({
    commentAdd: function(newComment) 
    {
        if (!Meteor.userId())
            throw new Meteor.Error("not-logged-in", "Aby wykonać tę czynność musisz być zalogowany!");

        if (!newComment.text)
            throw new Meteor.Error("new-comment-text-missing", "Wpisz treść komentarza!");

        if (!newComment.postId)
            throw new Meteor.Error("new-comment-data-missing", "Nie podano wszystkich informacji!");

        Comments.insert({
            text: newComment.text,
            post: newComment.postId,
            author: Meteor.userId(),
            added_on: new Date()
        });

        Posts.update({
            _id: newComment.postId
        }, {
            $inc: {comments_num: 1}
        });
    }
});
