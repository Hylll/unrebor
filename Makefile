up: ## Creates the docker-compose stack.
	docker-compose -f ops/docker-compose/docker-compose.yml --project-name unrebor up -d

down: ## Deletes the docker-compose stack.  Your local environment will no longer be accessible.
	docker-compose -f ops/docker-compose/docker-compose.yml --project-name unrebor down

init: ## Initialise local environment
	$(MAKE) up
	$(MAKE) composer-install
	$(MAKE) db-update
	$(MAKE) down

composer-install: ## Install symfony vendors
	docker exec unrebor-php bash -c "composer install"

db-create: ## Uses doctrine:schema:create to create database
	docker exec unrebor-php bash -c "php bin/console doctrine:database:create"

db-update: ## Uses doctrine:schema:update to update database
	docker exec unrebor-php bash -c "php bin/console doctrine:schema:update --force"
