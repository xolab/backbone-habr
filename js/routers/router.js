var Controller = Backbone.Router.extend({
    routes: {
        "": "start", // Пустой hash-тэг
        "!/": "start", // Начальная страница
        "!/success": "success", // Блок удачи
        "!/error": "error" // Блок ошибки
    },

    start: function () {
        appState.set({state: "start"});
    },

    success: function () {
        appState.set({state: "success"});
    },

    error: function () {
        appState.set({state: "error"});
    }
});
var controller = new Controller(); // Создаём контроллер
Backbone.history.start();  // Запускаем HTML5 History push