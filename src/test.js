System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var numbersToLcd;
    return {
        setters:[],
        execute: function() {
            numbersToLcd = (function () {
                function numbersToLcd() {
                }
                numbersToLcd.translateNumber = function (number) {
                    if (number === 2) {
                        return " _ \n _|\n|_ ";
                    }
                    return "   \n  |\n  |";
                };
                numbersToLcd.isWorking = true;
                return numbersToLcd;
            }());
            exports_1("numbersToLcd", numbersToLcd);
        }
    }
});
//# sourceMappingURL=test.js.map