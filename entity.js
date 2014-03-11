lilRPG.entity = (function () {

    var entityCount = 0;

    return function (spec) {
        spec.id = entityCount++;

        var that = {};

        that.getId = function () {
            return spec.id;
        };

        that.getCharacter = function () {
            return spec.character;
        };

        that.setCharacter = function (character) {
            spec.character = character;
            return this;
        };

        that.getColor = function () {
            return spec.color;
        };

        that.setColor = function (color) {
            spec.color = color;
            return this;
        };

        that.getX = function () {
            return spec.x;
        };

        that.setX = function (x) {
            spec.x = x;
            return this;
        };

        that.getY = function () {
            return spec.y;
        };

        that.setY = function (y) {
            spec.y = y;
            return this;
        };

        that.getPosition = function () {
            return {x: spec.x,
                    y: spec.y};
        };

        that.setPosition = function (x, y) {
            spec.x = x;
            spec.y = y;
            return this;
        };

        that.moveBy = function (xDelta, yDelta) {
            spec.x += xDelta;
            spec.y += yDelta;
            return this;
        };

        lilRPG.enableEventsOn(that);

        return that;
    };
})();
