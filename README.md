# Тестовое задание

Необходимо, используя React, разработать web-приложение, отображающее информацию о состоянии бригад.

Исходные данные находятся в файле `./data/data.json`. Если хотите, можете сгенерировать их самостоятельно, выполнив в терминале команду `node ./data-generator.js`.

Описание исходных данных в виде [OpenAPI-схемы](https://ru.wikipedia.org/wiki/OpenAPI_(спецификация)) можно найти в файле `./data/openapi.yaml`. Визуально можно посмотреть через сервис [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/v1336/frontend-test-task/master/data/openapi.yaml).

Требуется реализовать следующее:

1. Отбражение информации о бригадах с возможностью постраничной навигации, по 20 бригад на странице. Формат отображения может быть любым
2. Фильтрация по состоянию связи
3. Фильтрация по подразделениям
4. Выбранные настройки фильтрации необходимо запоминать и использовать при повторном открытии приложения

Технические указания:

1. Для написания приложения желательно использовать TypeScript
2. Для создания приложения разрешается использовать Create React App
3. Для управления состоянием приложения необходимо использовать Redux, разрешается использовать Redux Toolkit

Для реализации UI разрешено использовать любые свободные наборы инструментов (например React Bootstrap, Ant Design, Material-UI). От вас не требуется идеальной реализации UX/UI, но аккуратно свёрстанный интерфейс будет значимым плюсом.

Исходники тестового задания нужно предоставить в публичном git-репозитории или в виде архива.
