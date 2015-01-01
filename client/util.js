// Konfiguracja paczki accounts-ui
// Wymaganie by przy zakładaniu konta użytkownik podawał
// nazwę użytkownika i email
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});

// Globalny helper "user" dla wszystkich szablonów
// Zwraca obiekt z danymi aktualnie zalogowanego użytkownika
UI.registerHelper("user", function() {
    return Meteor.user();
});

accountsUIBootstrap3.setLanguage('pl');
