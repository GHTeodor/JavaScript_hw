
let energy = null;
let money = 100;

function sleep(isSlept, callback) {
    setTimeout(() => {
        if (isSlept) {
            callback(null, energy = 100);
        } else {
            callback("Зараз засну. Засинаю....", null);
        }
    }, Math.floor(Math.random() * 2000));
}


function wakeUp(energy, callback) {
    setTimeout(() => {
        if (energy > 50) {
            callback(null, "Я прокинувся");
        } else {
            callback("Я ще сплю", null);
        }
    }, Math.floor(Math.random() * 2000));
}


function breakfast(haveBreakfast, callback) {
    setTimeout(() => {
        if (haveBreakfast) {
            callback(null, "Пора снідати");
        } else {
            callback("Яка їжа, я сплю", null);
        }
    }, Math.floor(Math.random() * 2000))
}


function shower(haveShower, callback) {
    setTimeout(() => {
        if (haveShower) {
            callback(null, "Піду прийму душ");
        } else {
            callback("Я ще снідаю", null);
        }
    }, Math.floor(Math.random() * 2000));
}


function bus(isBus, callback) {
    setTimeout(() => {
        if (isBus) {
            callback(null, "Таки автобус приїхав");
        } else {
            callback("Автобус не приїхав", null);
        }
    }, Math.floor(Math.random() * 2000));
}


function work(goWork,callback) {
    setTimeout(() => {
        if (goWork) {
            console.log("Попрацював");
            callback(null, money += 500);
        } else {
            callback("Нема автобуса нема роботи", null);
        }
    });
}

function dinner(coins, callback) {
    setTimeout(() => {
        if (coins > 100) {
            console.log("Час обідати");
            callback(null, coins -= 50);
        } else {
            callback("Вдома поїм", null);
        }
    }, Math.floor(Math.random() * 2000));
}

function shopping(spendCoins, callback) {
    setTimeout(() => {
        if (spendCoins > 100) {
            console.log("Куплю подарунки", -400);
            callback(null, spendCoins -= 400);
        } else {
            callback("Йду додому", null);
        }
    }, Math.floor(Math.random() * 2000));
}

function goHome(byBus, callback) {
    setTimeout(() => {
        if (byBus > 100) {
            console.log("Автобус не приїхав. Піду (додому) лісом");
            callback(null, byBus);
        } else {
            callback("Автобус приїхав. Їду додому", null);
        }
    }, Math.floor(Math.random() * 2000));
}

function forest(findCoins, callback) {
    setTimeout(() => {
        if (findCoins > 100) {
            console.log("В лісі знайшов Миколая");
            callback(null, findCoins += 1000);
        } else {
            callback("Вже вдома", null);
        }
    }, Math.floor(Math.random() * 2000));
}

sleep(true, (err1, data1) => {
    if (err1) {
        console.error(err1);
    } else {
        console.log("Енергії = ",data1,"%");
        wakeUp(data1, (err2, data2) => {
            if (err2) {
                console.error(err1);
            } else {
                console.log(data2);
                breakfast(data2, (err3, data3) => {
                    if (err3) {
                        console.error(err3);
                    } else {
                        console.log(data3);
                        shower(data3, (err4, data4) => {
                            if (err4) {
                                console.error(err4);
                            } else {
                                console.log(data4);
                                bus(data4, (err5, data5) => {
                                    if (err5) {
                                        console.error(err5);
                                    } else {
                                        console.log(data5);
                                        work(data5, (err6, data6) => {
                                            if (err6) {
                                                console.error(err5);
                                            } else {
                                                console.log('Money +', data6, "Копійок");
                                                dinner(data6, (err7, data7) => {
                                                    if (err7) {
                                                        console.error(err7);
                                                    } else {
                                                        console.log('На рахунку:', data7, "Копійок");
                                                        shopping(data7, (err8, data8) => {
                                                            if (err8) {
                                                                console.error(err8);
                                                            } else {
                                                                console.log('Money =', data8, "Копійок");
                                                                goHome(data8, (err9, data9) => {
                                                                    if (err9) {
                                                                        console.error(err9);
                                                                    } else {
                                                                        console.log('Money =', data9, "Копійок");
                                                                        forest(data9, (err10, data10) => {
                                                                            if (err10) {
                                                                                console.error(err10);
                                                                            } else {
                                                                                console.log("+", data10, "Копійок");
                                                                                console.log("Нарешті вдома");
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});