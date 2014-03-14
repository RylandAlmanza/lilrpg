window.onload = function () {
    var x,
        y,
        tile,
        i,
        entity,

        display = lilRPG.display({width: 80, height: 24}),

        world = lilRPG.world({})
                    //.drunkardWalk(.60),
                    .generateNormalDungeon(),
        
        startTile = world.getEmptyTile(),

        guy = lilRPG.being({})
            .setCharacter('@')
            .setColor('#dad45e')
            .setPosition(startTile.getX(), startTile.getY());

    world.addEntity(guy);

    //world.updateFOV(guy.getX(), guy.getY(), 2);

    function drawTile(tile) {
        var color,
            background;
        //if (tile.getVisibility() === lilRPG.visibility.lit) {
            color = tile.getColor();
            background = tile.getBackground();
        //} else {
        //    color = '#000000';
        //    background = '#000000';
        //}
        display.draw(tile.getCharacter(),
                     color,
                     background,
                     tile.getX(),
                     tile.getY());
    }

    function drawEntity(entity) {
        var x = entity.getX()
            y = entity.getY()
            background = world.getTile(x, y).getBackground();

        display.draw(entity.getCharacter(),
                     entity.getColor(),
                     background,
                     x,
                     y);
    }

    function drawAll() {
        var x,
            y,
            tile,
            i,
            entity;

        for (y = 0; y < world.getHeight(); y++) {
            for (x = 0; x < world.getWidth(); x++) {
                tile = world.getTile(x, y);
                drawTile(tile);
            }
        }

        for (i = 0; i < world.entities.length; i++) {
            entity = world.entities[i];
            drawEntity(entity);
        }
    }

    function moveEntityBy(entity, xDelta, yDelta) {
        var i,
            tile,
            oldX = entity.getX(),
            oldY = entity.getY();

        entity.moveBy(xDelta, yDelta);
        if (world.getTile(entity.getX(), entity.getY()).isSolid() === false) {
            tile = world.getTile(oldX, oldY);

            drawEntity(tile);
            for (var i = 0; i < world.entities.length; i++) {
                drawEntity(world.entities[i]);
            }
            drawEntity(entity);
        } else {
            entity.moveBy(-xDelta, -yDelta);
        }
    }

    function moveEntityTo(entity, x, y) {
        var tile,
            oldX = entity.getX(),
            oldY = entity.getY();

        entity.setPosition(x, y);

        tile = world.getTile(oldX, oldY);

        drawEntity(entity);
        drawEntity(tile);
    }

    drawAll();

    document.onkeydown = function (e) {
        e = e || window.event;
        
        if (e.keyCode === 37 ||
            e.keyCode === 72 ||
            e.keyCode === 52) {
            moveEntityBy(guy, -1, 0);
        } else if (e.keyCode === 38 ||
                   e.keyCode === 75 ||
                   e.keyCode === 56) {
            moveEntityBy(guy, 0, -1);
        } else if (e.keyCode === 39 ||
                   e.keyCode === 76 ||
                   e.keyCode === 54) {
            moveEntityBy(guy, 1, 0);
        } else if (e.keyCode === 40 ||
                   e.keyCode === 74 ||
                   e.keyCode === 50) {
            moveEntityBy(guy, 0, 1);
        } else if (e.keyCode === 55 ||
                   e.keyCode === 89) {
            moveEntityBy(guy, -1, -1);
        } else if (e.keyCode === 57 ||
                   e.keyCode === 85) {
            moveEntityBy(guy, 1, -1);
        } else if (e.keyCode === 51 ||
                   e.keyCode === 78) {
            moveEntityBy(guy, 1, 1);
        } else if (e.keyCode === 49 ||
                   e.keyCode === 66) {
            moveEntityBy(guy, -1, 1);
        }
          
    };
};
