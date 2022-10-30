function factorial(number) {
    let result = 0;
    if (typeof(number) == 'number' && Number.isInteger(number)) {
        if(number > 1) {
            result = number * factorial(number-1);    
            return result;
        }
        return 1;
    }
    else {
        return 'Неверный аргумент';
    }
}