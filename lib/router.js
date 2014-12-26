Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'postList'});
Router.route('/new', {name: 'postAdd'});
