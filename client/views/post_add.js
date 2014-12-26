Template.postAdd.events({
    'submit form': function (e) {
        e.preventDefault();

        // Zbieramy dane do wysłania
        var newPost = {
            link: $('#new-post-link').val(),
            title: $('#new-post-title').val(),
            description: $('#new-post-description').val()
        };

        // Wywołanie metody po stronie serwera
        Meteor.call('postAdd', newPost, function(error, result) 
        {
            // Coś poszło nie tak?
            if (error) return alert(error.reason);

            // Wracamy na stronę główną
            Router.go('/');
        });
    }
});
