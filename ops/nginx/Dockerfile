FROM node:12 AS node

RUN export NODE_ENV=production

COPY ./vue /var/www/html/vue
WORKDIR /var/www/html/vue
RUN yarn global add @vue/cli

RUN cd /var/www/html/vue && yarn install && yarn build ; cd -

FROM nginx AS nginx
COPY --from=node /var/www/html/vue /var/www/html/vue
COPY ./symfony/public /var/www/html/symfony
ADD ./ops/nginx/scripts /root/scripts

ADD ./ops/nginx/conf.d/nginx.conf /etc/nginx/

ADD ./ops/nginx/conf.d/symfony.conf /etc/nginx/sites-available/
ADD ./ops/nginx/conf.d/front.conf /etc/nginx/sites-available/

RUN rm /etc/nginx/conf.d/default.conf

RUN mkdir -p /etc/nginx/sites-enabled

RUN cp /etc/nginx/sites-available/symfony.conf /etc/nginx/sites-enabled/symfony.conf
RUN cp /etc/nginx/sites-available/front.conf /etc/nginx/sites-enabled/front.conf

ENTRYPOINT ["/root/scripts/init.sh"]

CMD ["nginx"]

EXPOSE 80
EXPOSE 443