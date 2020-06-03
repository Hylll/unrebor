composer config --global --auth github-oauth.github.com 21cf8993f307961493a44dbb12b380f8499322c9

cd symfony

composer install

php bin/console assets:install public -e prod