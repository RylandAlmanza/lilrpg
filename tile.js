lilRPG.visibility = {
    undiscovered: 1,
    discovered: 2,
    lit: 3
};

lilRPG.tile = function (spec) {
    spec.isSolid = spec.isSolid || false;
    spec.visibility = spec.visibility || lilRPG.visibility.undiscovered;

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

    that.makeNotSolid = function () {
        spec.isSolid = false;
        return this;
    };

    that.getVisibility = function () {
        return spec.visibility;
    };

    that.setVisibility = function (visibility) {
        spec.visibility = visibility;
        return this;
    };

    return that;
};
