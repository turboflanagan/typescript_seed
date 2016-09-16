import {numbersToLcd} from "../src/test";

describe("numbersToLcd", () => {
   it("should do something", () => {
       expect(numbersToLcd.isWorking).toBeTruthy();
   });

    it("should return lcd 1 for number 1", () => {
       expect(numbersToLcd.translateNumber(1)).toEqual("   \n  |\n  |");
    });

    it("should return lcd 2 for number 2", () => {
       expect(numbersToLcd.translateNumber(2)).toEqual(" _ \n _|\n|_ ");
    });

    it("should return lcd 11 for number 11", () => {
       expect(numbersToLcd.translateNumber(11)).toEqual("      \n  |  |\n  |  |");
    });
});