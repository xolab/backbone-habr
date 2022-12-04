var Block = Backbone.View.extend({
    el: $("#block"), // DOM элемент widget'а
    templates: {
        "start": _.template($('#start').html()),
        "success": _.template($('#success').html()),
        "error": _.template($('#error').html())
    },
    initialize: function () { // Подписка на событие модели
        this.model.bind('change', this.render, this);
    },
    events: {
        "click input:button": "check" // Обработчик клика на кнопке "Проверить"
    },
    check: function () {
        var username = this.$el.find("input:text").val(); // Сохранение имени пользователя
        var find = myFamily.checkUser(username);
        appState.set({
            state: find ? "success" : "error",
            username: username
        });
    },
    render: function () {
        var state = this.model.get("state");
        $(this.el).html(this.templates[state](this.model.toJSON()));
        return this;
    }
});
var block = new Block({model: appState});