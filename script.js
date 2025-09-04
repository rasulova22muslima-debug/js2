var age = prompt("Введите свой возраст")

if (age > 0 && age <= 18) {
    alert("Вы ещё молоды. Вам надо учиться")
} else if (age > 18 && age <= 50) {
    alert("Вам нужно работать.")
} else if (age > 50 && age <= 59) {
    alert("Вам скоро на пенсию.")
} else if (age > 59 && age <= 100) {
    alert("Вы пенсионер.")
} else {
    alert("Что-то пошло не так")
}


var time = +prompt("Введите время (0-23):");

switch (true) {
    case (time > 0 && time <= 6):
        alert(time + " часа ночи");
        break;
    case (time >= 7 && time <= 10):
        alert(time + " часов утра");
        break;
    case (time >= 11 && time <= 17):
        alert(time + " часа дня");
        break;
    case (time >= 18 && time <= 23):
        alert(time + " часов вечера");
        break;
    default:
        alert("Неточное значение. Введите от 0 до 23.");
        break;
}

var a = +prompt("Введите первое число")
var b = +prompt("Введите второе число")
var c = +prompt("Введите третье число")

if ((a > b && a < c) || (a < b && a > c)) {
    answer = a
} else if ((b > a && b < c) || (b < a && b > c)) {
    answer = b
} else {
    answer = c
}

alert("Среднее число: " + answer);
