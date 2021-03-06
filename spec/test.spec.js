System.register(["../src/test"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var test_1;
    return {
        setters:[
            function (test_1_1) {
                test_1 = test_1_1;
            }],
        execute: function() {
            describe("NumbersToLcd", function () {
                it("should return lcd 1 for number 1", function () {
                    expect(test_1.NumbersToLcd.translateNumber(1)).toEqual("   \n  |\n  |");
                });
                it("should return lcd 11 for number 11", function () {
                    expect(test_1.NumbersToLcd.translateNumber(11)).toEqual("      \n  |  |\n  |  |");
                });
                it("should return lcd 2 for number 2", function () {
                    expect(test_1.NumbersToLcd.translateNumber(2)).toEqual(" _ \n _|\n|_ ");
                });
            });
        }
    }
});
//# sourceMappingURL=test.spec.js.map