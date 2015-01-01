Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'postList'});
Router.route('/new', {name: 'postAdd'});
Router.route('/post/:_id', {
    name: 'postPage',
    data: function() { 
        return Posts.findOne(this.params._id); 
    }
});
