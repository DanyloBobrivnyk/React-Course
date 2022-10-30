function getTimeFromMinutes(number) {
    if (!Number.isInteger(number) || number < 0)
        return 'Ошибка, проверьте данные';

    let hours = number / 60;
    let minutes = number % 60;

    let hoursStr = getTimeStr(getLastNumber(hours), false);
    let minutesStr = getTimeStr(getLastNumber(minutes), true);

    return `Это ${hours} ${hoursStr} и ${minutes} ${minutesStr}`;
}

function getTimeStr(number, isMinutes) {
    let result = isMinutes ? 'Минут' : 'Час';

    if (number == 1) {
        if (isMinutes)
            result = result.concat('a');
    } else if (number == 2 || number == 3 || number == 4) {
        if (isMinutes)
            result = result.concat('а');
        result = result.concat('ы');
    } else {
        if (!isMinutes)
            result = result.concat('ов')
    }
    return result;
}

function getLastNumber(number) {
    while (number % 10 == 0) {
        number = number % 10;
    }
    return number;
}

getTimeFromMinutes(239);
getTimeFromMinutes(150);
getTimeFromMinutes(50);
getTimeFromMinutes(50);