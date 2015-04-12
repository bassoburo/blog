$(function() {
 
    Parse.$ = jQuery;
 
    Parse.initialize("smV3el0MSmHz9jM443skyaBSPFq5hxq2OGDcIngz", "My4eazo1TSGdVEQOc4iuvGvrRwb5aioLFOfWYJdE");

    var Blog = Parse.Object.extend("Blog");

    var Blogs = Parse.Collection.extend({
		model: Blog
	});

	var blogs = new Blogs();

	blogs.fetch({
	    success: function(blogs) {
	        var blogsView = new BlogsView({ collection: blogs });
		    blogsView.render();
		    $('.main-container').html(blogsView.el);
	    },
	    error: function(blogs, error) {
	        console.log(error);
    	}
	});

	var BlogsView =  Parse.View.extend({
	    template: Handlebars.compile($('#blogs-tpl').html()),
	    render: function(){ 
	        var collection = { blog: this.collection.toJSON() };
	        this.$el.html(this.template(collection));
	    }
	});
 
});