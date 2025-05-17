#!/bin/bash

PORT=2222
USER=s381032
HOST=se.ifmo.ru
FILE="$(dirname "$0")/build/libs/lab4.war"
TARGET="~"  # Домашний каталог на удаленной машине

# Проверка, что файл существует
if [ ! -f "$FILE" ]; then
    echo "Файл не найден: $FILE"
    exit 1
fi

# Команда для отправки файла с использованием scp
echo "Отправка $FILE на $USER@$HOST:$TARGET через порт $PORT..."
scp -P $PORT "$FILE" "$USER@$HOST:$TARGET"

echo "Отправка завершена."
