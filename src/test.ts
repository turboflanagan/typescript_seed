export class numbersToLcd {
    static isWorking = true;

    static numberLcdRepresentation: any = {
        1:  "   \n" +
            "  |\n" +
            "  |",

        2:  " _ \n" +
            " _|\n" +
            "|_ "
     };

    static translateNumber(number) {
        let stringOfNumber: string = number.toString().split("");
        let lcdNumber: any = "";

        for (let key in this.numberLcdRepresentation) {
            if (this.numberLcdRepresentation.hasOwnProperty(number)) {
                lcdNumber += this.numberLcdRepresentation[number];
            }
            return lcdNumber;
        }
    }
}