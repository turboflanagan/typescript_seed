export class NumbersToLcd {

    static translateNumber(number: number): string {
        let top: string = "";
        let middle: string = "";
        let bottom: string = "";
        let newLine: string = "\n";
        let lcdNumber: any = {
            1: ["   ",
                "  |",
                "  |"],
            2: [" _ ",
                " _|",
                "|_ "]
        };

        for (let digit of number.toString()) {
            top += lcdNumber[digit][0];
            middle += lcdNumber[digit][1];
            bottom += lcdNumber[digit][2];
            console.log(top + newLine + middle + newLine + bottom);
        }
        return top + newLine + middle + newLine + bottom;
    }
}
