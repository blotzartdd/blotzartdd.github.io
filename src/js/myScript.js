"use strict"

function get_price_and_time(){
    let calculator_object = {time: 0, price: 0}

let site_type_prices_and_time = {
    '1': [2000, 2],
    '2': [1000, 3],
    '3': [3000, 4],
    '4': [5000, 1],
    '5': [6000, 2],
    '6': [9000, 4],
    '7': [1000, 5],
    '8': [5000, 1]
}

let design_type_prices_and_time = {
    '1': [2000, 1],
    '2': [4000, 2],
    '3': [0, 0]
}

let adaptability_price_and_time = {
    '1': [5000, 2],
    '2': [10000, 3],
    '3': [12000, 4],
    '4': [0, 0]
}

let site_type = prompt(
    'Какой тип сайта вы хотите?' + '\n' +
    '1) Сайт-визитка 2000руб. 2 дня' + '\n' + 
    '2) Корпоративный сайт 1000руб. 3 дня' + '\n' + 
    '3) Интернет-магазин 3000руб. 4 дня' + '\n' + 
    '4) Информационный сайт 5000руб. 1 день' + '\n' + 
    '5) Целевая страница 6000руб. 2 дня' + '\n' + 
    '6) Новостной сайт 9000руб. 4 дня' + '\n' + 
    '7) Тематический сайт 1000руб. 5 дней' + '\n' + 
    '8) Сайт-справочник 5000руб. 1 день' + '\n' +
    'Введите цифру, обозначающую выбранный вами тип сайта.'
)

calculator_object.price = site_type_prices_and_time[site_type][0]
calculator_object.time = site_type_prices_and_time[site_type][1]

let design_type = prompt(
    'Какой дизайн вы хотите?' + '\n' +
    '1) Шаблонный дизайн +2000руб. Дополнительно 1 день' + '\n' +
    '2) Уникальный дизайн +4000руб. Дополнительно 2 дня' + '\n' +
    '3) Без дизайна' + '\n' +
    'Введите цифру, обозначающую выбранный вами дизайн.'
)

calculator_object.price += design_type_prices_and_time[design_type][0]
calculator_object.time += design_type_prices_and_time[design_type][1]

let adaptability= prompt(
    'Какое адаптирование вы хотите?' + '\n' +
    '1) Только мобильные устройства +5000уб. Дополнительно 2 дня' + '\n' +
    '2) Только ПК +10000руб. Дополнительно 3 дня' + '\n' +
    '2) Мобильные устройства и ПК +12000руб. Дополнительно 4 дня' + '\n' +
    '4) Без адаптирования' + '\n' +
    'Введите цифру, обозначающую выбранный тип адаптирования.'
)

calculator_object.price += adaptability_price_and_time[adaptability][0]
calculator_object.time += adaptability_price_and_time[adaptability][1]

alert('Итоговая цена: ' + calculator_object.price + ' RUB' + '\n' + 'Итоговое время: ' + calculator_object.time + ' days')
}

get_price_and_time()

let res = confirm('Вы согласны?')

while (!res){
    get_price_and_time()
    res = confirm('Вы согласны?')
}

alert('Спасибо за ваш заказ!')
