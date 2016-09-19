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
                    var stringOfNumber = number.toString().split("");
                    var lcdNumber = "";
                    for (var key in this.numberLcdRepresentation) {
                        if (this.numberLcdRepresentation.hasOwnProperty(number)) {
                            lcdNumber += this.numberLcdRepresentation[number];
                        }
                        return lcdNumber;
                    }
                };
                numbersToLcd.isWorking = true;
                numbersToLcd.numberLcdRepresentation = {
                    1: "   \n" +
                        "  |\n" +
                        "  |",
                    2: " _ \n" +
                        " _|\n" +
                        "|_ "
                };
                return numbersToLcd;
            }());
            exports_1("numbersToLcd", numbersToLcd);
        }
    }
});
//# sourceMappingURL=test.js.map