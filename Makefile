
build:
	docker-compose up --build --detach

start:
	docker-compose up --detach

destroy:
	docker-compose down --volumes

stop:
	docker-compose stop

shell:
	docker-compose exec main bash

help:
	@echo "Usage: make [target]"
	@echo "Targets:"
	@echo "  build          Build Docker images"
	@echo "  start          Start Docker containers"
	@echo "  stop           Stop and remove Docker containers"
	@echo "  destroy        Stop and remove Docker containers, volumes, and networks"
	@echo "  help           Display this help message"