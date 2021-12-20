// Задание 1
/* Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены. */


/* const strFunc = (str) => str.replace(/@/gi,'!');

console.log(strFunc('aaa@bbb@ccc')); */



// Задание 2
/* В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. */


/* let date = '2025-12-31',
    newDate = date.replace(/-/g,'/').replace(/(2025)([/])(12)([/])(31)/, '$5$2$3$4$1');
console.log(date, 'Ответ:', newDate); */



// Задание 3
/* Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice). */


/* let str = 'Я учу javascript!',
    str1 = str.substr(2,3) + ' ' + str.substr(6,10),
    str2 = str.substring(2,5) + ' ' + str.substring(6,16),
    str3 = str.slice(2,5) + ' ' + str.slice(6,16);
console.log(str);
console.log('substr:',str1);
console.log('substring:',str2);
console.log('slice:',str3); */



// Задание 4
/* Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */


/* let arr = [4, 2, 5, 19, 13, 0, 10],
    sumArr = 0;

for(let i = 0; i < arr.length; i++) {
    sumArr += Math.pow(arr[i],3);
}
console.log(Math.sqrt(sumArr)); */




// Задание 5
/* Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1. */


/* let a = 3,
    b = 5,
    c = Math.abs(a - b);
console.log(c); */



// Задание 6
/* Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014). */

/* const date = () => {
    let dateNow = new Date(),
        month = dateNow.getMonth(),
        dayMonth = dateNow.getDate();

        dateNow = dateNow.toLocaleString('ru');

            if (month < 10) {
                month = '0' + dateNow.getMonth();
            }
            if (dayMonth < 10) {
                dayMonth = '0' + dateNow.getDate();
            }

    return dateNow;
}
console.log(date()) */



// Задание 7
/* Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'. */


/* let str = 'aa aba abba abbba abca abea',
    str1 = str.match(/(a)(b{1,})(a)/gi);
    console.log(str1) */



// Задание 8
/* Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте регулярные выражения. */


/* const checkNumb = (numbPhone) => {
    let str = /\+[0-9]{3}\([0-9]{2}\) [0-9]{7}/;
    console.log(str.test(numbPhone));
    if (str.test(numbPhone)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkNumb('+375(29) 5454355')) */


// Задание 9
/* Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия: 
- весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов.
Функция должна возвращать true или false. Используйте регулярные выражения. */


/* const checkEmail = (emailName) => {
    let regExp = /[a-zA-Z]{2,}\d{0,}@[a-zA-Z]{2,11}.[a-z]{2,11}/gi;
    if (regExp.test(emailName)) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEmail('Name123@google.com')) */



// Задание 10
/* Напишите ф-цию, которая из полного адреса с параметрами и без, например: https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
может и не быть каких-либо составляющих. Ф-ция должна возвращать массив. 
* Для быстрого составления регулярного выражения и проверки исп. онлайн- сервис https://regex101.com/. */




