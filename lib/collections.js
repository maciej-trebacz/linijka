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
            upvoters: [],
            downvoters: [],
            added_on: new Date()
        });

        // Dodajemy wpis do kolekcji
        Posts.insert(newPost);
    },

    postVote: function(vote) {
        // Sprawdzamy, czy użytkownik jest zalogowany
        if (!Meteor.userId())
            throw new Meteor.Error("not-logged-in", "Aby wykonać tę czynność musisz być zalogowany!");
        
        // Sprawdzamy czy przesłano ID postu i typ głosu
        if (!vote.postId || !vote.type)
            throw new Meteor.Error("vote-post-data-missing", "Nie przesłano potrzebnych informacji.");
        
        var post;

        // Jeśli głos jest w górę...
        if (vote.type == "up") 
        {
            // Wysyłamy zapytanie do kolekcji gdzie szukamy najpierw postu o danym ID
            // nie zawierającego w tabelkach upvoters i downvoters ID użytkownika
            post = Posts.update({
                _id: vote.postId, 
                upvoters: {$ne: Meteor.userId()},
                downvoters: {$ne: Meteor.userId()},
            }, 

            // A następnie dodajemy jego ID do odpowiedniej tabelki i zwiększamy liczbę głosów
            {
                $addToSet: {upvoters: Meteor.userId()},
                $inc: {votes: 1}
            });
        }
        else 
        {
            // Analogicznie postępujemy w wypadku głosu w dół
            post = Posts.update({
                _id: vote.postId, 
                upvoters: {$ne: Meteor.userId()},
                downvoters: {$ne: Meteor.userId()}
            }, {
                $addToSet: {downvoters: Meteor.userId()},
                $inc: {votes: -1}
            });
        }

        // Jeśli zapytanie się nie powiodło to znaczy, że użytkownik już głosował
        if (!post)
            throw new Meteor.Error('vote-post-invalid', "Nie możesz już głosować na ten post!");
    }
});
