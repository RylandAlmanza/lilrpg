lilRPG.world = function (spec) {
    spec.width = spec.width || 80;
    spec.height = spec.height || 24;
    if (!spec.tiles) {
        var x,
            y;

        spec.tiles = [];

        for (y = 0; y < spec.height; y++) {
            spec.tiles.push([]);
            for (x = 0; x < spec.width; x++) {
                spec.tiles[y].push(lilRPG.tile({})
                                       .setCharacter('#')
                                       .setColor('#8595a1')
                                       .setBackground('#8595a1')
                                       .setPosition(x, y)
                                       .makeSolid());
            }
        }
    }

    var that = {}; 
    that.entities = [];

    that.getWidth = function () {
        return spec.width;
    };

    that.getHeight = function () {
        return spec.height;
    };

    that.getTile = function (x, y) {
        return spec.tiles[y][x];
    };

    that.setTile = function (x, y, tile) {
        spec.tiles[y][x] = tile;
        return this;
    };

    that.addEntity = function (entity) {
        this.entities.push(entity);
        return this;
    };

    that.drunkardWalk = function (carvePercentage) {
        var tilesCarved = 0,
            floorTilesNeeded = carvePercentage * (spec.width * spec.height),
            directions = [{x: 0, y: -1},
                          {x: 1, y: 0},
                          {x: 0, y: 1},
                          {x: -1, y: 0}],
            direction = {x: 0, y: 0},
            position = {x: Math.floor(Math.random() * spec.width),
                        y: Math.floor(Math.random() * spec.height)},
            positionValid = false;

        spec.tiles[position.y][position.x] = lilRPG.tile({})
                                                 .setCharacter('.')
                                                 .setColor('#d2aa99')
                                                 .setBackground('#4e4a4e')
                                                 .setPosition(position.x,
                                                              position.y);

        tilesCarved++;

        while (tilesCarved != floorTilesNeeded) {
            positionValid = false;
            while (positionValid === false) {
                if (Math.random() < .25) {
                    direction = directions[Math.floor(Math.random() * 4)];
                }
                if (position.x + direction.x > 0 &&
                    position.y + direction.y > 0 &&
                    position.x + direction.x < (spec.width - 1) &&
                    position.y + direction.y < (spec.height - 1)) {
                    position.x = position.x + direction.x;
                    position.y = position.y + direction.y;
                    positionValid = true;
                }
            }

            if (spec.tiles[position.y][position.x].getCharacter() ===
                '#') {
                spec.tiles[position.y][position.x] =
                    lilRPG.tile({})
                        .setCharacter('.')
                        .setColor('#d2aa99')
                        .setBackground('#4e4a4e')
                        .setPosition(position.x, position.y);
                tilesCarved++;
            }
        }
        return this;
    };

    that.getEmptyTile = function () {
        var x,
            y;

        while (true) {
            x = Math.floor(Math.random() * spec.width);
            y = Math.floor(Math.random() * spec.height);
            if (spec.tiles[y][x].isSolid() === false) {
                return spec.tiles[y][x];
            }
        }
    };

    return that;
};
