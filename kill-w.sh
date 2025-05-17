#!/bin/bash

# Ищем все процессы, связанные с WildFly, используя команду ps
# и фильтруем по процессам, которые содержат "wildfly" или "jboss"

wildfly_processes=$(ps aux | grep '[w]ildfly' | awk '{print $2}')

# Если такие процессы найдены, то их нужно завершить
if [ -n "$wildfly_processes" ]; then
    echo "Найдено следующие процессы WildFly:"
    echo "$wildfly_processes"
    # Завершаем все процессы
    echo "$wildfly_processes" | xargs kill -9
    echo "Процессы WildFly завершены."
else
    echo "Процессы WildFly не найдены."
fi
