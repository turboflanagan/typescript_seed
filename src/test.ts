export class numbersToLcd {
    static isWorking = true;

    static translateNumber(number) {
        if (number === 2) {
            return " _ \n _|\n|_ "
        }
        return "   \n  |\n  |";
    }
}