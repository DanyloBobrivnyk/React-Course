const shoppingMallData = {
    shops: [{
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let perimeter;
    let capacityForAll;

    data.shops.forEach(shop => {
        let shopPerimeter = shop.width * shop.length;
        perimeter += shopPerimeter;
    });

    capacityForAll = perimeter * data.height;
    let totalMoneySpend = capacityForAll * data.moneyPer1m3;

    if (totalMoneySpend <= data.budget) {
        console.log('Бюджета достаточно');
        return;
    }
    console.log('Бюджета недостаточно');
}