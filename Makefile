.PHONY: update-services
update-services: update-discount update-product update-user

.PHONY: update-discount
update-discount: build
	cp -r ./gen/nodejs ./services/discount/gen

.PHONY: update-product
update-product: build
	cp -r ./gen/go ./services/product/gen

.PHONY: update-user
update-user: build
	cp -r ./gen/typescript ./services/user/gen

.PHONY: build
build: generate
	buf build -o proto/buf-image.json

.PHONY: generate
generate: install-deps clean lint check
	buf generate

.PHONY: clean
clean:
	rm -rf ./gen ./services/{user,discount,product}/gen

.PHONY: lint
lint:
	buf lint

.PHONY: check
check:
	buf breaking --against proto/buf-image.json

.PHONY: install-deps
install-deps: grpc_tools_node_protoc_plugin protoc-gen-ts protoc-gen-go protoc-gen-go-grpc

.PHONY: grpc_tools_node_protoc_plugin
grpc_tools_node_protoc_plugin:
	which grpc_tools_node_protoc_plugin > /dev/null || npm i -g grpc-tools@1.10.0

.PHONY: protoc-gen-ts
protoc-gen-ts:
	which protoc-gen-ts > /dev/null || npm i -g grpc_tools_node_protoc_ts@5.1.0

.PHONY: protoc-gen-go
protoc-gen-go:
	go get google.golang.org/protobuf/cmd/protoc-gen-go

.PHONY: protoc-gen-go-grpc
protoc-gen-go-grpc:
	go get google.golang.org/grpc/cmd/protoc-gen-go-grpc
