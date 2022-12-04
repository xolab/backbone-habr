var Family = Backbone.Collection.extend({
    model: UserNameModel,
    checkUser: function (username) {
        var findResult = this.find(function (user) {
            return user.get("name") == username;
        });
        return findResult != null;
    }
});

var myFamily = new Family([
    {name: "Sasha"},
    {name: "Lena"},
    {name: "Fedor"}
]);