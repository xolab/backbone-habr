var AppState = Backbone.Model.extend({
    defaults: {
        username: "",
        state: "start"
    }
});
var appState = new AppState();
appState.trigger("change");
appState.bind("change:state", function () {
    var state = this.get("state");
    if (state == "start") {
        controller.navigate("!/", false); // false потому, что нам не надо
                                          // вызывать обработчик у Router
    } else {
        controller.navigate("!/" + state, false);
    }
});