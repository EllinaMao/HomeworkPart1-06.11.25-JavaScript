/*1. создайте функцию, которая принимает строку и возвращает функцию, при вызове которой получаем рандомный символ из переданной строки.

Пример:

const radnomChar = f('apple'); 

radnomChar() -> 'p' 
radnomChar() -> 'l' 
radnomChar() -> 'a'
radnomChar() -> 'p'

2. создайте функцию, которая суммирует 2 числа, но вызывать ее нужно как показано ниже

Пример:

sum(0)(1) -> 1

sum(-1)(3) -> 2

sum(15)(-3) -> 12

3. напишите функцию которая принимает строку и вернет функцию, при вызове которой будет рандомно удаляться символ из переданной строки и показывать ее в текущем виде в сообщении, когда символы закончатся - функция будет выводить - "no text". Если вызвать ее передав параметр - она это допишет в конец текущей строки

  Пример:
   let cutter = crateCutter("some text");
   cutter(); // "sme text"
   cutter(); // "sme tet"
   cutter("hola"); // "sme tethola"
    cutter(); // "sme tethla"*/


function GetRandomChar(str) {
  return function () {
    let randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex];
  };
}

function WriteInDocument(text, context) {
  const messagebox = document.getElementById(text);
  if (messagebox) {
    messagebox.innerHTML += context + '<br>';

  } else {
    console.error(`Не удалось найти элемент с ID: ${text}`);
  }
}

/*2. создайте функцию, которая суммирует 2 числа, но вызывать ее нужно как показано ниже

Пример:

sum(0)(1) -> 1

sum(-1)(3) -> 2

sum(15)(-3) -> 12
*/
function sum(a) {
  if
    (a === undefined) {
    a = 0
  };

  return function (b) {
    return a + b
  };
}
/*3. напишите функцию которая принимает строку и вернет функцию, 
при вызове которой будет рандомно удаляться символ из переданной строки и показывать ее в 
текущем виде в сообщении, когда символы закончатся - функция будет выводить - "no text".
Если вызвать ее передав параметр - она это допишет в конец текущей строки

  Пример:
   let cutter = crateCutter("some text");
   cutter(); // "sme text"
   cutter(); // "sme tet"
   cutter("hola"); // "sme tethola"
    cutter(); // "sme tethla"*/

function crateCutter(text) {
  let currentString = text;
  return function (newPart) {
    if (newPart !== undefined) {
      currentString += newPart; // Просто добавляем его к строке
      return currentString; // И возвращаем результат
    }
    if (currentString.length === 0) {
      return "no text";
    }

    let randomIndex = Math.floor(Math.random() * currentString.length)
    let part1 = currentString.slice(0, randomIndex);
    let part2 = currentString.slice(randomIndex + 1);//если конец строки slice сам разберется

    currentString = part1 + part2;
    return currentString
  }
}


function Task1() {
  // let input = prompt("Введите строку для задачи 1");
  let input  = "apple";
  if (!input) {
    WriteInDocument("task1", `строка пуста`);
    return;

  }
  let getRandomChar = GetRandomChar(input);
  let randomChar = getRandomChar();
  let outputString = `Рандомный символ из строки "${input}": ${randomChar}`;
  WriteInDocument("task1", outputString);
  WriteInDocument("task1", `Еще один символ: ${getRandomChar()}`);
  WriteInDocument("task1", `И еще один: ${getRandomChar()}`);
}
function Task2() {
  // let inputStr1  = prompt("Введите число для задачи 2");
  // let inputStr2  = prompt("Введите второе число для задачи 2");
  // let input = parseFloat(inputStr);
  // let input2 = parseFloat(input2Str);
  let input = 10;
  let input2 = 20;
  if (isNaN(input) || isNaN(input2)) {
    WriteInDocument("task2", "Одно из чисел которые вы ввели - не число");
    return;

  }

  let sum1 = sum(input)(input2);
  let outputString = `Сумма чисел ${input} и ${input2} равна ${sum1}`;
  WriteInDocument("task2", outputString);

}
function Task3() {
  // let input = prompt("Введите строку для задачи 3");
  let input = "some text";
  if (!input) {
    WriteInDocument("task3", `строка пуста`);
    return;
  }

  let cutter = crateCutter(input);
  WriteInDocument("task3", `Вот наш текст: ${cutter()}`);
  WriteInDocument("task3", `Еще отрежем: ${cutter()}`);
  WriteInDocument("task3", `Добавим к строке: ${cutter("hola")}`);
  WriteInDocument("task3", `И чуть порежем: ${cutter()}`);
}
