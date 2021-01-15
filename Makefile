.DEFAULT_GOAL:=help

##@ Services
.PHONY: update-all
update-all: discount product user ## Generate stubs, and update them on all services.

.PHONY: update-discount
update-discount: generate ## Generate stubs, and update them on "discount" service.
	cp -r ./gen/nodejs ./services/discount/gen

.PHONY: update-product
update-product: generate ## Generate stubs, and update them on "product" service.
	cp -r ./gen/go ./services/product/gen

.PHONY: update-user
update-user: generate ## Generate stubs, and update them on "user" service.
	cp -r ./gen/typescript ./services/user/gen

##@ Stubs
.PHONY: generate
generate: protoc-all clean build ## Generate stubs from Protobuf files, after linting and checking for breaking changes.
	buf generate

.PHONY: clean
clean: ## Remove generated stubs, from "./gen" and from services.
	rm -rf ./gen ./services/{user,discount,product}/gen

##@ Consistency checks
.PHONY: lint
lint: ## Check that Protobuf files passes lint checks.
	buf lint

.PHONY: check
check: ## Check that the Protobuf files has no breaking changes compared to the previous saved FileDescriptorSets (proto/image.json).
	buf breaking --against proto/image.json

.PHONY: build
build: lint check ## Update FileDescriptorSets (proto/image.json), after linting and checking for breaking changes.
	buf build -o proto/image.json

##@ Dependencies
.PHONY: protoc-all
protoc-all: protoc-node protoc-ts protoc-go ## Install all protoc plugins, for NodeJS, Typescript and Go.

.PHONY: protoc-node
protoc-node: ## Install "grpc_tools_node_protoc_plugin", a protoc plugin for NodeJS.
	which grpc_tools_node_protoc_plugin > /dev/null || npm i -g grpc-tools@1.10.0

.PHONY: protoc-ts
protoc-ts: ## Install "protoc-gen-ts", a protoc plugin for Typescript.
	which protoc-gen-ts > /dev/null || npm i -g grpc_tools_node_protoc_ts@5.1.0

.PHONY: protoc-go
protoc-go: ## Install "protoc-gen-go" and "protoc-gen-go-grpc", protoc plugins for Go.
	go get google.golang.org/protobuf/cmd/protoc-gen-go
	go get google.golang.org/grpc/cmd/protoc-gen-go-grpc

##@ Utility
TARGET_MAX_CHAR_NUM=16
FMT_COMMAND=\033[0;35m
FMT_TITLE=\n\033[1m
FMT_TARGET=\033[36m
FMT_RESET=\033[0m
FMT_GROUP=\033[0;34m
.PHONY: help
help: ## Show this help.
	@awk ' \
		BEGIN { \
			FS = ":.*##"; \
			printf "${FMT_TITLE}Usage:${FMT_RESET} \n  ${FMT_COMMAND}make ${FMT_TARGET}<target>${FMT_RESET}\n${FMT_TITLE}Targets:${FMT_RESET} \n" \
		} \
		/^[0-9a-zA-Z_ -]+:.*?##/ { \
			printf "    ${FMT_TARGET}%-$(TARGET_MAX_CHAR_NUM)s${FMT_RESET} %s\n", $$1, $$2 \
		} \
		/^##@/ { \
			printf "${FMT_GROUP}  %s${FMT_RESET}\n", substr($$0, 5) \
		} \
	' $(MAKEFILE_LIST)
