#!/bin/sh

# Unrebor vhost
sed -i "s/%PHP_HOSTNAME%/${PHP_HOSTNAME}/" /etc/nginx/sites-enabled/symfony.conf
sed -i "s/%BACK_HOSTNAME%/${BACK_HOSTNAME}/g" /etc/nginx/sites-enabled/symfony.conf
sed -i "s/%CORS_ORIGIN%/${CORS_ORIGIN}/" /etc/nginx/sites-enabled/symfony.conf
sed -i "s/%INTERNAL_HOSTNAME%/${INTERNAL_HOSTNAME}/" /etc/nginx/sites-enabled/symfony.conf

# Front vhost
sed -i "s/%FRONT_HOSTNAME%/${FRONT_HOSTNAME}/" /etc/nginx/sites-enabled/front.conf

exec "$@"
