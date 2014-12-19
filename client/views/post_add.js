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
