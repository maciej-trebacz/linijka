Template.header.events({
    'click #navbar .new-post-button': function () {
        $('.new-post-form').toggle();
        $('.new-post-form').removeClass('hide');
    }
});
