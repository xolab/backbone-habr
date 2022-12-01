var Start = Backbone.View.extend({
    el: $("#start"),
    events: {
        "click input:button": "check"
    },
    check: function () {
        if (this.el.find("input:text").val() == "test") {
            controller.navigate("success", true);
        } else {
            controller.navigate("error", true);
        }
    }
});

var start = new Start();