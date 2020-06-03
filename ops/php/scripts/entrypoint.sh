#!/bin/bash

# Cache
php bin/console cache:warmup --env=prod

# Update Shema
php bin/console d:s:u --force

php bin/console assets:install public

php-fpm

exec $@
