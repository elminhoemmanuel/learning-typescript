"use strict";
var mathVars;
(function (mathVars) {
    function calcRect(width, length) {
        return width * length;
    }
    mathVars.calcRect = calcRect;
})(mathVars || (mathVars = {}));
