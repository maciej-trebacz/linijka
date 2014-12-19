Posts = new Meteor.Collection("posts");

Meteor.methods({
    postAdd: function(newPost) 
    {
        // Sprawdzamy, czy użytkownik jest zalogowany
        if (!Meteor.userId())
            throw new Meteor.Error("not-logged-in", "Aby wykonać tę czynność musisz być zalogowany!");

        // Sprawdzamy czy przesłano wszystkie informacje
        if (!newPost.link || !newPost.title || !newPost.description)
            throw new Meteor.Error("new-post-data-missing", "Wypełnij najpierw wszystkie pola!");

        // Wybieramy tylko pola które nas interesują (co by jakiś śmieszek nie dodał innych pól)
        newPost = _.pick(newPost, "link", "title", "description");

        // Dodajemy do tablicy informacje o użytkowniku, dacie dodania, itp.
        newPost = _.extend(newPost, {
            author: Meteor.userId(),
            votes: 0,
            comments_num: 0,
            added_on: new Date()
        });

        // Dodajemy wpis do kolekcji
        Posts.insert(newPost);
    }
});
