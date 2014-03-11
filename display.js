lilRPG.display = function (spec) {
    spec.width = spec.width || 80;
    spec.height = spec.height || 24;

    var that = {};

    var displayDiv = document.getElementById('display');
    for (var y = 0; y < spec.height; y++) {
        for (var x = 0; x < spec.width; x++) {
            var cell = document.createElement('span');
            cell.id = x + ',' + y;
            cell.appendChild(document.createTextNode('.'));
            displayDiv.appendChild(cell);
        }
        displayDiv.appendChild(document.createElement('br'));
    }

    that.draw = function (character, foreground, background, x, y) {
        var cell = document.getElementById(x + ',' + y);
        cell.innerHTML = character;
        cell.style.color = foreground;
        cell.style.background = background;
    };

    return that;
};
