lilRPG.tile = function (spec) {
    spec.isSolid = spec.isSolid || false;

    var that = lilRPG.entity(spec);

    that.setBackground = function (background) {
        spec.background = background;
        return this;
    };

    that.getBackground = function () {
        return spec.background;
    };

    that.isSolid = function () {
        return spec.isSolid;
    };

    that.makeSolid = function () {
        spec.isSolid = true;
        return this;
    };

    return that;
};
