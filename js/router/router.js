var Controller = Backbone.Router.extend({
    routes: {
        "": "start",
        "!/": "start",
        "!/success": "success",
        "!/error": "error"
    },

    start: function () {
        $(".block").hide();
        $("#start").show();
    },

    success: function () {
        $(".block").hide();
        $("#success").show();
    },

    error: function () {
        $(".block").hide();
        $("#error").show();
    }
});

var controller = new Controller();

Backbone.history.start();