const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const sms = [
    {
        type: "Похвала",
        messages: [
            'Ты классная',
            'Ты вкусно пахнешь',
            'Ты смелая',
            'У тебя классный стиль',
            'Интересное мнение',
            'А ты заботливая',
            'У тебя классная задница',
            'Ты умная',
            'Ты послушная',
            'Молодец',
            'Хорошая девочка'
        ]
    },
    {
        type: "Конкуренция",
        messages: [
            'Ко мне сейчас девушка клеится, как отшить?',
            'Назвать другим именем',
            'Твоя подруга мне пишет',
            'Скинуть фото с другой девочкой',
            'Фото подарка с припиской «Это от тебя?»',
            'Фото шибари',
            'Как мне отказаться от тусовки',
            'Твои подружки меня похитили',
            'Ко мне клеются девушки, забери меня от них'
        ]
    },
    {
        type: "Испуг",
        messages: [
            'Тебя слили',
            'Оглядывайся сегодня',
            'За тобой выехали',
            'Тебя ищут',
            'Встретимся в суде',
            'Сегодня лучше сиди дома',
            'Сегодня не отвечай на сообщения',
            'Мы в опасности',
            'Срочно уезжай'
        ]
    },
    {
        type: "Интрига",
        messages: [
            'Узнал о тебе кое-что',
            'У меня есть твоя фотография',
            'У меня есть кое-что интересное для тебя',
            'Ты ничего не хочешь рассказать?',
            'Ты кое-что забыла у меня',
            'Заметил в тебе кое-что',
            'Я тебя где-то видел'
        ]
    },
    {
        type: "Простава",
        messages: [
            'Давай встречается?',
            'С меня куни',
            'Дрочу на твои фото',
            'Ты мне снишься',
            'Я люблю тебя',
            'Сделаю тату с твоим именем',
            'Я сочиню стих про тебя',
            'Хочу от тебя детей'
        ]
    },
    {
        type: "Оттолкнуть",
        messages: [
            'Ты крокодил',
            'Иди в нафиг',
            'От тебя дурно пахнет',
            'Красивые усы',
            'Ты косоглазая',
            'Надоела',
            'Ты толстая',
            'Ты кривая',
            'Отстань'
        ]
    },
    {
        type: "Оттолкнуть",
        messages: [
            'Как ты могла?',
            'Тебе должно быть стыдно',
            'Стыдно за тебя',
            'Так не делается',
            'Не позорься',
            'Веди себя культурнее',
            'Ты обманула людей',
            'Ты приносишь несчастье',
            'На тебя жалуются',
            'Из-за тебя в стране все плохо'
        ]
    },
    {
        type: "Универсальные ответы",
        messages: [
            'Не тупи',
            'Это было не тебе',
            'А ты как думаешь?',
            'Ок',
            'Я передумал',
            'Потому что каждый год около 200 человек умирают от нападения диких муравьев'
        ]
    }
]

const select = document.querySelector(".sms__select")
const button = document.querySelector(".sms__button")
const checkbox = document.querySelector(".sms__input")
const message = document.querySelector(".sms__message")

sms.forEach(({type}) => {
    const option = document.createElement("option")
    option.innerText = type
    option.setAttribute('value', type)

    select.appendChild(option)
})

const getRandomSms = (type = "") => {
    let messages = ""

    let smsMessage = ""

    while (smsMessage === message.innerText || smsMessage === "") {
        if (type === "") {
            messages = sms[getRandomInt(0, sms.length)].messages
        } else {
            messages = sms.filter((sms) => sms.type === type)[0].messages
        }

        smsMessage = messages[getRandomInt(0, messages.length)]
    }

    return smsMessage
}


button.addEventListener("click", () => {
    if (checkbox.checked) {
        message.innerText = getRandomSms(select.value)
    } else {
        message.innerText = getRandomSms()
    }
})












