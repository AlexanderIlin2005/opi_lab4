#!/bin/bash

# Отключаем прерывание скрипта на ошибках
set +e

# Путь к каталогу WildFly
WILDFLY_HOME="wildfly-23.0.0.Final"

# Путь к конфигурационному файлу standalone.xml
STANDALONE_XML="$WILDFLY_HOME/standalone/configuration/standalone.xml"

# Путь к исходному файлу standalone.xml
SOURCE_XML="/Users/sasailin/Downloads/wildfly-23.0.0.Final/standalone/configuration/standalone.xml"

# Останавливаем WildFly в фоне, чтобы не блокировать выполнение скрипта
echo "Останавливаем WildFly..."
./kill-w.sh  # Команда выполняется в фоновом режиме

# Ждём несколько секунд, чтобы убедиться, что процесс завершён
sleep 5

# Очищаем временные данные сервера
echo "Очищаем кеши и временные файлы WildFly..."
rm -rf "$WILDFLY_HOME/standalone/tmp/*" || { echo "Ошибка при удалении tmp"; exit 1; }
rm -rf "$WILDFLY_HOME/domain/tmp/*" || { echo "Ошибка при удалении tmp в domain"; exit 1; }

# Очищаем кеши приложений
rm -rf "$WILDFLY_HOME/standalone/data/content/*" || { echo "Ошибка при удалении контента"; exit 1; }
rm -rf "$WILDFLY_HOME/domain/data/content/*" || { echo "Ошибка при удалении контента в domain"; exit 1; }

# Очищаем старые данные сессий
rm -rf "$WILDFLY_HOME/standalone/data/sessions/*" || { echo "Ошибка при удалении сессий"; exit 1; }
rm -rf "$WILDFLY_HOME/domain/data/sessions/*" || { echo "Ошибка при удалении сессий в domain"; exit 1; }

# Очищаем данные распределённого кеша (если используется кластер)
rm -rf "$WILDFLY_HOME/standalone/data/cluster/*" || { echo "Ошибка при удалении данных кластера"; exit 1; }
rm -rf "$WILDFLY_HOME/domain/data/cluster/*" || { echo "Ошибка при удалении данных кластера в domain"; exit 1; }

# Очищаем развернутые приложения (деплои)
echo "Очищаем развернутые приложения..."
rm -rf "$WILDFLY_HOME/standalone/deployments/*" || { echo "Ошибка при удалении деплоев"; exit 1; }
rm -rf "$WILDFLY_HOME/domain/deployments/*" || { echo "Ошибка при удалении деплоев в domain"; exit 1; }

# Копируем исходный файл standalone.xml в каталог WildFly
echo "Копируем новый файл standalone.xml из $SOURCE_XML в $STANDALONE_XML..."
cp -f "$SOURCE_XML" "$STANDALONE_XML" || { echo "Ошибка при копировании standalone.xml"; exit 1; }

# Запускаем WildFly снова
echo "Запускаем WildFly..."
./wildfly23.sh || { echo "Ошибка при запуске WildFly"; exit 1; }

# Включаем нормальное поведение для ошибок
set -e
