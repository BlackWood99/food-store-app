import React from 'react'

export const Contacts = () => {
    return (
        <div className="contactsPage">
            <h2>Контакты</h2>
            <div>
                <p>Разместите на этой странице информацию с контактами вашего интернет-магазина, а также краткую информацию о нем.</p>

                <p>Например:</p>

                <p>Вы можете найти нас по адресу: г. Москва, ул. Торговая, дом 123, офис 456</p>

                <p>Как добраться: Сокольническая линия метро, последний вагон из центра, выход в сторону Казанского вокзала.</p>

                <p>На сайт можно встроить интерактивную Яндекс- или Google-карту, например так:</p>



                <p>Телефон отдела продаж: 8-495-123-45-67 (многоканальный)</p>

                <p>Телефон отдела оптовых продаж: 8-495-765-43-21</p>

                <p>Email: sales@myshop.ru</p>

                <p>График работы офиса и склада:</p>

                <ul className="list_workDays">
                    <li>Понедельник	с 9:00 до 21:00</li>
                    <li>Вторник	с 9:00 до 21:00</li>
                    <li>Среда	с 9:00 до 21:00</li>
                    <li>Четверг	с 9:00 до 21:00</li>
                    <li>Пятница	с 9:00 до 21:00</li>
                    <li>Суббота	с 10:00 до 20:00</li>
                    <li>Воскресенье	с 10:00 до 20:00</li>
                </ul>

                <p>Заказы через сайт принимаются круглосуточно!</p>

                <p>Реквизиты:</p>

                <ul>
                    <li>ИП Иванов Иван Иванович</li>
    
                    <li>ОГРНИП: 123456789012345</li>
    
                   <li> ИНН: 123456789012</li>
    
                    <li>КПП: 123456789</li>
                </ul>
            </div>
        </div>
    )
}
