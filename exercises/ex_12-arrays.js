const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            cSharp: '40%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    console.log(plan.skills.exp);
}

function showProgrammingLangs(plan) {
    let result = '';

    for (let i in plan.skills.programmingLangs) {
        result = result.concat(`Язык ${i} изучен на ${plan.skills.programmingLangs[i]} `);
    }
    console.log(result);
}

function showAgeAndLangs(plan) {
    let langs = '';

    plan.skills.languages.forEach(element => {
        langs = langs.concat(element.toUpperCase() + ' ');
    });
    console.log(`I know next languages: ${langs}`);
}

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {

}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(element => {
        console.log(element.toLowerCase());
    });
}

const someString = 'This is some strange string';

function reverse(str) {
    if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
        return "При вычислении произошла ошибка";
    }

    let result;
    let i = str.length - 1;

    for (i; i >= 0; i--) {
        result += str[i];
    }
    console.log(result);
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

}