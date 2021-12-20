// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою promise та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь-яка. При тому ваші дії мають бути синхронізовані.
// // Наприклад.
// Прокинутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с
// // І так далі

let energy = null;
let money = 100;

function sleep(isSlept) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSlept) {
                resolve(energy = 100);
            } else {
                reject("Зараз засну. Засинаю....");
            }
        }, Math.floor(Math.random() * 2000));
    });
}

function wakeUp(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (energy > 50) {
                resolve("Я прокинувся");
            } else {
                reject("Я ще сплю");
            }
        }, Math.floor(Math.random() * 2000));
    });
}

function breakfast(haveBreakfast) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (haveBreakfast) {
                resolve("Пора снідати");
            } else {
                reject("Яка їжа, я сплю");
            }
        }, Math.floor(Math.random() * 2000))
    });
}

function shower(haveShower) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (haveShower) {
                resolve("Піду прийму душ");
            } else {
                reject("Я ще снідаю");
            }
        }, Math.floor(Math.random() * 2000));
    });
}

function bus(isBus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isBus) {
                resolve("Таки автобус приїхав");
            } else {
                reject("Автобус не приїхав");
            }
        }, Math.floor(Math.random() * 2000));
    });
}

function work(goWork) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (goWork) {
                console.log("Попрацював");
                resolve(money += 500);
            } else {
                reject("Нема автобуса нема роботи");
            }
        }, Math.floor(Math.random() * 2000));
    });
}

function dinner(coins) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (coins > 100) {
                console.log("Час обідати");
                resolve(coins -= 50);
            } else {
                reject("Вдома поїм");
            }
        }, Math.floor(Math.random() * 2000));
    });
}

function shopping(spendCoins) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (spendCoins > 100) {
                console.log("Куплю подарунки",-400);
                resolve(spendCoins-=400);
            } else {
                reject("Йду додому");
            }
        }, Math.floor(Math.random() * 2000));
    })
}

function goHome(byBus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (byBus > 100) {
                console.log("Автобус не приїхав. Піду (додому) лісом");
                resolve(byBus);
            } else {
                reject("Автобус приїхав. Їду додому");
            }
        }, Math.floor(Math.random() * 2000));
    });
}

function forest(findCoins) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (findCoins > 100) {
                console.log("В лісі знайшов Миколая");
                resolve(findCoins += 1000);
            } else {
                reject("Вже вдома");
            }
        }, Math.floor(Math.random() * 2000));
    });
}

// // Promise .then ____________________________________________________________________________________

sleep(true)
    .then(energ => {
        console.log("Енергії =", energ, "%");
        return wakeUp(energ)
    })
    .then(wake_Up => {
        console.log(wake_Up);
        return breakfast(wake_Up);
    })
    .then(have_breakfast => {
        console.log(have_breakfast);
        return shower(have_breakfast);
    })
    .then(have_shower => {
        console.log(have_shower);
        return bus(have_shower);
    })
    .then(is_bus => {
        console.log(is_bus);
        return work(is_bus);
    })
    .then(goWork => {
        console.log('Money +', goWork, "Копійок")
        return dinner(goWork);
    })
    .then(is_dinner => {
        console.log('На рахунку:', is_dinner, "Копійок");
        return shopping(is_dinner);
    })
    .then(shopping => {
        console.log('Money =', shopping, "Копійок");
        return goHome(shopping);
    })
    .then(coins => {
        console.log('Money =', coins, "Копійок");
        return forest(coins);
    })
    .then(fine => {
        console.log("+", fine, "Копійок");
    })
    .catch(e => {
        console.error(e);
    })
    .finally(() => {
        console.log('Приплентався додому');
    });


// // Document write wait... ____________________________________________________________________________________

// async function async() {
//     try {
//         let async0 = await sleep(true);
//         let async1 = await wakeUp(async0);
//         let async2 = await breakfast(async1);
//         let async3 = await shower(async2);
//         let async4 = await bus(async3);
//         let async5 = await work(async4);
//         let async6 = await dinner(async5);
//         let async7 = await shopping(async6);
//         let async8 = await goHome(async7);
//         let async9 = await forest(async8);
//
//         document.write("Енергії =", async0, "%<hr/>");
//         document.write(async1, "<hr/>");
//         document.write(async2, "<hr/>");
//         document.write(async3, "<hr/>");
//         document.write(async4, "<hr/>");
//         document.write("Попрацював. Money = ", async5, " Копійок<hr/>");
//         document.write("Час обідати. На рахунку: ", async6, " Копійок<hr/>");
//         document.write("Куплю подарунки ", -400," копійок. Залишилось: ", async7, " Копійок<hr/>");
//         document.write("Автобус не приїхав. Піду (додому) лісом. Money = ", async8, " Копійок<hr/>");
//         document.write("В лісі знайшов Миколая +", async9, " Копійок<hr/>");
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// async();