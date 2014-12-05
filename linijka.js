if (Meteor.isClient) {
  Template.postList.helpers({
      posts: function () {
          return [
            {
                title: "Afera zbożowa - znamy dalsze szczegóły",
                link: "http://wykop.pl",
                time: "08:12",
                author: "elfik_wie",
                comments_num: 88,
                votes: 102
            },
            {
                title: "Gruntowne zmiany w serwisie Wykop.pl. Od teraz to użytkownicy decydują o tym, co pojawi się na głównej. Rzecznik wypowiedział się...",
                link: "http://onet.pl",
                time: "04:24",
                author: "fojerfest",
                comments_num: 2,
                votes: 8
            },
            {
                title: "Prośba o Linijka-Efekt! Chytra baba znowu atakuje",
                link: "http://linijka.meteor.com",
                time: "12:42",
                author: "maver",
                comments_num: 42,
                votes: 47
            },
          ]
      }
  });
}
