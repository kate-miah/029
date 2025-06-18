/* 
Типи даних в JS
Boolean - логічний тип - true або false
Number - будь-які числа
String - це будь які строки (текст)

null - спеціальне "пусте" значення
undefined - тип "невизначченість" */

let variable; /* Декларація (інізціялізація) змінної */
variable = "hello"; /* Присвоювання значення */


let box = 5; /* Створи змінну з ім'ям box і поклади в неї 5 */

//// вот на цьому етапі в box ще число 5

box = 10;

////// вот тут box має число 10

box = "text";

/* 
Оператор

typeof

+ додавання
- віднімання
* множення
/ ділення

*/

let box1 = 25;
let box2 = 'hello world';

/* Numing (називання) змнінних

Назва змінної має пояснювати, ля чого вона є або що всередині
В JS використовують camelCase

let userInputValue;
let userName;
let userAvatarURL;
*/
// const userNickName; //  ERROR!


const userName = 'John';
// userName ='Rick';

const PI = 3.14;

box = 1;

let result = 0;
result = box + 1; // 2

box = box + 4; // 5
box = box * 2; // 10


let newResult = 2;
newResult = newResult * 5; // 10
newResult = newResult / 2; // 5
newResult = newResult + 1; // 6

//result = result +5;
result += 5;
//result = - 2;
result - 2;
//ressult = result * 4;
result *= 4;
//result = result / 2;
result /= 2;


/* Інкремент/Декремент*/

let value = 0;
//value = value + 1;
value++; //Інкремент - збільшенні значення на 1
value--; //Декремент - зменшення значення на 1
//value = value - 1;

//Посфікс (спочатку ім'я змінной, потім оператор)
value++;
value--;
// Спочатку використовується значення змінної, а потім вікористовуєтьсяоперація збільшення/зменшення
result = value++;

//Префіксна форма (спочатку оператор, а потім ім'я змінної)
++value;
--value;
result = ++value; //Спочатку збільшуємо на 1, а потім таке саме значення кладем в result