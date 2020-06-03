FROM php:7.4-fpm AS php

RUN apt-get update && \
    apt-get install -y \
        git \
        libpq-dev \
        librabbitmq-dev

RUN pecl install amqp &&  \
    docker-php-ext-enable amqp

ENV COMPOSER_MEMORY_LIMIT=-1
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer --version
RUN mkdir /var/www/.composer && chown -R www-data /var/www/.composer

RUN rm /etc/localtime
RUN ln -s /usr/share/zoneinfo/Europe/Paris /etc/localtime
RUN "date"

RUN docker-php-ext-install pdo pdo_pgsql

RUN pecl install xdebug
RUN docker-php-ext-enable xdebug

RUN echo "error_reporting = E_ALL" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN echo "display_startup_errors = On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN echo "display_errors = On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN echo "xdebug.remote_enable=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN echo "xdebug.remote_connect_back=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN echo "xdebug.idekey=\"PHPSTORM\"" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN echo "xdebug.remote_port=9001" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/conf.d/php.ini"
RUN  sed -i 's/post_max_size\s*=.*/post_max_size=1G/g' $PHP_INI_DIR/conf.d/php.ini
RUN  sed -i 's/upload_max_filesize\s*=.*/upload_max_filesize=1G/g' $PHP_INI_DIR/conf.d/php.ini
RUN  sed -i 's/memory_limit\s*=.*/memory_limit=1G/g' $PHP_INI_DIR/conf.d/php.ini
RUN  sed -i 's/max_execution_time\s*=.*/max_execution_time=54000/g' $PHP_INI_DIR/conf.d/php.ini
RUN  sed -i 's/max_file_uploads\s*=.*/max_file_uploads=40/g' $PHP_INI_DIR/conf.d/php.ini
RUN  sed -i 's/pm.max_spare_servers\s*=.*/pm.max_spare_servers = 50/g' /usr/local/etc/php-fpm.d/www.conf
RUN  sed -i 's/pm.min_spare_servers\s*=.*/pm.min_spare_servers = 5/g' /usr/local/etc/php-fpm.d/www.conf
RUN  sed -i 's/pm.start_servers\s*=.*/pm.start_servers = 5/g' /usr/local/etc/php-fpm.d/www.conf
RUN  sed -i 's/pm.max_children\s*=.*/pm.max_children = 50/g' /usr/local/etc/php-fpm.d/www.conf

RUN rm "$PHP_INI_DIR/php.ini-development"

RUN echo 'alias sf4="php bin/console"' >> ~/.bashrc

RUN usermod -u 1000 www-data

WORKDIR /var/www/html/symfony

RUN mkdir -p var/log
RUN chown www-data:www-data -R /var/www/html/symfony/var

COPY ./ops/php/scripts /root/scripts
COPY ./symfony /var/www/html/symfony