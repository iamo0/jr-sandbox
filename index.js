"use strict";

/**
 * Типы данных
 * Примитивные типы данных:
 *   — числа (number) — просто пишутся числа (определяется по префиксу системы счисления или числу в начале)
 *   — текст или строка (string) — берется в кавычки
 *   — логический тип данных или булев тип (boolean)
 *   — неопределенные данные (undefined)
 *   — пустые данные (null)
 * Сложные типы данных
 *
 * Операторы — минимальная и самая простая команда языка
 *  — унарные — работают с одним значением
 *  — бинарные — работают с двумя значениями
 *  — тернартый — работает с тремя значениями
 *
 * Оператор + может быть унарным или бинарным, строковым или числовым
 * 
 * Переменная — способ сохранить значение, задав ему название
 *  — var — variable (переменная) исторически это первый способ создания переменных в JS
 *  — let — "допустим" современный способ создания переменных
 *  — const — constant (постоянное значение) переменная доступная только для чтения
 *  — всегда const до тех пор пока не припрет использовать let
 *
 * Оператор присвоения = используется для записи значений (например в переменные)
 */


const earthRadius = 6378;

let positionOfCourier = Math.atan(2) * earthRadius;
// console.log(positionOfCourier);



let randomlyGeneratedNumber;
// console.log("Объявленная, но не определенная переменная", randomlyGeneratedNumber);

randomlyGeneratedNumber = 12;
// console.log("Объявленная и уже определенная переменная", randomlyGeneratedNumber);

randomlyGeneratedNumber = "Привет";
// console.log("Объявленная и еще раз определенная переменная", randomlyGeneratedNumber);


1234
0xFF
0b100

+1;
-1; // К единице применен унарный оператор минуса


// console.log(`Результат сложения 10 и 3 равняется ${10 + 3}`);

Math.ceil(0.1); // Ceiling
Math.round(1.5); //
Math.floor(1.9); // Floor

// console.log(Math.round(Math.random() * 255));

"Текстовая \" информация\n\t";
'Текстовая информация\n\t';
`Текстовая информация`; // Шаблонная строка

// console.log("Оператор сложения" + " " + "строк");

const someVar = true;
const another = false;


1 + 2;
1 + "3";

// >
// <
// >=
// <=

// ==
// ===

// Динамическая типизация
// По ходу вычислений один тип данных может быть 
// __автоматически__ преобразован в другой тип данных

true; // Truthy
false; // Falsy

undefined;

null;

// if (!Number(prompt("Введите ваш возраст"))) { // string | null
//   alert("Покиньте сайт");
// }

// Сложный — сложенный
// Трудный


// Утечка памяти
const getMultiplierFunction = function() {
  const multiplier = 3;

  return function(value = 1) {
    return value * multiplier;
  };
}

const multiplier = getMultiplierFunction();

console.log(multiplier(0));
console.log(multiplier(1));
console.log(multiplier(2));
console.log(multiplier(4));
console.log(multiplier(6));
console.log(multiplier(8));

