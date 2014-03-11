lilRPG.being = function (spec) {
    spec.maxHitpoints = spec.maxHitpoints || 3;
    spec.hitpoints = spec.maxHitpoints;
    spec.attackDamage = spec.attackDamage || 1;
    spec.isAlive = spec.isAlive || true;

    var that = lilRPG.entity(spec);

    that.getMaxHitpoints = function () {
        return spec.maxHitpoints;
    };

    that.setMaxHitpoints = function (maxHitpoints) {
        spec.maxHitpoints = maxHitpoints;
        spec.hitpoints = spec.maxHitpoints;
        return this;
    };

    that.getHitpoints = function () {
        return spec.hitpoints;
    };

    that.setHitpoints = function (hitpoints) {
        spec.hitpoints = hitpoints;
        return this;
    };

    that.takeDamage = function (damage) {
        spec.hitpoints -= damage;
        if (spec.hitpoints <= 0) {
            spec.isAlive = false;
            spec.character = '%';
            spec.color = '#ff0000';
        }
        return this;
    };

    that.isAlive = function () {
        return spec.isAlive;
    };

    that.heal = function (hitpoints) {
        spec.hitpoints += hitpoints;
        if (spec.hitpoints > spec.maxHitpoints) {
            spec.hitpoints = spec.maxHitpoints;
        }
        return this;
    };

    that.getAttackDamage = function () {
        return spec.attackDamage;
    };

    that.setAttackDamage = function (attackDamage) {
        spec.attackDamage = attackDamage;
        return this;
    };

    return that;
};
