System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NumbersToLcd;
    return {
        setters:[],
        execute: function() {
            NumbersToLcd = (function () {
                function NumbersToLcd() {
                }
                NumbersToLcd.translateNumber = function (number) {
                    var top = "";
                    var middle = "";
                    var bottom = "";
                    var newLine = "\n";
                    var lcdNumber = {
                        1: ["   ",
                            "  |",
                            "  |"],
                        2: [" _ ",
                            " _|",
                            "|_ "]
                    };
                    for (var _i = 0, _a = number.toString(); _i < _a.length; _i++) {
                        var digit = _a[_i];
                        top += lcdNumber[digit][0];
                        middle += lcdNumber[digit][1];
                        bottom += lcdNumber[digit][2];
                        console.log(top + newLine + middle + newLine + bottom);
                    }
                    return top + newLine + middle + newLine + bottom;
                };
                return NumbersToLcd;
            }());
            exports_1("NumbersToLcd", NumbersToLcd);
        }
    }
});
//# sourceMappingURL=test.js.map