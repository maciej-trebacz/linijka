# Kurs Meteora dla Mirków
## Część 1: Wprowadzenie

### Wideo

Oprócz tekstowej wersji poradnika, na Youtube będę publikował filmy pokazujące krok po kroku wszystko, co robię. Polecam przeczytać cały artykuł, a także obejrzeć film, ale przede wszystkim - powtórzyć wszystko samemu. Tylko wtedy czegoś się nauczycie.

[Kurs Meteora, część 1 na Youtube](https://www.youtube.com/watch?v=rfloQY2tzxI)

### Czym jest Meteor?

[Meteor](http://meteor.com) to platforma do tworzenia aplikacji internetowych. Takich platform jest wiele, ale Meteor jest inny niż one wszystkie. Czym się wyróżnia?

* Po pierwsze: Jest kompletny. By zacząć przygodę na przykład z PHP, potrzebujesz zainstalować serwer (Apache, Nginx lub inny), środowisko PHP, jakąś bazę danych, wszystko to skonfigurować, a potem zacząć pisać kod. W Meteorze instalacja sprowadza się do wydania **jednej komendy w konsoli**: `curl https://install.meteor.com/ | sh`, stworzenie nowego projektu do drugiej: `meteor create nazwa_projektu`, a uruchomienie go do trzeciej: `meteor`. W ciągu dosłownie minuty możesz stworzyć i w przeglądarce otworzyć działającą aplikację.
* Po drugie: Jest łatwy do nauki. Z reguły, oprócz HTML i CSS, by stworzyć aplikację internetową, musisz się nauczyć przynajmniej dwóch języków programowania - jednego działającego po stronie klienta (w przeglądarce), z reguły Javascript, a drugiego działającego po stronie serwera, na przykład PHP. W przypadku Meteora **potrzebujesz tylko Javascriptu**. W dodatku Meteor udostępnia całą gamę tzw. _smart packages_, czyli gotowych paczek udostępniających określoną funkcjonalność. Wydaniem jednej komendy możesz dołożyć do swojej aplikacji dodatkowe funkcje, takie jak obsługa kont użytkowników, logowanie przez Twittera, pole wyboru dat i inne.
* Po trzecie: Aplikacje w Meteorze z założenia działają w czasie rzeczywistym. Oznacza to, że wszystko co robi jeden użytkownik w swoim oknie przeglądarki jest od razu widoczne u wszystkich innych i **nie trzeba pisać specjalnie żadnego kodu do synchronizacji**. Wyobraź sobie Wykop, w którym nigdy nie musisz naciskać przycisku "Odśwież", bo wszystko odświeża się od razu, na twoich oczach. Właśnie coś takiego (choć oczywiście mocno uproszczone) napiszemy podczas tego kursu.

Zalety Meteora dobrze prezentuje ten (dość stary) screencast wykonany przez samych autorów: https://www.youtube.com/watch?v=fsi0aJ9yr2o

### Jak zacząć przygodę z Meteorem?

Jak pisałem wyżej, zacząć można niezwykle szybko. Jest jednak pewien haczyk - Meteor działa natywnie na Linuksie i OSX. Wersja dla Windows jest w przygotowaniu, ale na chwilę obecną jest nieskończona. Żeby nie zostawić naszych Windowsowych przyjaciół na lodzie, kurs ten będzie oparty na platformie [Nitrous.io](http://nitrous.io) udostępniającej darmowe Linuksowe serwery developerskie.

Po stworzeniu konta na Nitrous (lub zainstalowaniu Meteora na swoim komputerze) tworzymy nowy projekt. Nasza aplikacja będzie się nazywała **Linijka**, na cześć znanej Mirkom pasty :). Stworzymy ją wydając komendę:

```
meteor create linijka
```

Aby zobaczyć, czy aplikacja działa, wchodzimy do katalogu i wydajemy komendę `meteor`:

```
cd linijka
meteor
```

Po chwili dostaniemy komunikat, że aplikacja jest dostępna pod adresem `http://localhost:3000`. Wchodząc tam ujrzymy prosty Hello World w wersji Meteora:

![Imgur](http://i.imgur.com/ZbltnJE.png)

Pierwszą zaletę Meteora możesz dostrzec bardzo szybko, zmieniając cokolwiek w pliku HTML. Po zapisaniu pliku, przeglądarka w której miałeś otwartą aplikację automatycznie przeładuje się, by pokazać nowe zmiany. Co więcej, zmiany w CSS nie powodują nawet przeładowania - nowe style są aplikowane na bieżąco. W nomenklaturze Meteora nazywa się to `Hot code push` i bardzo ułatwia testowanie aplikacji. Co więcej, dobrze wykonane sprawi, że możesz zaktualizować na żywo aplikację podczas, gdy jest ona używana, bez przeszkadzania użytkownikom.

### Na razie to wszystko

Nauczyliście się dzisiaj czym jest Meteor i jak stworzyć w nim prosty Hello World. Co więcej, w tym celu nie napisaliście ani jednej linii kodu :).

Następnym razem stworzymy zalążek naszej aplikacji - stronę z postami. Zapraszam za tydzień! Jeśli nie chcesz tego przegapić, subskrybuj na Wykopie tag #[kursmeteora](http://wykop.pl/tag/kursmeteora).

## Część 2: Szablony i Kolekcje

### Wideo

Oprócz tekstowej wersji poradnika, na Youtube będę publikował filmy pokazujące krok po kroku wszystko, co robię. Polecam przeczytać cały artykuł, a także obejrzeć film, ale przede wszystkim - powtórzyć wszystko samemu. Tylko wtedy czegoś się nauczycie.

[Kurs Meteora, część 2 na Youtube](https://www.youtube.com/watch?v=rfloQY2tzxI)

### Szablony

Chociaż podstawowym językiem opisu zawartości aplikacji w Meteorze nadal jest HTML, będziemy korzystać ze [Spacebars](https://github.com/meteor/meteor/blob/devel/packages/spacebars/README.md), czyli języka szablonów Meteora. Dzięki temu językowi możemy wprowadzać do naszej aplikacji elementy dynamiczne - pobierać dane z zewnątrz, wyświetlać informacje pod pewnymi warunkami, i tym podobne. Zanim jednak do tego przejdziemy, stwórzmy podstawową zwykłą statyczną stronę, by ustalić z grubsza wygląd naszej nowej strony.

> Dla ułatwienia prowadzenia kursu stworzyłem na GitHubie repozytorium, w którym będę na bieżąco publikował kod do poszczególnych części kursu. Repozytorium znajdziecie pod tym adresem: https://github.com/M4v3R/linijka

W tym celu będziemy potrzebowali dwóch plików - [szablonu HTML](https://github.com/M4v3R/linijka/blob/linijka-1-1/linijka.html) i [arkusza CSS](https://github.com/M4v3R/linijka/blob/linijka-1-1/linijka.css). Plik `linijka.js` na razie zostawiamy w spokoju, bo na chwilę obecną nie jest nam potrzebny. Po podmienieniu plików HTML i CSS zobaczymy rezultat naszej pracy:

![Imgur](http://i.imgur.com/U3OnxJi.png)

Jest całkiem nieźle, prawda? Oczywiście zwykła statyczna strona nie jest zbyt ekscytująca, dlatego spróbujemy dodać jej trochę dynamizmu poznając jednocześnie mechanizm działania szablonów w Meteorze.

Szablon definiujemy przy pomocy specjalnego tagu `template` z parametrem `name` zawierającym nazwę szablonu. I tak na przykład możemy stworzyć szablon `"postList"`, który będzie wyglądał następująco:

```
<template name="postList">
    <div class="container post-list">
        ...
    </div>
</template>
```

Kod ten możemy umieścić gdziekolwiek, na końcu obecnego pliku `linijka.html` lub w zupełnie innym pliku by zachować większy porządek. Docelowo będziemy korzystali z tego drugiego sposobu, ale na razie dla uproszczenia wszystko znajdzie się w jednym pliku. 

Tak samo robimy z kodem HTML paska nawigacyjnego - wycinamy go i wstawiamy do nowego szablonu o nazwie `header`:

```
<template name="header">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        ...
      </div>
    </nav>
</template>
```

Jeśli chcemy wywołać szablon w określonym miejscu na stronie, używamy specjalnego znacznika: `{{> nazwa_szablonu}}`. Zatem w naszej aplikacji, po wycięciu listy postów i paska nawigacyjnego i zrobieniu z nich osobnych szablonów, w tagu body wstawiamy:

```
<body>
    {{> header}}
    {{> postList}}
</body>
```

Po odświeżeniu strony zobaczymy, że... nic się nie zmieniło. Jeśli tak to dobrze! To znaczy, że ogarnęliśmy podstawowe działanie szablonów w Meteorze.

No dobrze, ale co z listą postów? Dane z pewnością nie powinny znajdować się w szablonie HTML, powinny zostać podstawione do szablonu przez kod aplikacji. Tak właśnie zrobimy. Najpierw, otwórzmy plik `linijka.js` i wstawmy do niego następujący kod:

```
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
                title: "Gruntowne zmiany w serwisie Wykop.pl. " +
                       "Od teraz to użytkownicy decydują o tym, " + 
                       "co pojawi się na głównej. Rzecznik wypowiedział się...",
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
``` 

Kilka słów wyjaśnienia:

1. Warunek `if (Meteor.isClient)` sprawia, że dany kod wykona się tylko w przeglądarce, nie będzie się wykonywał na serwerze. Jest to w naszym wypadku logiczne, bo podstawiamy dane do szablonu, serwer nie jest nam tutaj potrzebny. Jeśli chcielibyśmy wykonać jakiś kod na serwerze, użyjemy warunku ` Meteor.isServer` lub, jak się przekonamy w kolejnych częściach - stosownej struktury katalogów mówiącej Meteorowi który kod jest do czego.
2. Klasa `Template` zawiera wszystkie funkcje dotyczące szablonów w Meteorze. Jej pola odpowiadają nazwom szablonów, które utworzyliśmy w pliku HTML. A zatem `Template.postList` będzie odnosiło się do szablonu z listą postów, a `Template.header` do naszego paska nawigacyjnego. Metoda `helpers` pozwala nam zdefiniować tzw. helpery, czyli kawałki kodu zwracające jakąś treść z określonymi nazwami, do których odwołamy się w szablonie.
3. Tworzymy helpera o nazwie `posts`, który...
4. Zwraca zwykłą, Javascriptową tablicę z trzema obiektami, zawierającymi wymyślone przez nas nazwy pól, pasujące do naszej aplikacji. W naszym wypadku chcemy listę postów, z których każdy zawiera: tytuł (title), odnośnik do strony (link), czas dodania (time), imię autora (author), liczbę komentarzy (comments_num) i sumę ocen (votes).

Zapisujemy plik. Nasza strona się odświeży, ale nic ciekawego jeszcze się nie stanie, bo w kodzie HTML mamy nadal "na sztywno" wpisane dane postów. Usuwamy zatem wszystko z szablonu `postList` i zamieniamy jego zawartość na:

```
<template name="postList">
    <div class="container post-list">
        {{#each posts}}
            {{> postListItem}}
        {{/each}}
    </div>
</template>
```

Tutaj poznajemy kolejny znacznik języka szablonów Meteora: `{{#each}}`. Jest to nic innego, jak zwykła pętla, która przechodzi przez kolejne wartości podanej tablicy (w naszym wypadku tablica zwracana przez helper o nazwie `posts`) i wyświetla kod zawarty w jej wnętrzu, przekazując do niego dane aktualnie przetwarzanego obiektu. Wewnątrz pętli odnosimy się jedynie do kolejnego szablonu, `postListItem`, którego jeszcze nie stworzyliśmy. Będzie to nic innego, jak lekko przerobiony kod który wyświetlał poszczególne posty:

```
<template name="postListItem">
    <div class="post">
        <div class="post-votes">
            <a class="post-vote vote-up">▲</a>
            <p class="post-vote vote-count">{{votes}}</p>
            <a class="post-vote vote-down">▼</a>
        </div>
        <div class="post-details">
            <h3><a href="{{link}}" target="_blank">{{title}}</a></h3>
            <p class="post-date-author">dodane o {{time}} przez 
            <span class="post-author">{{author}}</span></p>
            <p class="post-comments"><a href="#">{{comments_num}} 
            komentarzy</a></p>
        </div>
    </div>
</template>
```

Jedyne zmiany których dokonaliśmy, to podmienienie wpisanych na sztywno treści znacznikami, np. `{{title}}`. Te znaczniki to nic innego, jak wywołanie helperów, o których mówiliśmy wcześniej. A więc na przykład znacznik `{{time}}` wywoła zdefiniowany w kodzie Javascript helper `"time"`. Ale zaraz, my nie definiowaliśmy żadnego helpera o takich nazwach, więc skąd one się wzięły? Co to za magia?

Zgodnie z tym co mówiłem wcześniej, użyty przez nas znacznik `{{#each posts}}` przekazuje do wywołanego kodu aktualnie przetwarzany obiekt. Z kolei wywołanie szablonu {{> postListItem}} bez żadnych argumentów zakłada, że ten zawartość tego obiektu zostanie przekazana do podanego szablonu jako zestaw helperów, które można wywoływać powyższą składnią, np. `{{title}}`. W wypadku wielu innych frameworków musielibyśmy to zachowanie w jakiś sposób definiować, ale ponieważ tak musielibyśmy robić w większości wypadków, Meteor robi to za nas ( ͡° ͜ʖ ͡°).

Dlatego też nie musimy nic więcej robić. Gdy zapiszecie oba pliki i spojrzycie w oko przeglądarki, to jeśli wszystko zrobiliście dobrze, ujrzycie taki widok:

![Imgur](http://i.imgur.com/rYhQnKU.png)

Niby niewiele się zmieniło, ale tym razem dane pochodzą z kodu Javascript. Gdy coś w nim zmienicie, strona się automatycznie odświeży z nowymi danymi. Sukces! Kod, jaki dotąd stworzyliśmy, możecie obejrzeć [tutaj](https://github.com/M4v3R/linijka/tree/linijka-1-2).

### Kolekcje

Nasza aplikacja robi już coś konkretnego, ale nadal są w niej wyświetlane statyczne dane, jej użytkownicy nie mają żadnego wpływu na to co jest na stronie. Czas to zmienić!

Każda aplikacja internetowa korzysta z bazy danych, w której są przechowywane informacje wysyłane przez użytkowników lub wytworzone przez samą aplikację. Meteor w tym celu wykorzystuje bazę danych `MongoDB`, ale w dość niekonwencjonalny sposób. Otóż podczas gdy w wielu dotychczasowych aplikacji dane były pobierane z bazy danych po stronie serwera, gdzie na podstawie statycznych szablonów generowany był kod HTML i dopiero ten kod był wysyłany do przeglądarki, Meteor działa zupełnie inaczej. Serwer nadal przechowuje główną kopię danych w bazie, ale baza ta jest synchronizowana z przeglądarką, w której znajduje się kopia (w dużym uproszczeniu, można np. zdefiniować które pola/rekordy zostaną zsynchronizowane) do której kod Javascript w przeglądrce ma dostęp i na jej podstawie buduje HTML w przeglądarce. Oczywiście wszystko to dzieje się w znanym nam już Meteorowym stylu - aby uzyskać tę funkcjonalność nie trzeba pisać żadnego kodu.

Zobaczymy teraz jak proste jest sprawienie, że nasza aplikacja będzie w pełni dynamiczna. Najpierw stworzymy `kolekcję` (odpowiednik tabeli z SQL), która będzie zawierała nasze posty. Wystarczy, że dodamy na samym początku naszego pliku `linijka.js`:

```
Posts = new Meteor.Collection("posts");
```

To wystarczy, by mieć dostęp do tej kolekcji przez zmienną `Posts`. 

> Jak być może niektórzy z was wiedzą, w Javascript z reguły używa się słówka `var` by definiować zmienne, jednak tak zdefiniowane zmienne są widoczne tylko w obrębie pliku/metody w którym zostały utworzone. Tutaj celowo to słowo kluczowe pomijamy, bo chcemy, by do `Posts` był dostęp z każdego miejsca w naszej aplikacji.

Aby przekazać zawartość kolekcji do naszego szablonu, usuniemy wpisane "na sztywno" dane z helpera `posts` i zamienimy go tylko jedną linią kodu:

```
return Posts.find().fetch();
```

Oznacza ona, że tworzymy zapytanie w kolekcji `Posts` by odnaleźć wszystkie jej obiekty (`.find()` bez argumentów wyszukuje po prostu wszystkie dostępne obiekty) i wyciągamy ich dane z bazy (po to jest metoda `.fetch()`). Zatem cały kod pliku `linijka.js` będzie liczył teraz zaledwie 9 linijek:

```
Posts = new Meteor.Collection("posts");


if (Meteor.isClient) {
  Template.postList.helpers({
      posts: function () {
          return Posts.find().fetch();
      }
  });
}
```

Po odświeżeniu strony zobaczymy, że znikły nasze posty. To logiczne, w końcu nasza baza jest pusta. Jednak żeby strona nie straszyła taką pustką, dokonajmy małej zmiany w szablonie linijka.html przy użyciu nowego znacznika - `{{#if}}`, który tworzy blok warunkowy. Dodamy go do naszego bloku `{{#each posts}}`, tak iż całość będzie wyglądać następująco:

```
        {{#if posts}}
        {{#each posts}}
            {{> postListItem}}
        {{/each}}
        {{else}}
            <h3 class="post-list-no-posts">Nie ma żadnych postów :(</h3>
        {{/if}}
```

Pierwszy blok pomiędzy `{{#if posts}}` a `{{else}}` zostanie wykonany, gdy helper `posts` zwróci jakiekolwiek dane (mówiąc ściślej, gdy wynik przekazany przez helper można sprowadzić do logicznego `false`, pustego stringa lub pustej tablicy). Drugi blok, pomiędzy `{{else}}` a `{{/if}}` wykona się w przeciwnym wypadku. 

Po odświeżeniu ujrzymy taki oto obrazek:

![Imgur](http://i.imgur.com/BaGVJcw.png)

Ok, teraz czas na wstawienie jakichś danych. W jaki sposób to zrobić? To, co teraz zrobimy, zapewne zdziwi co niektórych programistów, którzy mieli do czynienia z PHP czy Rubym. Otwieramy konsolę Javascript w przeglądarce, i wklejamy w niej następujący kod:

```
Posts.insert({
                title: "Afera zbożowa - znamy dalsze szczegóły",
                link: "http://wykop.pl",
                added_on: new Date(),
                author: "elfik_wie",
                comments_num: 88,
                votes: 102
            });

Posts.insert({
                title: "Gruntowne zmiany w serwisie Wykop.pl. " +
                       "Od teraz to użytkownicy decydują o tym, " + 
                       "co pojawi się na głównej. Rzecznik wypowiedział się...",
                link: "http://onet.pl",
                added_on: new Date(new Date() - 123312),
                author: "fojerfest",
                comments_num: 2,
                votes: 8
});

Posts.insert({
                title: "Prośba o Linijka-Efekt! Chytra baba znowu atakuje",
                link: "http://linijka.meteor.com",
                added_on: new Date(new Date() - 897512),
                author: "maver",
                comments_num: 42,
                votes: 47
});
```

Metoda `Posts.insert` dodaje przekazany obiekt do bazy (do kolekcji `Posts`). Te obiekty nie różnią się prawie niczym od tych, które mieliśmy wcześniej wpisane w kodzie Javascript na sztywno (oprócz pola `added_on`, w którym wykorzystałem Javascriptową klasę Date, by stworzyć datę bliską dacie faktycznego dodania). Wywołujemy ją trzy razy, po jednym razie dla każdego obiektu:

![Imgur](http://i.imgur.com/mYLjgKb.png)

Naciskamy Enter i... voila!

Nasze posty znowu wyświetlają się na ekranie:

![Imgur](http://i.imgur.com/1uESpkH.png)

Jak to się stało? Otóż wklejając i wykonując powyższy kod, dodaliśmy do lokalnej kopii kolekcji `Posts` trzy nowe obiekty. Meteor automatycznie zauważył istnienie nowych danych, a więc w szablonie HTML zamiast wyświetlać napis "Nie ma żadnych postów :(" wykonał się blok `#each` i wyświelił nowe posty. Wszystko to zdarzyło się w ułamku sekundy, bez komunikacji z serwerem. Ale to nie wszystko! Gdybyście przed dodaniem postów do bazy otworzyli drugą przeglądarkę na innym komputerze, również na nim automatycznie posty by się pojawiły bez odświeżania strony. Dzieje się tak dlatego, bowiem Meteor po dodaniu postów zsynchronizował lokalną kopię bazy danych z serwerem, a następnie - ze wszystkimi połączonymi do niego klientami, nawet na innych komputerach. Muszę przyznać, że oglądając to po raz pierwszy opadła mi szczęka. Pamiętajcie, że to wszystko stało się po napisaniu przez nas **dziewięciu** linii kodu Javascript i kilku kawałków HTMLa. Gdyby chcieć uzyskać podobny efekt przy użyciu innych narzędzi, trzeba by spędzić przy tym wiele godzin.

Ci, którzy subskrybują [#piekloperfekcjonistow](http://www.wykop.pl/tag/piekloperfekcjonistow/) być może zauważyli jeden mały mankament na naszej stronie. Otóż znikły nam czasy dodania postów! Naprawmy ten błąd, przy okazji trochę ulepszając ten element - wyświetlając czasy relatywne (typu "10 minut temu", itp.). Aby tego dokonać, znowu użyjemy "magii Meteora" i tym razem skorzystamy z obszernego repozytorium paczek, które on dostarcza. Takową funkcjonalność dostarcza biblioteka [momentjs](http://momentjs.com), którą znajdziemy w paczce `rzymek:moment`. Co ciekawe, autor tej paczki udostępnia też pliki lokalizacyjne do niej, więc doinstalowanie także paczki `rzymek:moment-locale-pl` pozwoli nam się cieszyć piękną polszczyzną w wynikowych napisach. A więc wykonujemy w terminalu dwie komendy:

```
meteor add rzymek:moment
meteor add rzymek:moment-locale-pl
```

W szablonie HTML jedyne, co musimy zrobić, to wyrzucić literkę "o" sprzed znacznika `{{time}}`, która by nam teraz przeszkadzała:

```
<p class="post-date-author">dodane {{time}} przez 
<span class="post-author">{{author}}</span></p>
```

Natomiast w pliku `linijka.js` dodajemy kolejnego helpera o nazwie `time`, działającego w szablonie `postListItem`:

```
  Template.postListItem.helpers({
      time: function() {
          return moment(this.added_on).fromNow();
      }
  });
```

Sposób korzystania z biblioteki momentjs jest poza zakresem tego kursu, ale wyjaśnię tylko, że ten kod tworzy nowy obiekt zawierający datę z pola `added_on` (które dodaliśmy wcześniej do bazy), a następnie tworzy z tej daty odpowiedni do wyświetlenia napis (metoda `.fromNow()`). Po zapisaniu pliku powinniśmy wreszcie zobaczyć prawidłowy zapis czasu dodania poszczególnych postów:

![Imgur](http://i.imgur.com/CR0Ienh.png)

Całkiem nieźle, jak na 15 linii kodu, prawda? Cały dotychczasowy kod możecie obejrzeć tutaj: https://github.com/M4v3R/linijka/tree/linijka-1-3

Nauczyliśmy się dzisiaj co nieco na temat szablonów Meteorze, o tym jak wyświetlać dane, ale także - jak je zachowywać i pobierać z bazy. Nasza aplikacja zaczyna żyć - można do niej już dodawać posty, które będą przechowywane w bazie. Niestety, sposób ich dodawania nie jest zbyt "user friendly" - trzeba to robić z poziomu konsoli Javascript. Najlepiej byłoby, gdyby można było mieć w Linijce własny profil, a następnie móc dodawać posty przy użyciu jakiegoś formularza na stronie. Z reguły jednak tworzenie kont użytkowników w aplikacjach internetowych to temat obszerny, wymagający wiedzy i łatwy do wykonania źle (jak przechowywać hasła użytkowników? Szyfrować czy hashować? MD5, SHA2, Bcrypt, PBKDF2, co to za skróty? I co z tą solą, u nas w domu za zapasy przypraw odpowiada żona...). Jak się jednak przekonamy, również w tej dziedzinie Meteor potrafi mocno zaskoczyć. Do zobaczenia!

## Część 3: Użytkownicy i dodawanie postów

### Konta użytkowników

Jak pisałem ostatnio, aby nasz serwis mógł zacząć "żyć", musimy dodać do niego obsługę kont użytkownika. Jest to funkcja, którą posiada praktycznie każdy serwis internetowy, a jednak wymaga ona sporo uwagi. Zwykle musimy zadbać o poniższe rzeczy:

1. Gdzie i w jaki sposób przechowywać dane użytkowników
2. Jak przechowywać hasła
3. Odzyskiwanie zapomnianych haseł
4. Formularz rejestracyjny i jego walidacja (np. czy dany użytkownik już istnieje)
5. Formularz logowania
6. Opcjonalnie - możliwość logowania przez Facebooka/Twittera

Generalnie sporo roboty. Gdyby chcieć to zrobić "od zera", zajęłoby to minimum kilka godzin, a gdyby chcieć to zrobić dobrze - kilka dni (i sporo wcześniejszego doświadczenia). W Meteorze zajmie nam to nie więcej niż **5 minut**. 

Najpierw dodajemy niezbędne paczki, wykonując komendy:

```
meteor add accounts-password
meteor add ian:accounts-ui-bootstrap-3
```

Pierwsza z nich zawiera kod do obsługi kont użytkownika po stronie serwera, druga natomiast interfejs użytkownika dostosowany pod Bootstrapa 3, którego używamy. 

Paczki te są konfigurowalne, można dostosowywać je pod swoje potrzeby. Domyślnie przy rejestracji i logowaniu potrzebny jest w nich tylko adres email. My chcemy używać również nazwy użytkownika, dlatego do pliku `linijka.js` dodajemy w sekcji `if (Meteor.isClient) {` następujący kod:

```
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
```

Dokumentację dotyczącą konfiguracji tych paczek znajdziecie [tutaj](http://docs.meteor.com/#/full/accounts_config). 

> Nie wszystkie rzeczy w tych paczkach są konfigurowalne, szczególnie, jeśli chodzi o wygląd interfejsu logowania. Na szczęście możemy z tego ostatniego całkowicie zrezygnować i podpiąć swój interfejs i dodatkowe wymagane przez nas funkcje, ale jest to poza zakresem tego kursu.

Teraz musimy gdzieś umieścić kontrolkę do logowania. Paczka, którą dodaliśmy jest dostosowana, by umieszczać ją w pasku nawigacyjnym i tak też zrobimy. W pliku `linijka.html`, w szablonie `header` podmieniamy zawartość diva `navbar` na poniższą:

```
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Najlepsze</a></li>
            <li><a href="#">Nowości</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            {{> loginButtons align="right"}}
          </ul>
        </div>
``` 

Dodany przez nas kod to `{{> loginButtons align="right"}}`. Oznacza on, że w to miejsce zostanie wstawiony szablon `loginButtons`, który dostarcza dodana przez nas paczka, z parametrem `align="right"`, który mówi jej, by przycisk był wyrównany do prawej. Po zapisaniu obu plików odwiedzamy stronę, a tam zobaczymy taki widok:

![Imgur](http://i.imgur.com/UV4N5TC.png)

Klikamy w prawym górnym rogu w "Sign in / up", a następnie tworzymy nowe konto:

![Imgur](http://i.imgur.com/v3dXb7i.png)

Po kliknięciu w Create nasze konto jest założone i jesteśmy już zalogowani!

![Imgur](http://i.imgur.com/IpF2gAi.png)

To wszystko! Wystarczyło dodanie dwóch paczek, 3 linii Javascript i kilku linii HTML by mieć na naszej stronie w pełni funkcjonalny system logowania i obsługi kont użytkownika. Gdybyśmy chcieli, moglibyśmy jeszcze dorzucić weryfikację przez email w podobnie łatwy sposób (używając ustawienia `sendVerificationEmail`, patrz w dokumentacji), ale na razie to pominiemy.

Dotychczasowy kod aplikacji możecie przejrzeć [tutaj](https://github.com/M4v3R/linijka/tree/linijka-2-1).

### Formularz dodawania postów

To fajnie, że możemy się zalogować, ale na razie nic nam to nie daje! Dodajmy zatem do naszej aplikacji formularz, który wreszcie umożliwi każdemu samodzielne dodawanie nowych postów.

Najpierw najtrudniejsze, czyli napisanie szablonu HTML naszego formularza. Powinien on mieć pola do wpisania tytułu posta (title), adresu strony (link), opisu znaleziska (description) i przycisk do wysyłania tych danych. Użyłem w tym celu [generatora formularzy do Bootstrap](http://bootsnipp.com/forms?version=3) i otrzymałem kod, który wrzuciłem do nowego szablonu `postAddForm`:

```
<template name="postAddForm">
  <form class="form-horizontal new-post-form">
    <fieldset>
    <legend>Dodaj nowy post</legend>

    <div class="form-group">
      <label class="col-sm-2 control-label" for="new-post-link">Link</label>  
      <div class="col-sm-8">
        <input id="new-post-link" name="new-post-link" type="text" placeholder="Adres do strony którą chcesz dodać, np.: http://wykop.pl/" class="form-control input-md" required="">
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-2 control-label" for="new-post-title">Tytuł</label>  
      <div class="col-sm-8">
        <input id="new-post-title" name="new-post-title" type="text" placeholder="Co zawiera dodawana przez ciebie strona?" class="form-control input-md" required="">
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-2 control-label" for="new-post-description">Opis</label>
      <div class="col-sm-8">                     
        <textarea class="form-control" id="new-post-description" name="new-post-description"></textarea>
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-2 control-label" for="new-post-submit"></label>
      <div class="col-sm-4">
        <button id="new-post-submit" name="new-post-submit" class="btn btn-primary">Dodaj</button>
      </div>
    </div>

    </fieldset>
  </form>
</template>
```

Jedyne co zmieniłem w kodzie który otrzymałem z generatora to zmieniłem kilka klas, żeby wynik lepiej wyglądał i dodałem w nadrzędnym tagu klasę `new-post-form`, która będzie nam potrzebna, by odnieść się do niego w kodzie Javascript.

Następnie wywołujemy ten szablon zaraz na początku szablonu `postList`:

```
 <template name="postList">
     <div class="container post-list">
       {{> postAddForm}}
       ...
```

I naszym oczom ukaże się następujący widok:

![Imgur](http://i.imgur.com/HYVy7Em.png)

Wszystko fajnie, ale nie chcemy, żeby ten formularz pojawiał się od razu, ale dopiero po kliknięciu jakiegoś przycisku. W tym celu dokonujemy trzech zmian. Po pierwsze, w polu `class` naszego formularza (tam gdzie dodaliśmy klasę `new-post-form`) dopisujemy klasę `hide`, która sprawi, że nasz formularz zniknie ze strony przy jej załadowaniu. Po drugie, dodajemy w kodzie HTML szablonu `header` przycisk:

```
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" class="new-post-button">Dodaj</a></li>
            {{> loginButtons align="right"}}
          </ul>
```

Przyciskowi temu przypisujemy klasę `new-post-button`, do której odniesiemy się za chwilę. Po trzecie, w pliku `linijka.js` dodajemy poniższy kod:

```
Template.header.events({
    'click #navbar .new-post-button': function () {
        $('.new-post-form').toggle();
        $('.new-post-form').removeClass('hide');
    }
});
```

Co on robi?

1. W podobny sposób dodawaliśmy wcześniej helpery, teraz do szablonu `header` dodamy obsługę zdarzeń (`events`), przekazując obiekt zawierający zdarzenia, które chcemy obsłużyć.
2. Każda para klucz/wartość jest zbudowana następująco: w kluczu podajemy nazwę zdarzenia, które obsługujemy, a następnie po spacji - selektor CSS do konkretnego obiektu na stronie. W tym wypadku obsługujemy zdarzenie `click` dla selektora `#navbar .new-post-button`, który w jednoznaczny sposób odnosi się do dodanego przez nas przycisku. Po dwukropku tworzymy nową funkcję, która będzie zawierała kod, który ma się wykonać po wykonaniu zdarzenia (w tym wypadku - kliknięciu w przycisk)
3. W kodzie tym robimy dwie rzeczy - wyszukując nasz formularz po jego klasie - `.new-post-form` wykonujemy na nim metodę `toggle()`, która naprzemiennie pokazuje/ukrywa dany element. Metoda ta, jak zresztą funkcja `$` pochodzi z biblioteki jQuery, którą wypada znać każdemu programiście Javascript. Dokumentację jQuery znajdziecie [tutaj](http://api.jquery.com).
4. Na koniec usuwamy klasę `hide` z naszego formularza, w przeciwnym razie nigdy by się on nie pojawił na ekranie.

Po przeładowaniu strony nasz formularz przestanie być widoczny, a w prawym górnym rogu pojawi się przycisk "Dodaj". Gdy na niego klikniemy, formularz na nowo się pojawi. Sukces!

Mamy teraz jednak pewien problem - przycisk Dodaj i formularz są widoczne dla niezalogowanych użytkowników. Tak być nie powinno i zaraz temu zaradzimy. Aby w naszym szablonie móc zareagować na to, czy użytkownik jest w danym momencie zalogowany, stworzymy kolejnego helpera, ale tym razem globalnego. Nie przypiszemy go do konkretnego szablonu, ale użyjemy metody `UI.registerHelper`, by nasz helper był dostępny z każdego szablonu w aplikacji. Dodajemy zatem zaraz pod poprzednio dodanym kodem:

```
  UI.registerHelper("user", function() {
      return Meteor.user();
  });
```

Kod ten jest bardzo prosty - tworzy helpera o nazwie `user`, który zwraca wynik metody `Meteor.user()`. Ta metoda z kolei zawsze zawiera dane aktualnie zalogowanego użytkownika, a jeśli nie jest on zalogowany, zwraca wartość `null`. Teraz wystarczy użyć bloków warunkowych, o których dowiedzieliśmy się w poprzedniej części kursu, by w pliku linijka.html dokonać następujących zmian:

```
        {{#if user}}
        <li><a href="#" class="new-post-button">Dodaj</a></li>
        {{/if}}
```

```
        {{#if user}}
        {{> postAddForm}}
        {{/if}}
```

A więc po prostu otaczamy elementy, które chcemy ukryć blokiem `{{#if user}}`, który wykona się tylko wtedy, gdy helper `user` zwróci jakąś wartość (czyli - gdy użytkownik jest zalogowany). Po odświeżeniu strony, gdy się wylogujemy, przycisk "Dodaj" zniknie. Po ponownym zalogowaniu - znowu się pojawi.

Dotychczasowy kod znajdziecie [tutaj](https://github.com/M4v3R/linijka/tree/linijka-2-2).

### Dodawanie postów do bazy

Czas na dodanie najważniejszego, czyli zapisywania wprowadzonych informacji do bazy danych! Dodawanie ma nastąpić po wysłaniu formularza, a więc musimy dodać obsługę kolejnego zdarzenia. Cały potrzebny kod będzie wyglądał następująco:

```
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
```

Wydaje się być tego sporo, ale zaraz wszystko się wyjaśni. Po kolei:

1. Dodajemy obsługę zdarzenia w szablonie `postAddForm`, który zawiera nasz formularz
2. Zdarzenie, które chcemy wychwycić to `submit`, które jest wywoływane niezależnie od tego, czy użytkownik kliknie w przycisk, czy naciśnie Enter w którymś z pól. Jest ono zawsze wywoływane w tagu `form`.
3. Być może zauważyliście, że w parametrze funkcji obsługującej zdarzenie dodaliśmy zmienną `e`. Zawiera ona obiekt opisujący dane zdarzenie i jest potrzebna w kolejnej linii - metoda `preventDefault` sprawi, że przeglądarka nie wykona domyślnej akcji, jaka zwykle jest wykonywana podczas obsługi danego zdarzenia. W naszym wypadku, gdyby tej linii zabrakło, przeglądarka przeładowała by całą stronę, a tego nie chcemy.
4. W następnych kilku linijkach tworzymy obiekt `newPost`, który zawiera wprowadzone przez użytkownika dane. Odwołujemy się do nich używając funkcji `$` z jQuery, a także metody `.val()`, która zwraca wartość wpisaną w dane pole. Do pola `author` przypisujemy wartość metody `Meteor.userId()`, która zwraca identyfikator aktualnego użytkownika, by móc go później odszukać w bazie. Reszta pól zawiera domyślne dane dla każdego postów - zerową liczbę postów i komentarzy, a także bieżącą datę dodania.
5. Gdy już mamy tablicę z danymi, sprawdzamy, czy użytkownik wpisał wszystko co powinien. Jeżeli nie, wyświetlamy stosowny komunikat i przerywamy działanie funkcji.
6. Używając znanej nam już metody `.insert()` dodajemy do kolekcji Posts stworzony wpis.
7. Chowamy formularz dodawania nowego postu.

To wszystko! Kliknij teraz w przycisk 'Dodaj' i wprowadź jakieś informacje. Po wysłaniu formularza od razu nowy post pojawi się na liście, choć nie pisaliśmy żadnego kodu w tym celu. Jak pamiętacie, Meteor automatycznie synchronizuje zawartość bazy danych z przeglądarką, więc gdy wykrył nowy post w kolekcji Posts, od razu go wyświetlił. Czysty profit! 

Istnieje jednak duże prawdopodobieństwo, że wyświetlił go nie tam gdzie chcemy, a to dlatego, że podczas wyświetlania listy postów nie zadeklarowaliśmy w jaki sposób chcemy ją posortować. Możemy to łatwo zmienić, modyfikując helper `posts`:

```
      posts: function () {
          return Posts.find({}, {sort: {added_on: -1}}).fetch();
      }
```

Metoda `find()` przyjmuje dwa argumenty. Pierwszy z nich to obiekt opisujący **czego** szukamy. Ponieważ chcemy pokazać wszystkie posty, przekazujemy po prostu pusty obiekt: `{}`. Drugi argument to obiekt, który określa **w jaki sposób** chcemy uzyskać wyniki. Możemy np. ograniczyć ich ilość, albo właśnie je posortować. W tym celu używamy dyrektywy `sort`, do której przekazujemy obiekt zawierający listę pól, według których chcemy sortować dane. `-1` oznacza, że sortujemy malejąco (od najnowszego do najstarszego). Gdybyśmy wpisali `1`, uzyskalibyśmy odwrotny efekt.

Teraz nasza lista postów jest posortowana:

![Imgur](http://i.imgur.com/D89gF7T.png)

Mamy teraz jednak inny problem - nazwa użytkownika się popsuła! To dlatego, że teraz w naszej kolekcji zapisujemy identyfikator użytkownika, zamiast jego nazwy, a ponieważ nie zdefiniowaliśmy helpera `author`, to znacznik `{{author}}` zwraca zawartość tego pola z naszego wpisu. Aby to naprawić, zdefiniujmy helpera author dla szablonu `postListItem`:

```
      author: function() {
          return Meteor.users.findOne(this.author);
      }
```

`Meteor.users` to specjalna kolekcja zawierająca użytkowników naszej aplikacji. Nie definiowaliśmy jej nigdzie - została zdefiniowana przez dodaną przez nas paczkę - `accounts-password`. Możemy jej używać jak każdej innej kolekcji, dlatego też używamy na niej metody `.findOne()`, która przyjmuje jako argument właśnie identyfikator danego obiektu. W ten sposób zwracamy w tym helperze cały obiekt użytkownika należący do autora postu. Teraz tylko, w szablonie `postListItem` w pliku `linijka.html` znacznik `{{author}}` zamieniamy na `{{author.username}}` i voilá:

![Imgur](http://i.imgur.com/GMMjUZp.png)

Dodałem jeszcze jednego posta jako inny użytkownik i jak widać, wszystko działa poprawnie. Nazwy użytkowników w poprzednich postach nie wyświetlają się, ponieważ zawierały one nazwy użytkowników zamiast ich identyfikatorów w polu `author`. Żeby się ich pozbyć, możemy zatrzymać serwer Meteora, a następnie wykonać komendę:

```
meteor reset
```

Komenda ta wyczyści bazę danych z naszych przykładowych wpisów (i użytkowników - będziemy musieli zarejestrować się ponownie), ale wszystkie nowe wpisy będą już wyświetlały się poprawnie!

Dotychczasowy kod aplikacji możecie przejrzeć [tutaj](https://github.com/M4v3R/linijka/tree/linijka-2-3).

Jeśli dotrwaliście do tego miejsca to gratuluję! Razem stworzyliśmy z jednej strony prostą, ale funkcjonalną aplikację. Mogą się w niej rejestrować nowi użytkownicy i wrzucać dodane przez siebie treści. Nasz kod, choć prosty, zaczyna się niebezpiecznie powiększać, dlatego następnym razem coś na to zaradzimy - posegregujemy go w osobne pliki i katalogi, jak każda prawilna aplikacja Meteora powinna wyglądać :). Poza tym poradzimy coś na złych hakerów, którzy mogliby próbować psuć naszą aplikację, na przykład usuwając nieswoje wpisy. 

Do następnego razu!

PS. Aplikację w obecnym stanie możecie przetestować pod adresem: [linijka.meteor.com](http://linijka.meteor.com).

## Część 4: Bezpieczeństwo, głosowanie

### Czas na zmiany

Jak wspomniałem ostatnio, nasza aplikacja zaczęła się niebezpiecznie rozrastać (jeśli 58 linii można nazwać rozrastaniem się). Najwyższy czas podzielić ją tak, jak powinna być każda poważniejsza aplikacja podzielona - wg konkretnych modułów.

Przyjmiemy następującą strukturę plików:

* **client** - pliki wykonywane po stronie przeglądarki
  * **styles** - arkusze CSS
  * **views** - szablony HTML i skrypty Javascript obsługujące widoki
* **lib** - pliki Javascript wykonywane zarówno na serwerze, jak i w przeglądarce
* **public** - pliki serwowane bezpośrednio z serwera, np. obrazki

Niektóre z tych nazw mają specjalne znaczenie. Wszystko z katalogu `client` jest serwowane tylko i wyłącznie w przeglądarce, więc nie musimy już pisać `if (Meteor.isClient())`. Analogicznie, ale po stronie serwera, działa kod w katalogu `server`, ale na chwilę obecną go nie utworzyliśmy bo nie mamy potrzeby nic tam umieszczać. Natomiast wszystko z katalogu `public`, z zachowaniem struktury katalogów, jest z przeglądarki jako plik statyczny, np. plik `public/linijka.png` zawierający nasze logo będzie dostępny pod adresem `http://nazwa_hosta/linijka.png`. Wszystkie pliki Javascript znajdujące się gdziekolwiek poza tymi katalogami będą dostępne zarówno dla przeglądarki, jak i dla serwera.

Teraz porozdzielajmy nasz kod na odpowiednie miejsca. Plik `linijka.css` wyląduje oczywiście w `client/styles`. Warto dodać, że choćbyśmy wrzucili tam kilka plików, Meteor wszystkie je złączy w jeden i automatycznie załączy do strony. Podobnie zresztą zrobi z wszystkimi plikami Javascript. Dlatego nasz plik `linijka.js` podzielimy na kilka części, według modułów. Pierwszą linię, definiującą kolekcję `Posts` zapiszemy w pliku `lib/collections.js`, by kolekcja Posts była znana zarówno przeglądarce, jak i serwerowi. Dalszy kod definiuje helpery i zdarzenia dla szablonów `header`, `postList` i `postListItem`, a także `postAdd`, więc utworzymy w katalogu `views` trzy pliki w których je zawrzemy: `header.js`, `post_list.js` i `post_add.js`. Analogicznie postąpimy z szablonami, tworząc pliki: `header.html`, `post_list.html` i `post_add.html`. Wreszcie, zawartość tagów `<head>` i `<body>` zapiszemy w pliku `index.html`

> Warto tutaj nadmienić, że zasugerowany przeze mnie podział nie jest jakąś konkretną konwencją której musicie się trzymać, a raczej sugestią jak można to zrobić. Pomijając kilka reguł o których wspomniałem wcześniej, możecie dowolnie nazywać katalogi i pliki w których trzymacie szablony i kod. Meteor sam zorientuje się co powinno gdzie należeć. Przykładowo plik zawierający główny szablon z tagiem `<body>` nie musi się nazywać index.html. Mało tego, możecie mieć kilka plików z tym tagiem, a Meteor połączy je wszystkie w jedno.

Po zmianach, powinniście otrzymać strukturę podobną do tej, którą obejrzycie [tutaj](https://github.com/M4v3R/linijka/tree/linijka-3-1). Prawda, że od razu lepiej się to przegląda?

### Bezpieczeństwo danych

Dotychczas nasza aplikacja pozwalała na pełny dostęp do bazy danych z przeglądarki. Podczas, gdy jest to użyteczne w fazie prototypowania, takie zachowanie jest niedopuszczalne na serwerze produkcyjnym, czego efekty zresztą być może mogliście obejrzeć, jeśli otworzyliście [demo](http://linijka.meteor.com) naszej aplikacji w dniach 13-19 grudnia:

![Imgur](http://i.imgur.com/6nAfC2p.png)

Jak widać, musimy popracować nad zabezpieczeniami w naszej aplikacji. Na szczęście, jest to (jak wiele innych rzeczy w Meteorze) całkiem łatwe. Na początek wystarczy wydanie komendy `meteor remove insecure`, która usunie z naszego projektu domyślną paczkę `insecure`, która właśnie pozwalała na nieograniczony dostęp do bazy danych z przeglądarki. Teraz jednak nasz formularz dodawania nowego posta przestanie działać, więc musimy go naprawić. Moglibyśmy to zrobić na dwa sposoby:

* wykorzystać metodę `allow()` każdej kolekcji w Meteorze, w której możemy ustawić szczegółówe warunki dostępu do danej kolekcji z przeglądarki, lub...
* stworzyć metodę wykonywaną po stronie serwera, którą wywołamy z przeglądarki

Podejście pierwsze jest na pierwszy rzut oka prostsze, bo nie musimy nic zmieniać w naszym kodzie po stronie klienta, a jedynie ustawić kilka warunków po stronie serwera (m.in. czy użytkownik jest zalogowany, czy podał swoje ID usera przy tworzeniu postów, czy nie próbuje usunąć/edytować nieswojego postu), ale z reguły bezpieczniej jest stworzyć Meteorową metodę, która będzie sprawdzana po stronie serwera, gdzie potencjalny "użyszkodnik" nam nie namiesza.

Otwórzmy zatem plik `lib/collections.js` i dodajmy kod naszej metody, którą nazwiemy `postAdd`:

```
Meteor.methods({
    postAdd: function(newPost) 
    {
        // Sprawdzamy, czy użytkownik jest zalogowany
        if (!Meteor.userId())
            throw new Meteor.Error("not-logged-in", 
            "Aby wykonać tę czynność musisz być zalogowany!");

        // Sprawdzamy czy przesłano wszystkie informacje
        if (!newPost.link || !newPost.title || !newPost.description)
            throw new Meteor.Error("new-post-data-missing", 
            "Wypełnij najpierw wszystkie pola!");

        // Wybieramy tylko pola które nas interesują 
        // (co by jakiś śmieszek nie dodał innych pól)
        newPost = _.pick(newPost, "link", "title", "description");

        // Dodajemy do tablicy informacje o użytkowniku, dacie, itp.
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
```

Metoda przyjmuje argument `newPost`, w którym znajdziemy obiekt opisujący nowy post, podobny do tego, który wcześniej dodawaliśmy do bazy, z tą jednak różnicą, że będzie zawierał tylko dane z formularza, który wypełnił użytkownik. Całą resztę dodamy już po stronie serwera. Zaraz na początku sprawdzamy to samo co wcześniej - czy użytkownik jest zalogowany i czy wypełnił wszystkie pola. W razie błędu rzucamy wyjątkiem (o tym później). Następnie odfiltrowujemy na wszelki wypadek dane, które przesłał i rozszerzamy je (metodą `extend` z biblioteki `underscore.js`) o dane typu autor postu, data dodania, czy domyślne wartości w polach `votes` i `comments_num`. Na koniec, podobnie jak wcześniej, dodajemy nowy obiekt do kolekcji.

Ktoś może zapytać - po co ten kod umieszczamy w katalogu, do którego ma dostęp również przeglądarka? Otóż Meteor jest na tyle sprytny, że podczas gdy czeka na odpowiedź z serwera, po stronie przeglądarki od razu przeprowadza symulację działania metody i aktualizuje ekran bez czekania na to co odpowie serwer. Nazywamy to "kompensacją opóźnienia" (z ang. "latency compensation") i dzięki temu aplikacje Meteorowe działają tak płynnie. Co ciekawe, jeśli serwer zwróci dane inne od tego, co zasymulowała przeglądarka, zostanie to od razu odzwierciedlone na ekranie.

Ok, teraz jeszcze musimy wywołać naszą metodę w kodzie po stronie przeglądarki. W tym celu otwieramy plik `post_add.js` i podmieniamy obsługę zdarzenia `submit form` na następującą:

```
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

            // Ukrywamy formularz dodawania postu
            $('.new-post-form').hide();
        });
```

Z obiektu `newPost` usuwamy niepotrzebne pola. `Meteor.call` pozwala na wywołanie metody po stronie serwera. Dostarczona funkcja zwrotna zostanie wykonana gdy otrzymamy odpowiedź z serwera. Zawiera ona dwa argumenty - `error`, jeśli serwer rzucił jakimś wyjątkiem, wtedy w `error.reason` znajdziemy treść błędu, a także `result`, w którym znajdzie się to, co zwróciła nasza metoda. Po dokonaniu tych zmian i zapisaniu wszystkich plików nasza aplikacja powinna znowu zacząć działać poprawniej, ale tym razem jest już odporna na ataki wandali :).

Dotychczasowy kod możecie podejrzeć [tutaj](https://github.com/M4v3R/linijka/tree/linijka-3-2).

### Głosowanie na wybrane posty

W tym miejscu miałem kończyć na dzisiaj, ale stwierdziłem, że głupio tak zostawić naszą aplikację bez żadnej nowej widocznej funkcjonalności. Dlatego dodamy do niej teraz możliwość głosowania na wybrane posty.

W każdym poście mamy już pole `votes`, które będzie przechowywać sumę głosów na dany post (będziemy pozwalać zarówno na głosy w górę, jak i w dół). Oczywiście musimy zabronić użytkownikom głosować kilka razy na jeden post, dlatego dodamy do postu jeszcze pola `upvoters` i `downvoters`, które będą zawierać identyfikatory użytkowników, którzy w dany sposób zagłosowali.

Najpierw w szablonie `postListItem` dołączymy pole: `data-post-id="{{_id}}"`, dzięki czemu przy każdym poście będziemy mieli łatwo dostępny jego identyfikator.
Następnie do kodu Javascript tego szablonu dodamy następującą obsługę zdarzenia `click`:

```
Template.postListItem.events({
    'click a.post-vote': function(e) {
        e.preventDefault();

        var el = $(e.target);
        var voteType;

        if (el.hasClass('vote-up'))
            voteType = 'up';
        else
            voteType = 'down';

        var vote = {
            postId: el.parents('.post').data('post-id'),
            type: voteType
        }

        Meteor.call('postVote', vote, function(error, result) {
            if (error) return alert(error.reason);
        });
    }
});
```

Kod w zasadzie tłumaczy się sam, ale przejdźmy przez niego po kolei:

1. Tworzymy zmienną wskazującą na klikniętą strzałkę i sprawdzamy na podstawie klasy, czy to strzałka w górę, czy w dół.
2. Tworzymy obiekt `vote` zawierający identyfikator postu (wyciągnięty z wcześniej dodanego pola `data-post-id` i typ głosu (`up` lub `down`).
3. Wywołujemy metodę `postVote` (którą zaraz stworzymy) przekazując do niej obiekt `vote` i funkcję zwrotną, w której podobnie jak ostatnio - sprawdzamy, czy wszystko poszło dobrze.

Teraz musimy tylko zdefiniować kod metody po stronie serwera, więc w pliku `collections.js` dodajemy w sekcji `methods`:

```
    postVote: function(vote) {
        // Sprawdzamy, czy użytkownik jest zalogowany
        if (!Meteor.userId())
            throw new Meteor.Error("not-logged-in", 
            "Aby wykonać tę czynność musisz być zalogowany!");
        
        // Sprawdzamy czy przesłano ID postu i typ głosu
        if (!vote.postId || !vote.type)
            throw new Meteor.Error("vote-post-data-missing", 
            "Nie przesłano potrzebnych informacji.");
        
        var post;

        // Jeśli głos jest w górę...
        if (vote.type == "up") 
        {
            // Wysyłamy zapytanie do kolekcji gdzie szukamy 
            // najpierw postu o danym ID nie zawierającego 
            // w tabelkach upvoters i downvoters ID użytkownika
            post = Posts.update({
                _id: vote.postId, 
                upvoters: {$ne: Meteor.userId()},
                downvoters: {$ne: Meteor.userId()},
            }, 

            // A następnie dodajemy jego ID do odpowiedniej 
            // tabelki i zwiększamy liczbę głosów
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

        // Jeśli zapytanie się nie powiodło to znaczy, 
        // że użytkownik już głosował
        if (!post)
            throw new Meteor.Error('vote-post-invalid', 
            "Nie możesz już głosować na ten post!");
    }
```

Kod jest wyjaśniony w komentarzach. Co warto wyjaśnić to kod do zmiany ilości głósów i dodawania identyfikatora użytkownika do tablicy głosujących. Używamy w tym celu metody `Posts.update`, do której przekazujemy:

1. Selektor - obiekt, którym definiujemy atrybuty postów, które chcemy zaktualizować - identyfikator postu, a także operator `$ne`, który wyklucza posty zawierające w tabelach `upvoters` i `downvoters` identyfikator obecnego użytkownika
2. Obiekt opisujący zmiany, jakie chcemy dokonać. Używamy dwóch operatorów - `$addToSet`, który dodaje podaną wartość do tablicy (my przypisujemy identyfikator do tablicy upvoters/downvoters)  i `$inc`, który zwiększa/zmniejsza przypisaną do danego atrybutu liczbę (zwiększamy/zmniejszamy wartość `votes` o 1).

I to wszystko, już powinniśmy móc głosować, ale pozostała jeszcze jedna zmiana kosmetyczna - pokazywać w jakiś sposób, że na dany post już zagłosowaliśmy. W tym celu stworzymy sobie helpera `voted` do szablonu `postListItem`:

```
    voted: function() {
        var user_id = Meteor.userId();
        if (!user_id) return;

        if (_.contains(this.upvoters, user_id) || _.contains(this.downvoters, user_id))
            return "voted";
    }
```

Standardowo najpierw sprawdzamy, czy użytkownik jest zalogowany, a następnie, czy jego identyfikator występuje w tablicach upvoters/downvoters, a jeśli nie, to zwracamy napis "voted". Użyjemy go jako klasy CSS, która wygasza strzałki przy zagłosowanych wpisach:

```
<div class="post {{voted}}" data-post-id="{{_id}}">
```

I będzie wyglądało to tak:

![Imgur](http://i.imgur.com/AwP2xXe.png)

Głosowanie działa tak jak powinno! Dotychczasowy kod znajdziecie [tutaj](https://github.com/M4v3R/linijka/tree/linijka-3-3).

Co dalej? Jak zauważyliście, cała aplikacja działa dotychczas na jednej stronie, ale zaczyna nas to ograniczać. Chcielibyśmy dodać do niej obsługę dodawania komentarzy do postów, a to już wypadało by wyświetlić na osobnej stronie, z własnym adresem URL. Dlatego w następnej części dodamy do naszej aplikacji obsługę routingu i umożliwimy użytkownikom dodawanie komentarzy. Powodzenia i jak zawsze - do następnego razu!

## Część 5: Trasowanie, komentarze

### Jeden URL by rządzić nimi wszystkimi

Dotychczas wszystko na naszej aplikacji działo się na pojedynczej stronie, pod jednym adresem URL. Wpisując w przeglądarce http://linijka.meteor.com (lub lokalny odpowiednik) pokazywała się nasza aplikacja i niezależnie co zrobilibyśmy, ten adres się nie zmieniał. Jednak nawet słabo zorientowani użytkownicy internetu wiedzą, że adresy URL są zmienne w obrębie danego serwisu - gdy przechodzi się na inną podstronę serwisu, zmienia się też adres URL w pasku adresu. Dla uproszczenia unikaliśmy dotąd podziału na podstrony, ale teraz to się zmieni. Poznajcie `iron:router`.

Iron Router to paczka do meteora dodająca do niego obsługę trasowania (_ang. routing_). Dzięki temu możemy w łatwy sposób dodawać do naszej aplikacji podstrony. Aby rozpocząć, dodajemy paczkę do projektu:

```
meteor add iron:router
```

Zanim zaczniemy wdrażać trasowanie, kilka słów o nomenklaturze. **Trasowanie** w każdej aplikacji internetowej polega na tym, że definiujemy **trasy** (_ang. routes_), które są niczym innym jak przypisaniem konkretnym **adresom URL** kawałki kodu, które mają się wykonać, gdy te adresy zostaną wywołane. Te kawałki kodu często nazywamy **kontrolerami** (_ang. controllers_). Gdy na przykład użytkownik wpisze w przeglądarce (lub kliknie w odnośnik) "http://linijka.meteor.com/new", nasz **router** (w naszym przypadku biblioteka `iron:router`) sprawdzi listę zdefiniowanych przez nas tras, a następnie przekaże kontrolę do kontrolera, który jest odpowiedzialny za adres `/new`. Natomiast szablon dla danego kontrolera jest umieszczany wewnątrz **layoutu**, czyli specjalnego szablonu głównego dla całej naszej aplikacji.

Nasz router posiada jeszcze drugi, uproszczony tryb pracy, w którym zamiast dodatkowych kontrolerów wywołuje po prostu szablon o podanej nazwie, a następnie kod Javascript przypisany do tego szablonu. Skorzystamy właśnie z tej możliwości. Zatem tworzymy plik `router.js` w katalogu `lib` i piszemy w nim:

```
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'postList'});
```

Pierwsza sekcja to konfiguracja naszego routera. Mówimy mu tutaj jak nazywa się `layout` z którego chcemy korzystać (patrz wyżej). Nie będziemy kreatywni i nazywamy go po prostu "layout". Za chwilę przejdziemy do stworzenia go. Druga sekcja zawiera na razie jedną trasę - `'/'`, czyli główną trasę dla aplikacji, wykonywaną gdy ktoś otwiera naszą stronę bez parametrów (czyli otwiera adres: `http://linijka.meteor.com`). Trasę tę nazywamy `postList`, co mówi routerowi, żeby poszukał szablonu o takiej samej nazwie. Jak zapewne pamiętacie taki szablon mamy, więc to on, a także przypisany do niego kod, zostaną w tym wypadku wykonane.

Stwórzmy teraz nasz layout. Najpierw z szablonu `index.html` wyrzucamy cały tag `body`. Tag `head` możemy tam zostawić. Teraz w nowym pliku `layout.html` w katalogu `client/views` piszemy:

```
<template name="layout">
    {{> header}}
    {{> yield}}
</template>
```

Czyli po pierwsze wstawiamy odnośnik do szablonu `header`, który właśnie usunęliśmy z indeksu, a po drugie wstawiamy nieznany nam dotąd szablon `yield`. Tak naprawdę nie jest to szablon, a helper udostępniany przez nasz router. Jest to w praktyce znacznik, który mówi naszej aplikacji: "w to miejsce wstaw wygenerowany szablon dla aktualnej trasy". Warto zauważyć, że teraz nie definiujemy nigdzie tagu `body` - router robi to za nas, wstawiając ten znacznik wokół naszego layoutu.

Trzecia, niewielka zmiana, to poprawka w szablonie `header.html`:

```
<a class="navbar-brand" href="/">Linijka</a>
```

Wcześniej w atrybucie `href` mieliśmy wartość "#", czyli odnośnik był nieaktywny. Teraz nasze logo będzie odnosiło się do strony głównej aplikacji.

Jeśli teraz uruchomimy w przeglądarce Linijkę zobaczymy, że... nic się nie zmieniło. Wszystko działa tak jak dawniej. Jeśli tak jest to dobrze! To oznacza, że wszystko wykonaliśmy poprawnie, a nasza aplikacja korzysta teraz z routera. Czas to w jakiś sposób wykorzystać. 

Na pierwszy ogień idzie formularz dodawania nowych postów - dobrze by było, żeby był na osobnej stronie. W tym celu wykonujemy kilka zmian: zmienimy nazwę tego szablonu z `postAddForm` na `postAdd` (bo taka nazwa lepiej odzwierciedla czym ten szablon teraz będzie), dodajemy tag `<div class="container post-add">` wokół niego, usuwamy jego wywołanie z szablonu `postList` (trzy linijki zaczynające się od `{{#if user`}}`), usuwamy całą sekcję `Template.header.events` w kodzie `header.js` (nie będzie nam już potrzebna, bo używamy routera zamiast pokazywać/ukrywać formularz ręcznie). Na koniec dwie najważniejsze zmiany.

W kodzie `post_add.js` usuwamy linijkę `$('.new-post-form').hide();` która ukrywa formularz po wprowadzeniu postu, a zamieniamy ją na:

```
Router.go('/');
```

Dzięki czemu po wprowadzeniu postu jesteśmy przekierowywani na adres `'/'`. Druga zmiana, to podlinkowanie przycisku "Dodaj" do naszej nowej trasy w szablonie `header`. W tym celu zamieniamy linijkę wstawiającą ten przycisk na:

```
<li><a href="{{pathFor 'postAdd'}}" class="new-post-button">Dodaj</a></li>
```

Dodaliśmy w atrybucie `href` nowego helpera `pathFor`. Jego nazwa jest dosyć wymowna - zwraca on adres URL do trasy o podanej nazwie. Oczywiście moglibyśmy zamiast tego napisać `href="/new"` i miałoby to taki sam efekt, ale używanie tzw. `named routes` (nazwanych tras) jest lepszym zwyczajem, bo jeśli kiedyś zechcemy zmienić strukturę adresów URL możemy to zrobić w jednym miejscu, a wszystkie odnośniki będą nadal aktualne.

Na koniec dodajemy definicję naszej nowej trasy w pliku `router.js`:

```
Router.route('/new', {name: 'postAdd'});
```

Tworzymy trasę `postAdd` (nazwę której użyliśmy w atrybucie `href` przycisku "Dodaj" i która odpowiada nazwie szablonu zawierającego formularz) i przypisujemy ją do adresu `/new`. I to wszystko. Po odświeżeniu strony i kliknięciu na przycisk "Dodaj" zostaniecie przeniesieni na podstronę z formularzem dodawania postu, a po wysłaniu formularza - z powrotem na stronę główną. Zauważ, że nie tracimy jednej z ważnych zalet Meteora - prędkości. Podstrony są ładowane natychmiastowo, bez opóźnień, a to dlatego, że Meteor ładuje je z wyprzedzeniem i nawet nie komunikuje się z serwerem gdy naciskamy przycisk "Dodaj". Fakt, że w pasku adresu zmienia się adres URL aktualnej strony jest zrealizowany dzięki `pushState` - jednym z komponentów HTML5 dostępnym we wszystkich nowoczesnych przeglądarkach.

Jeśli zgubiłeś się po drodze to nie przejmuj się - dotychczasowy kod znajdziesz [tutaj](https://github.com/M4v3R/linijka/tree/linijka-4-1).

### Komentarze

Nasza aplikacja nie byłaby kompletna bez dodania możliwości komentowania postów i właśnie tym się teraz zajmiemy, gdy mamy już wbudowaną obsługę tras. Najpierw zbudujemy szablon HTML opisujący treść pojedynczego komentarza i formularz dodawania komentarzy i zapiszemy go w pliku comments.html. Jego treść jest zbyt długa by ją tu wklejać, można ją obejrzeć [pod tym adresem](https://github.com/M4v3R/linijka/blob/linijka-4-2/client/views/comments.html). Nie zawiera on żadnych nowych elementów, które musiałbym objaśniać. Definiuje po prostu trzy szablony: `commentList` (lista komentarzy), `commentItem` (pojedynczy komentarz) i `commendAdd` (formularz dodawania komentarza). 

Następnie tworzymy plik z kodem Javascript obsługującym wyświetlanie i dodawanie komentarzy. Ponownie nie będę załączał tu jego treści, tylko [odsyłam do Githuba](https://github.com/M4v3R/linijka/blob/linijka-4-2/client/views/comments.js), ponieważ nie zawiera on żadnych nowych elementów - jest bardzo podobny do kodu wyświetlania i dodawania postów, z jednym wyjątkiem, mianowicie helperem `comments`:

```
    comments: function() {
        return Comments.find({post: this._id}, {sort: {added_on: 1}}).fetch();
    }
```

Skąd aplikacja wie, które komentarze należą do aktualnie wyświetlanego postu? Definiuje to warunek `{post: this._id}`. Słówko `this` odnosi się do aktualnego `kontekstu danych`, który Meteor przechowuje w danej chwili. Odnosimy się do parametru `_id`, którego jeszcze tam w żaden sposób nie przekazaliśmy, ale za chwilę to zrobimy. Widzimy tu też odwołanie do nowej kolekcji - Comments, którą również za chwilę sobie zdefiniujemy.

Zanim jednak do tego przejdziemy, pozwolimy sobie na kolejny refactoring - szablon `postListItem` i obsługujący go kod Javascript przeniesiemy do osobnych plików: `post_item.html` i `post_item.js` i zmienimy jego nazwę na po prostu `postItem`. Zrobimy tak dlatego, ponieważ będzie on wykorzystywany nie tylko na liście postów na stronie głównej, ale także na podstronie danego postu z komentarzami. Przy tej okazji zmienimy również parametr `href` przy odnośniku "xxx komentarzy" na następujący: `href="{{pathFor 'postPage'}}"`, a więc wstawiamy tu adres do trasy `postPage`, którą niedługo dodamy.

Teraz pozostało nam jeszcze utworzyć nowy szablon który będzie wyświetlał stronę nowego postu, zawierającą sam wpis, a także listę komentarzy pod nim. Szablon nazwiemy `postPage`, a jego zawartość jest następująca:

```
<template name="postPage">
<div class="container post-page">
  {{> postItem}}
  <hr>
  {{> commentList}}
  <hr>
  {{> commentAdd}}
</div>
</template>
```

Nie ma tu nic, co trzeba by wyjaśniać - strona zawiera odwołanie do trzech wcześniej stworzonych przez nas szablonów.

Czas na najważniejsze - dodać do naszego routera definicję, która pozwoli wyświetlać nam stronę danego postu. Dodajemy w pliku `router.js` następujący kod:

```
Router.route('/post/:_id', {
    name: 'postPage',
    data: function() { 
        return Posts.findOne(this.params._id); 
    }
});
```

Tym razem definicja trasy jest bardziej rozbudowana. Po pierwsze, w adresie znajdujemy specjalny znacznik :_id. Jest to tzw. `placeholder`, mówiący routerowi że w tym miejscu znajdzie się bliżej nieokreślony ciąg znaków, który nazwiemy sobie `_id`. Po drugie, oprócz nazwy trasy podajemy parametr `data`. Sprawia on, że do aktualnego `kontekstu danych` dla tej trasy zostanie dodana wartość zwracana przez podaną funkcję. W naszym przypadku będzie to obiekt z kolekcji `Posts`, który znajdujemy właśnie przy pomocy `_id` wyciągniętego z adresu URL (w tym kontekście obiekt `this.params` zawiera wszystkie nazwane parametry z aktualnego adresu). Teraz już wiemy skąd w kodzie z `comments.js` bierze się `this._id` - to właśnie tutaj router przypisuje wszystkie pola wybranego obiektu z kolekcji Posts do `this` (w tym również pole `_id`, które jest standardowym polem, unikalnym identyfikatorem każdego obiektu w kolekcji).

Na koniec pozostało nam stworzyć kolekcję `Comments`. Ponieważ już jedną kolekcję (Posts) wcześniej utworzyliśmy, dobrze będzie zamiast pakować wszystko do jednego pliku, podzielić nasze kolekcje na pliki. I tak obecny kod zapiszemy w nowym katalogu `collections/` pod nazwą `posts.js`, a następnie utworzymy drugi, `comments.js` w którym stworzymy naszą kolekcję zawierającą komentarze. Jego zawartość możecie obejrzeć [tutaj](https://github.com/M4v3R/linijka/blob/linijka-4-2/lib/collections/comments.js) i jest podobna do poprzedniej - najpierw definiujemy naszą nową kolekcję w zmiennej `Comments`, a następnie tworzymy metodę `commentAdd` do zapisywania w kolekcji nowego komentarza. Jedną rzeczą godną uwagi jest to, że po dodaniu komentarza do kolekcji aktualizujemy również obiekt z Posts:

```
        Posts.update({
            _id: newComment.postId
        }, {
            $inc: {comments_num: 1}
        });
```

Zwiększamy tutaj pole `comments_num` wybranego postu o 1, by wyświetlać na liście postów poprawną liczbę komentarzy.

Jeśli wszystko zrobiliście dobrze, to po odświeżeniu strony i kliknięciu w odnośnik "0 komentarzy" przy którymś z wpisów waszym oczom ukaże się podstrona danego wpisu:

![Imgur](http://i.imgur.com/IAwbfcR.png)

Sukces! Dotychczasowy kod możecie obejrzeć [tutaj](http://github.com/M4v3R/linijka/tree/linijka-4-2)

### Bonus

Jako materiał bonusowy dorzucę do tej części kursu jeszcze dwie rzeczy. Po pierwsze, pewnie zauważyliście, że nasz formularz logowania jest po angielsku. Na szczęście można to w łatwy sposób poprawić, w dokumentacji paczki której do tego używamy znajdujemy metodę do zmiany języka. Wystarczy więc stworzyć nowy plik w katalogu `client/`, nazwiemy go [accounts-ui-pl.js](https://github.com/M4v3R/linijka/blob/linijka-4-2/client/accounts-ui-pl.js) i wpisać w nim wszystkie używane napisy, a następnie w pliku `util.js` wywołać metodę ustawiającą język:

```
accountsUIBootstrap3.setLanguage('pl');
```

I oto nasz formularz prezentuje się już w naszej ojczystej mowie.

Po drugie, aby ułatwić rzeszom naszych przyszłych użytkowników rejestrację i jednocześnie być trendy, dodamy możliwość rejestracji/logowania przez Facebooka. Okazuje się, że to również bardzo łatwe. Dodajemy najpierw odpowiednią paczkę:

```
meteor add accounts-facebook
```

I po odświeżeniu w naszym formularzu pojawia się nowy przycisk - "Konfiguracja Facebook". Po jego kliknięciu otrzymamy informacje co zrobić, aby aktywować w naszej aplikacji tę funkcję - należy na [portalu developerskim](https://developers.facebook.com/apps) Facebooka utworzyć nową aplikację, przypisać jej adres URL naszego serwisu, a następnie skopiować "App ID" i "App Secret" do formularza. I to wszystko - logowanie przez Facebooka będzie już dostępne! Jednak jeśli dodamy jakiś post lub komentarz to zobaczymy, że jest pewien problem - nie wyświetla się przy nich nazwa użytkownika. Jest tak dlatego, że przy logowaniu przez Facebooka w obiekcie `Meteor.user` pole `username` jest puste, natomiast nazwę użytkownika można pobrać z pola `profile.name`. Dlatego też zmienimy nasze helpery `author` w kodzie dla `postItem` i `commentItem` w następujący sposób:

```
author: function() {
     var author = Meteor.users.findOne(this.author);
     return author.username || author.profile.name;
}
```

W ten sposób zwrócimy w nim to pole, które aktualnie jest wypełnione, niezależnie czy użytkownik logował się normalnie, czy przez Facebooka. Teraz wystarczy w szablonach zamienić odwołania `{{author.username}}` na po prostu `{{author}}` i problem rozwiązany! Skończony kod możecie obejrzeć [tutaj](http://github.com/M4v3R/linijka/tree/linijka-4-3).

Zbliżamy się powoli do końca kursu. Naszej aplikacji brakuje jeszcze jednej ważnej rzeczy - stronicowania i sortowania listy postów. Tym zajmiemy się następnym razem, tak więc - do zobaczenia!
