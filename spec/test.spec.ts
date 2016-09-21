
import {NumbersToLcd} from "../src/test";
describe("NumbersToLcd", () => {
    it("should return lcd 1 for number 1", () => {
       expect(NumbersToLcd.translateNumber(1)).toEqual("   \n  |\n  |");
    });

    it("should return lcd 11 for number 11", () => {
       expect(NumbersToLcd.translateNumber(11)).toEqual("      \n  |  |\n  |  |");
    });

    it("should return lcd 2 for number 2", () => {
       expect(NumbersToLcd.translateNumber(2)).toEqual(" _ \n _|\n|_ ");
    });
});