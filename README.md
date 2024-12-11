# Тестовое задание для Magwai

* Использована сборка на gulp с esbuild (конфиг от HTML Академии)
* Использован sass (большая часть верстки на нативных фичах + sass миксин)
* БЭМ (файловая структура: блоки в отдельных файлах)
* Загрузка карточек с данными из API с сохранением на сессию для производительности
* Оптимизация изображений
* Деплой по github экшену в ветку gh-pages
* Верстка с использованием сабгридов, чтобы все строчки в карточках были по линиям
* Добавил декоративных анимаций для интерактивных элементов (пункты меню, экшен кнопка) и легкий паралакс фона при прокрутке

## Замечания

* Были проблемы с запросами к jsonplaceholder. На хроме, запросы висели pending пока я не отключил безопасность в настройках браузера (либо включил прокси). Также на локальном сервере не доходили. С другим api такой проблемы не было.
* Выбранный на макете цвет надписей у action кнопок недостаточно контрастен на фоне. Стоит сделать темнее либо текст, либо фон.
