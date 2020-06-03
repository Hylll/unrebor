#!/bin/bash

php bin/console cache:warmup --env=prod

php bin/console assets:install public

php-fpm

exec $@
