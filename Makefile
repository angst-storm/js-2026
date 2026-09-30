.PHONY: certs build run push clean

DOCKER_USERNAME ?= angstorm
IMAGE_NAME = js-2025-kiprin
IMAGE_TAG ?= $($(IMAGE_TAG),latest)
LOCAL_HTTP_PORT = 80
LOCAL_HTTPS_PORT = 443

certs:
	mkdir -p certs
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
		-keyout certs/selfsigned.key \
		-out certs/selfsigned.crt \
		-subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"
	@echo "Сертификаты успешно сгенерированы в папке certs/"

build:
	docker build -t $(IMAGE_NAME):$(IMAGE_TAG) .
	@echo "Образ $(IMAGE_NAME):$(IMAGE_TAG) успешно собран"

run:
	docker run -d -p $(LOCAL_HTTP_PORT):80 -p $(LOCAL_HTTPS_PORT):443 --name $(IMAGE_NAME)-container $(IMAGE_NAME):$(IMAGE_TAG)
	@echo "Контейнер запущен. Откройте https://localhost:$(LOCAL_HTTPS_PORT)"

stop:
	docker stop $(IMAGE_NAME)-container || true
	docker rm $(IMAGE_NAME)-container || true
	@echo "Контейнер остановлен и удален"

push:
	docker tag $(IMAGE_NAME):${IMAGE_TAG} $(DOCKER_USERNAME)/$(IMAGE_NAME):${IMAGE_TAG}
	docker push $(DOCKER_USERNAME)/$(IMAGE_NAME):${IMAGE_TAG}
	@echo "Образ $(IMAGE_NAME):${IMAGE_TAG} успешно запушен в Docker Hub"

login:
	docker login -u $(DOCKER_USERNAME)
	@echo "Вы успешно авторизованы в Docker Hub"

memo:
	@echo "адрес: e.d.saichik@urfu.ru"
	@echo "заголовок: JavaScript Лабораторная работа №2 Киприн Сергей РИМ-250950"
	@echo "тело:"
	@echo "Ссылка на реестр образов: $(DOCKER_USERNAME)/$(IMAGE_NAME):$(IMAGE_TAG)"
	@echo ""
	@echo "С уважением,"
	@echo "студент Киприн Сергей РИМ-250950."

