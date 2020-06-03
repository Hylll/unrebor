#!/bin/bash

php bin/console cache:warmup --env=dev

php bin/console assets:install public -e prod

php-fpm

exec $@
