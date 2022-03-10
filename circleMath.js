"use strict";
var mathVars;
(function (mathVars) {
    const PI = 3.142;
    function calcCircum(diameter) {
        return diameter * PI;
    }
    mathVars.calcCircum = calcCircum;
})(mathVars || (mathVars = {}));
