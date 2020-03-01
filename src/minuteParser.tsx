import * as React from "react";

function minuteParser(n: number) {
    let textMinute = "";
    if ((n < 11) || (n > 19)) {
        if ((n % 10) == 1) {
            textMinute = n.toString() + " минута";
        }
        else if (((n % 10) >= 2) && ((n % 10) <= 4)) {
            textMinute = n.toString() + " минуты";
        }
        else {
            textMinute = n.toString() + " минут";
        }
    }
    else {
        textMinute = n.toString() + " минут";
    }
    return textMinute;
}

export default minuteParser;